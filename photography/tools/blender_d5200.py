"""Builds the black D5200-style camera in Blender (bpy), bakes ambient occlusion per part plus a
leatherette / rubber skin normal map, and exports a GLB with named nodes for the web page.
Coordinates are the page's three.js coordinates (Y up, lens pointing +Z), exported without axis conversion.
usage: python blender_d5200.py <out dir>"""
import math, os, sys, time
import bpy, bmesh
from mathutils import Matrix, Vector

OUT = sys.argv[-1]
os.makedirs(OUT, exist_ok=True)
bpy.ops.wm.read_factory_settings(use_empty=True)
scene = bpy.context.scene
coll = scene.collection

MX, MY, FZ, BZ = 0.55, -0.3, 2.4, -2.4
LENS_BASE = Vector((MX, MY, FZ + 0.22))
RX90 = Matrix.Rotation(math.radians(90), 4, 'X')        # lens-local +Y becomes world +Z


def mat(name):
    m = bpy.data.materials.get(name)
    if m is None:
        m = bpy.data.materials.new(name)
        m.use_nodes = True
    return m


# ---------- temporary bmesh builders (all return closed solids so normals can be recalculated) ----------
def finish(bm, sharp_deg=38):
    bmesh.ops.remove_doubles(bm, verts=bm.verts, dist=1e-5)
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    for f in bm.faces:
        f.smooth = True
    for e in bm.edges:
        if e.is_manifold and e.calc_face_angle(0) > math.radians(sharp_deg):
            e.smooth = False
    return bm


def lathe(pts, segs=128):
    """closed profile [(r, y), ...] spun around Y"""
    bm = bmesh.new()
    vs = [bm.verts.new((r, y, 0)) for r, y in pts]
    es = [bm.edges.new((vs[i], vs[(i + 1) % len(vs)])) for i in range(len(vs))]
    bmesh.ops.spin(bm, geom=vs + es, cent=(0, 0, 0), axis=(0, 1, 0), angle=math.tau, steps=segs, use_merge=True)
    return bm


def ring(r_out, r_in, y0, y1, segs=128):
    return lathe([(r_in, y0), (r_out, y0), (r_out, y1), (r_in, y1)], segs)


def disc(r, y0, y1, segs=64):
    return lathe([(0, y0), (r, y0), (r, y1), (0, y1)], segs)


def knurl(r, h, ribs, amp, wall=0.12):
    bm = ring(r, r - wall, -h / 2, h / 2, ribs * 4)
    for v in bm.verts:
        x, z = v.co.x, v.co.z
        rr = math.hypot(x, z)
        if rr > r - wall / 2:
            a = math.atan2(z, x)
            f = 0.5 + 0.5 * math.cos(a * ribs)
            s = (r - amp * (1 - f ** 0.6)) / rr
            v.co.x, v.co.z = x * s, z * s
    return bm


def torus(R, r, segs=64, tube=16):
    pts = [(R + r * math.cos(t), r * math.sin(t)) for t in [i / tube * math.tau for i in range(tube)]]
    return lathe(pts, segs)


def rbox(w, h, d, r, segs=4):
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1.0)
    for v in bm.verts:
        v.co.x *= w; v.co.y *= h; v.co.z *= d
    if r > 0:
        bmesh.ops.bevel(bm, geom=list(bm.edges) + list(bm.verts), offset=min(r, w / 2 - 1e-3, h / 2 - 1e-3, d / 2 - 1e-3),
                        segments=segs, profile=0.5, affect='EDGES', clamp_overlap=True)
    return bm


def sample_path(cmds, steps=14):
    """cmds: ('M', p) ('L', p) ('Q', ctrl, p) in 2D -> list of points"""
    pts, cur = [], None
    for c in cmds:
        if c[0] in ('M', 'L'):
            cur = c[1]; pts.append(cur)
        else:
            ctrl, end = c[1], c[2]
            for i in range(1, steps + 1):
                t = i / steps
                pts.append(((1 - t) ** 2 * cur[0] + 2 * (1 - t) * t * ctrl[0] + t * t * end[0],
                            (1 - t) ** 2 * cur[1] + 2 * (1 - t) * t * ctrl[1] + t * t * end[1]))
            cur = end
    out = []
    for p in pts:
        if not out or (abs(p[0] - out[-1][0]) + abs(p[1] - out[-1][1])) > 1e-4:
            out.append(p)
    if abs(out[0][0] - out[-1][0]) + abs(out[0][1] - out[-1][1]) < 1e-4:
        out.pop()
    return out


