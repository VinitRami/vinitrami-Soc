# Vinit Rami Photographs

**Live:** https://www.vinitrami.co.in/photography/

A photography portfolio built around a 3D camera. It is a separate page from the
main portfolio, with its own styles, scripts, fonts and images. Nothing here is
shared with the site at the repository root.

## What is on the page

- **The camera.** A black Nikon D5200 modelled in Blender, with baked ambient
  occlusion and a leatherette normal map. Drag to turn it, click to pick it up,
  turn the mode dial, and the photos for that mode play back on its screen.
- **The lens.** Click the lens to zoom (with motor sound). Click through the
  glass to open the PDF portfolio, page by page.
- **Flash and record.** The shutter pops the flash, the red button records.
- **Photo details.** Each frame shows its camera, settings, histogram and colour
  palette, read from the image in the browser.
- **About.** The "Echo Face" spread: the portrait scans in behind a blue line.
- **Darkroom** (`#darkroom`). A desktop monitor runs the edit of the night photo.
  Drag the before/after line or any of the ten Develop sliders; the grade is
  computed per pixel and the histogram shows exactly what is on screen.

Every sound is synthesised with the Web Audio API; there are no audio files.
Without WebGL the page shows a still render of the same camera and keeps the
photo playback.

## Structure

```
photography/
├── index.html              # markup and SEO tags
├── assets/
│   ├── site.css            # all styles, plus the @font-face rules
│   ├── app.js              # all behaviour, photo data and captions
│   ├── fonts/              # Anton, Geist, Geist Mono, Michroma (WOFF2)
│   ├── LICENSE.md          # font and three.js licences
│   └── vendor/three/       # three.js r147 and the five example modules it uses (MIT)
├── img/                    # photos: <id>.webp (full) and <id>-s.webp (screen size)
├── pdf/                    # the PDF portfolio, one WebP per page
├── model/                  # d5200.glb plus its baked AO and normal maps
├── tools/blender_d5200.py  # the Blender (bpy 4.2) script that builds the model
├── og.jpg, favicon.svg
└── README.md
```

## Security

The page loads nothing from other origins, so it runs under the same strict
Content Security Policy as the main site (`vercel.json`, repeated in a
`<meta>` tag): same-origin scripts, styles, fonts, images and fetches only.
There is no inline script, no inline style and no `style` attribute; values
the markup needs are `data-*` attributes mapped to CSS custom properties at
the bottom of `site.css`, and scripts build elements with DOM calls rather
than HTML strings.

## Updating content

- **Photos:** add `img/<id>.webp` and `img/<id>-s.webp`, then add the photo to
  `P` (title, camera, file name, settings) and `ALT` in `assets/app.js`, and to
  a mode's `set` in `MODES`.
- **The real edit for the darkroom:** add `img/night-building-edit.webp` and set
  `HAS_EDIT = true` in `assets/app.js`.
- **About portrait:** `img/echo-face.webp` is a transparent WebP, so it sits on
  the grey studio background with no blend mode.
- **Portfolio pages:** `pdf/page-01.webp` to `pdf/page-12.webp`.
- **Model:** run `blender -b -P tools/blender_d5200.py -- out/` (or the script
  with the `bpy` module) and copy the GLB and the `*_ao.webp` / `*_nrm.webp`
  maps into `model/`.

## Run locally

```bash
python3 -m http.server 8123
# open http://localhost:8123/photography/
```