def extrude_xy(pts, z0, z1, bevel, segs=6):
    """polygon in the XY plane extruded along Z with rounded cap edges"""
    bm = bmesh.new()
    vs = [bm.verts.new((x, y, z0)) for x, y in pts]
    f = bm.faces.new(vs)
    ret = bmesh.ops.extrude_face_region(bm, geom=[f])
    nv = [g for g in ret['geom'] if isinstance(g, bmesh.types.BMVert)]
    for v in nv:
        v.co.z = z1
    bmesh.ops.recalc_face_normals(bm, faces=bm.faces)
    caps = [fc for fc in bm.faces if abs(fc.normal.z) > 0.99]
    edges = set()
    for fc in caps:
        edges.update(fc.edges)
    bmesh.ops.bevel(bm, geom=list(edges), offset=bevel, segments=segs, profile=0.5, affect='EDGES', clamp_overlap=True)
    bmesh.ops.triangulate(bm, faces=[fc for fc in bm.faces if len(fc.verts) > 4])
    return bm


class Part:
    def __init__(self, name, origin=(0, 0, 0)):
        self.name, self.origin = name, Vector(origin)
        self.bm, self.mats = bmesh.new(), []

    def add(self, bm, m, matrix=None, sharp=38):
        if matrix is not None:
            bmesh.ops.transform(bm, matrix=matrix, verts=bm.verts)
        finish(bm, sharp)
        if m not in self.mats:
            self.mats.append(m)
        idx = self.mats.index(m)
        for f in bm.faces:
            f.material_index = idx
        me = bpy.data.meshes.new('tmp')
        bm.to_mesh(me); bm.free()
        me.transform(Matrix.Translation(-self.origin))
        self.bm.from_mesh(me)
        bpy.data.meshes.remove(me)
        return self

    def build(self):
        me = bpy.data.meshes.new(self.name)
        self.bm.to_mesh(me); self.bm.free()
        for m in self.mats:
            me.materials.append(mat(m))
        ob = bpy.data.objects.new(self.name, me)
        coll.objects.link(ob)
        ob.location = self.origin
        return ob


T = lambda x, y, z: Matrix.Translation((x, y, z))
def lensM(y=0.0):
    return T(*LENS_BASE) @ RX90 @ T(0, y, 0)


# ---------- body shell ----------
L, R, B, TP = -5.4, 6.3, -3.8, 3.4
outline = sample_path([
    ('M', (L + 1.3, B)), ('L', (R - 1.3, B)), ('Q', (R, B), (R, B + 1.3)), ('L', (R, TP - 1.0)), ('Q', (R, TP), (R - 1.1, TP)),
    ('L', (3.9, TP)), ('Q', (3.55, TP), (3.38, TP + 0.32)), ('L', (2.72, 4.82)), ('Q', (2.55, 5.2), (2.2, 5.2)),
    ('L', (-1.1, 5.2)), ('Q', (-1.45, 5.2), (-1.62, 4.82)), ('L', (-2.28, TP + 0.32)), ('Q', (-2.45, TP), (-2.8, TP)),
    ('L', (L + 1.1, TP)), ('Q', (L, TP), (L, TP - 1.0)), ('L', (L, B + 1.3)), ('Q', (L, B), (L + 1.3, B))])
body = Part('body').add(extrude_xy(outline, BZ, FZ, 0.42, 7), 'm_body')

# ---------- rubber: grip, thumb rest, eyecup, port covers, base pad ----------
grip_xz = sample_path([
    ('M', (-2.9, 2.3)), ('L', (-2.9, 3.6)), ('Q', (-2.9, 4.6), (-3.9, 4.6)), ('L', (-4.75, 4.6)), ('Q', (-5.75, 4.6), (-5.75, 3.6)),
    ('L', (-5.75, -1.6)), ('Q', (-5.75, -2.4), (-5.0, -2.4)), ('L', (-2.9, -2.4))])
gb = extrude_xy([(x, -z) for x, z in grip_xz], -3.8, 3.25, 0.5, 7)
rubber = Part('rubber').add(gb, 'm_rubber', Matrix.Rotation(math.radians(-90), 4, 'X'))
rubber.add(rbox(1.5, 1.6, 0.22, 0.1), 'm_rubber', T(-4.55, 1.6, BZ - 0.06))
rubber.add(rbox(2.8, 2.1, 0.75, 0.32), 'm_rubber', T(MX, 3.55, BZ - 0.28))
rubber.add(rbox(0.22, 2.4, 1.7, 0.1), 'm_rubber', T(6.32, -0.5, 0.2))
rubber.add(rbox(0.22, 1.2, 1.4, 0.1), 'm_rubber', T(6.32, -2.55, 0.4))
rubber.add(rbox(3.0, 0.08, 3.8, 0.04), 'm_rubber', T(-3.7, -3.82, 0.6))

# ---------- static plastic parts ----------
plastic = Part('plastic')
plastic.add(ring(3.3, 2.75, 0, 0.14), 'm_plastic', T(MX, MY, FZ) @ RX90)                 # mount surround
plastic.add(rbox(7.9, 5.7, 0.5, 0.2), 'm_plastic', T(1.35, -0.65, BZ - 0.22))            # tilting screen
plastic.add(disc(0.22, -2.5, 2.5, 32), 'm_plastic', T(5.35, -0.65, BZ - 0.22))           # screen hinge
cd = knurl(0.72, 0.42, 40, 0.05, wall=0.7)
plastic.add(cd, 'm_plastic', T(-4.45, 3.05, -2.0))                                        # rear command dial
for x, y, r in ((-3.3, 2.55, 0.3), (4.4, 2.75, 0.28), (5.4, 2.75, 0.28), (-4.65, -2.5, 0.28), (-3.3, -2.5, 0.28)):
    plastic.add(disc(r, -0.1, 0.1, 40), 'm_plastic', T(x, y, BZ - 0.06) @ RX90)           # rear buttons
plastic.add(lathe([(0.55, 0), (1.05, 0), (1.08, 0.08), (1.0, 0.18), (0.6, 0.2)], 96), 'm_gloss',
            T(-3.95, -0.55, BZ - 0.02) @ Matrix.Rotation(math.radians(-90), 4, 'X'))      # multi selector
plastic.add(disc(0.45, -0.12, 0.12, 48), 'm_plastic', T(-3.95, -0.55, BZ - 0.1) @ RX90)   # OK
plastic.add(disc(0.25, -0.09, 0.09, 32), 'm_plastic', T(4.3, -2.05, FZ + 0.06) @ RX90)    # Fn
plastic.add(disc(0.25, -0.09, 0.09, 32), 'm_plastic', T(3.75, 2.25, FZ + 0.06) @ RX90)    # flash button
plastic.add(disc(0.26, -0.07, 0.07, 32), 'm_plastic', T(-4.6, 3.24, 1.45))                # info
plastic.add(disc(0.26, -0.07, 0.07, 32), 'm_plastic', T(-3.85, 3.32, 0.95))               # exposure
plastic.add(rbox(1.5, 1.0, 0.04, 0.05), 'm_eyeglass', T(MX, 3.6, BZ - 0.65))              # eyepiece
plastic.add(rbox(0.42, 0.3, 0.06, 0.1), 'm_eyeglass', T(-4.35, 2.1, 4.59))                # IR window
plastic.add(disc(0.29, -0.03, 0.03, 40), 'm_lamp', T(-2.2, 2.45, FZ + 0.02) @ RX90)       # AF lamp
for px, pz in ((-0.45, 1.55), (1.55, 1.55)):
    for i in range(3):
        plastic.add(disc(0.06, -0.03, 0.03, 12), 'm_black', T(px + i * 0.2, 5.19, pz))     # microphone
plastic.add(disc(0.32, -0.01, 0.01, 32), 'm_black', T(MX, -3.83, 0))                      # tripod hole

# ---------- static metal ----------
metal = Part('metal')
metal.add(lathe([(2.5, 0.1), (2.95, 0.1), (2.97, 0.24), (2.6, 0.26)]), 'm_chrome', T(MX, MY, FZ) @ RX90)
metal.add(rbox(2.1, 0.14, 1.9, 0.05), 'm_steel', T(MX, 5.24, -0.3))
metal.add(rbox(0.16, 0.22, 1.9, 0.04), 'm_steel', T(MX - 0.98, 5.36, -0.3))
metal.add(rbox(0.16, 0.22, 1.9, 0.04), 'm_steel', T(MX + 0.98, 5.36, -0.3))
metal.add(rbox(0.4, 0.06, 0.5, 0.02), 'm_gold', T(MX, 5.32, -0.3))
metal.add(torus(0.3, 0.05, 40, 12), 'm_chrome', T(-2.2, 2.45, FZ + 0.02) @ RX90)
metal.add(disc(0.33, -0.13, 0.13, 40), 'm_darkmetal', T(4.3, -1.0, FZ + 0.1) @ RX90)      # lens release
metal.add(torus(0.36, 0.035, 40, 10), 'm_chrome', T(4.3, -1.0, FZ + 0.03) @ RX90)
metal.add(lathe([(0.55, 0), (0.98, 0), (1.0, 0.04), (1.0, 0.2), (0.55, 0.22)], 96), 'm_darkmetal', T(-4.35, 3.18, 2.9))  # power ring
metal.add(rbox(0.5, 0.16, 0.34, 0.06), 'm_darkmetal', T(-5.35, 3.27, 2.95))               # power lever
metal.add(lathe([(1.15, 0), (1.42, 0), (1.45, 0.05), (1.45, 0.17), (1.15, 0.2)], 96), 'm_darkmetal', T(-3.75, 3.4, -0.35))  # dial base
metal.add(rbox(0.5, 0.14, 0.32, 0.05), 'm_darkmetal', T(-3.75 - 1.55, 3.5, -0.35 + 0.4) @ Matrix.Rotation(-0.5, 4, 'Y'))
metal.add(torus(0.26, 0.07, 32, 12), 'm_steel', T(6.38, 2.55, 0.8) @ Matrix.Rotation(math.radians(90), 4, 'Y'))
metal.add(torus(0.26, 0.07, 32, 12), 'm_steel', T(-5.82, 2.7, 0.2) @ Matrix.Rotation(math.radians(90), 4, 'Y'))
metal.add(ring(0.62, 0.32, -0.08, 0.0, 48), 'm_steel', T(MX, -3.76, 0))                    # tripod socket

# ---------- moving parts ----------
dial = Part('modeDial', (-3.75, 3.6, -0.35))
dial.add(knurl(1.2, 0.72, 64, 0.06, wall=1.2), 'm_plastic', T(-3.75, 3.96, -0.35))
dial.add(torus(1.17, 0.05, 96, 12), 'm_plastic', T(-3.75, 4.32, -0.35))

shutter = Part('shutterBtn', (-4.35, 3.38, 2.9))
shutter.add(disc(0.5, -0.11, 0.11, 48), 'm_plastic', T(-4.35, 3.38, 2.9))
dome = lathe([(0, 0.7)] + [(0.7 * math.sin(t), 0.7 * math.cos(t)) for t in [0.78 * i / 12 for i in range(1, 13)]] + [(0.49, 0.0), (0, 0.0)], 48)
shutter.add(dome, 'm_plastic', T(-4.35, 3.315 - 0.175, 2.9) @ Matrix.Diagonal((1, 0.35, 1, 1)))
shutter.add(torus(0.52, 0.03, 48, 10), 'm_chrome', T(-4.35, 3.4, 2.9))

rec = Part('recBtn', (-3.4, 3.42, 1.9))
rec.add(disc(0.17, -0.06, 0.06, 32), 'm_red', T(-3.4, 3.42, 1.9))

flash = Part('flashHead', (MX, 5.27, 0.5))
flash.add(rbox(4.0, 0.84, 1.98, 0.26), 'm_plastic', T(MX, 4.85, 1.48))
flash.add(rbox(2.8, 0.42, 0.05, 0.08), 'm_flashlens', T(MX, 4.86, 2.475))

lensFixed = Part('lensFixed', LENS_BASE)
lensFixed.add(lathe([(2.62, 0), (2.86, 0.04), (2.9, 0.2), (2.9, 0.9), (2.98, 0.95), (2.6, 0.95), (2.6, 0)]), 'm_gloss', lensM())

zoom = Part('zoomRing', LENS_BASE)
zoom.add(knurl(3.1, 2.6, 120, 0.075, wall=0.2), 'm_ribs', lensM(2.25))
zoom.add(ring(3.11, 2.92, 0.95, 0.97), 'm_ribs', lensM())
zoom.add(ring(3.11, 2.92, 3.53, 3.57), 'm_ribs', lensM())

inner = Part('lensInner', LENS_BASE)
inner.add(ring(2.88, 2.74, 1.0, 4.1), 'm_gloss', lensM())                                 # inner tube, seen when zoomed
inner.add(lathe([(2.98, 4.07), (2.98, 5.45), (3.02, 5.5), (2.6, 5.5), (2.6, 4.07)]), 'm_gloss', lensM())
inner.add(knurl(3.06, 0.7, 180, 0.04, wall=0.3), 'm_ribs', lensM(5.85))
inner.add(lathe([(3.0, 6.2), (3.1, 6.24), (3.13, 6.5), (3.07, 6.7), (2.86, 6.78), (2.7, 6.72), (2.66, 6.5), (2.5, 6.5), (2.5, 6.2)]), 'm_gloss', lensM())
inner.add(ring(2.42, 2.28, 4.5, 6.5, 96), 'm_inner', lensM())
inner.add(ring(2.67, 2.28, 6.48, 6.5, 128), 'm_ringface', lensM())                        # printed front ring (text in the page)
bl = bmesh.new()
outer = [bl.verts.new((2.28 * math.cos(i / 63 * math.tau), 0, 2.28 * math.sin(i / 63 * math.tau))) for i in range(63)]
hept = []
for k in range(7):
    a0, a1 = k / 7 * math.tau + 0.2, (k + 1) / 7 * math.tau + 0.2
    p0 = Vector((0.95 * math.cos(a0), 0, 0.95 * math.sin(a0))); p1 = Vector((0.95 * math.cos(a1), 0, 0.95 * math.sin(a1)))
    for j in range(9):
        hept.append(bl.verts.new(p0.lerp(p1, j / 9)))
eo = [bl.edges.new((outer[i], outer[(i + 1) % 63])) for i in range(63)]
ei = [bl.edges.new((hept[i], hept[(i + 1) % 63])) for i in range(63)]
bmesh.ops.bridge_loops(bl, edges=eo + ei)
ext = bmesh.ops.extrude_face_region(bl, geom=list(bl.faces))
for v in [g for g in ext['geom'] if isinstance(g, bmesh.types.BMVert)]:
    v.co.y += 0.04
inner.add(bl, 'm_blades', lensM(4.66))
inner.add(disc(1.2, 4.5, 4.55, 48), 'm_black', lensM())
cap2 = lathe([(0, 5.74)] + [(3.5 * math.sin(t), 2.24 + 3.5 * math.cos(t)) for t in [0.507 * i / 16 for i in range(1, 17)]] + [(1.7, 5.22), (0, 5.22)], 96)
inner.add(cap2, 'm_coated', lensM())
cap1 = lathe([(0, 6.503)] + [(6.0 * math.sin(t), 0.503 + 6.0 * math.cos(t)) for t in [0.39 * i / 18 for i in range(1, 19)]] + [(2.28, 5.95), (0, 5.95)], 128)
inner.add(cap1, 'm_glass', lensM())

parts = [p.build() for p in (body, rubber, plastic, metal, dial, shutter, rec, flash, lensFixed, zoom, inner)]
print('built', [(o.name, len(o.data.polygons)) for o in parts], flush=True)

# ---------- unwrap ----------
for o in parts:
    for s in bpy.context.selected_objects:
        s.select_set(False)
    bpy.context.view_layer.objects.active = o
    o.select_set(True)
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='SELECT')
    bpy.ops.uv.smart_project(angle_limit=math.radians(60), island_margin=0.012, scale_to_bounds=False)
    bpy.ops.object.mode_set(mode='OBJECT')
    o.select_set(False)

# ---------- bake ----------
scene.render.engine = 'CYCLES'
scene.cycles.device = 'CPU'
scene.cycles.samples = 48
world = bpy.data.worlds.new('World'); scene.world = world
world.light_settings.distance = 1.6
scene.render.bake.margin = 10

SIZE = {'body': 2048, 'rubber': 2048, 'plastic': 1024, 'metal': 1024, 'modeDial': 512, 'shutterBtn': 256, 'recBtn': 128,
        'flashHead': 512, 'lensFixed': 1024, 'zoomRing': 1024, 'lensInner': 1024}
SKIN = {'body': ('voronoi', 46.0, 0.55), 'rubber': ('voronoi', 22.0, 0.9)}


def bake_target(o, kind, size):
    img = bpy.data.images.new(f'{o.name}_{kind}', size, size, alpha=False, float_buffer=False)
    if kind == 'nrm':
        img.colorspace_settings.name = 'Non-Color'
    canon = [s.material for s in o.material_slots]
    for s in o.material_slots:
        m = s.material.copy()
        s.material = m
        nt = m.node_tree
        bsdf = nt.nodes.get('Principled BSDF')
        if kind == 'nrm' and o.name in SKIN:
            _, scale, strength = SKIN[o.name]
            tc = nt.nodes.new('ShaderNodeTexCoord'); vo = nt.nodes.new('ShaderNodeTexVoronoi'); no = nt.nodes.new('ShaderNodeTexNoise')
            mix = nt.nodes.new('ShaderNodeMath'); bump = nt.nodes.new('ShaderNodeBump')
            vo.inputs['Scale'].default_value = scale; vo.inputs['Randomness'].default_value = 0.9
            no.inputs['Scale'].default_value = scale * 0.35; no.inputs['Detail'].default_value = 4
            mix.operation = 'MULTIPLY_ADD'
            nt.links.new(tc.outputs['Object'], vo.inputs['Vector']); nt.links.new(tc.outputs['Object'], no.inputs['Vector'])
            nt.links.new(vo.outputs['Distance'], mix.inputs[0]); mix.inputs[1].default_value = 1.0
            nt.links.new(no.outputs['Fac'], mix.inputs[2])
            nt.links.new(mix.outputs['Value'], bump.inputs['Height'])
            bump.inputs['Strength'].default_value = strength; bump.inputs['Distance'].default_value = 0.02
            nt.links.new(bump.outputs['Normal'], bsdf.inputs['Normal'])
        it = nt.nodes.new('ShaderNodeTexImage'); it.image = img
        for n in nt.nodes:
            n.select = False
        it.select = True; nt.nodes.active = it
    return img, canon


for o in parts:
    for s in bpy.context.selected_objects:
        s.select_set(False)
    o.select_set(True)
    bpy.context.view_layer.objects.active = o
    size = SIZE[o.name]
    t0 = time.time()
    img, canon = bake_target(o, 'ao', size)
    bpy.ops.object.bake(type='AO', margin=10, use_clear=True)
    img.filepath_raw = os.path.join(OUT, f'{o.name}_ao.png'); img.file_format = 'PNG'; img.save()
    for s, m in zip(o.material_slots, canon):
        s.material = m
    if o.name in SKIN:
        img, canon = bake_target(o, 'nrm', size)
        bpy.ops.object.bake(type='NORMAL', normal_space='TANGENT', margin=10, use_clear=True)
        img.filepath_raw = os.path.join(OUT, f'{o.name}_nrm.png'); img.file_format = 'PNG'; img.save()
        for s, m in zip(o.material_slots, canon):
            s.material = m
    o.select_set(False)
    print('baked', o.name, size, round(time.time() - t0, 1), 's', flush=True)

# ---------- export ----------
for o in parts:
    o.select_set(True)
bpy.ops.export_scene.gltf(filepath=os.path.join(OUT, 'd5200.glb'), export_format='GLB', use_selection=True,
                          export_yup=False, export_apply=True, export_texcoords=True, export_normals=True,
                          export_tangents=True, export_materials='EXPORT', export_image_format='NONE')
print('exported', os.path.getsize(os.path.join(OUT, 'd5200.glb')), flush=True)
