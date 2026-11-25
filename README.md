# Vinit Rami · Portfolio

**Live site:** https://www.vinitrami.co.in

Portfolio of Vinit Rami, cybersecurity analyst: VAPT, phishing detection, log
triage and threat intelligence. It is a static bento-style page with no build
step and no third-party scripts, deployed by Vercel from `main`.

## Projects featured on the site

| Project | What it is | Links |
| --- | --- | --- |
| **PhishHawk** | Phishing triage engine for reported emails, built from the MSc dissertation | [Live app](https://phishhawk.vinitrami.co.in) · [Source](https://github.com/vinitrami-Soc/phishhawk) |
| **IntelPulse** | Threat-intelligence correlation and SOC triage workbench | [Live demo](https://vinitrami-soc.github.io/intelpulse/) · [Source](https://github.com/vinitrami-Soc/intelpulse) |
| **OwlTriage** | Offline log triage for Linux, web and Windows logs, with ATT&CK-mapped YAML rules | [Source](https://github.com/vinitrami-Soc/owltriage) |

## Structure

```
.
├── index.html                 # markup, SEO tags and JSON-LD
├── assets/
│   ├── site.css               # all styles: dark and light themes
│   ├── app.js                 # all behaviour: map, terminal, carousels, owl
│   ├── theme.js               # picks the theme before first paint
│   ├── img/                   # headshot and project screenshots (WebP)
│   ├── fonts/                 # self-hosted WOFF2 subsets (see fonts/LICENSE.md)
│   ├── profile-800.jpg        # headshot for structured data
│   ├── og-card.jpg            # 1200x630 social preview card
│   ├── favicon.svg
│   └── Vinit_Rami_CV.pdf      # served by the "Download CV" buttons
├── photography/               # separate photography portfolio, see photography/README.md
├── .well-known/security.txt   # how to report a security issue
├── robots.txt, sitemap.xml
├── vercel.json                # security headers and caching
├── .nojekyll                  # serve files as-is if GitHub Pages ever builds it
└── LICENSE
```

## Photography

`/photography/` is a separate photography portfolio with its own styles,
scripts, fonts and images: a 3D camera to turn and shoot with, the photos on
its screen, a PDF portfolio behind the lens and a darkroom that runs an edit.
It shares nothing with the main page. Details are in
[`photography/README.md`](photography/README.md).

## Security

The page loads nothing from other origins, so the Content Security Policy can
be strict: `default-src 'none'` with only same-origin scripts, styles, fonts
and images. There is no inline script or style, so no `'unsafe-inline'`.
`vercel.json` also sends HSTS, `X-Frame-Options: DENY` (plus
`frame-ancestors 'none'`), `nosniff`, a strict referrer policy, a
permissions policy that turns off sensors, camera, microphone and payment,
and `Cross-Origin-Opener-Policy: same-origin`. The same CSP is repeated in a
`<meta>` tag for hosts that cannot set headers.

Every string the visitor can type (the terminal) is escaped before it is
written to the page. Outbound links use `rel="noopener noreferrer"`. The email
address is assembled in JavaScript rather than written into the HTML, which
keeps it away from simple scrapers.

## Run locally

```bash
python3 -m http.server 8123
# open http://localhost:8123
```

`python3 -m http.server` does not send the headers in `vercel.json`; the
`<meta>` CSP still applies, so CSP mistakes show up locally too.

## Updating content

- **Photo:** replace `assets/img/profile.webp` (800 px wide) and
  `assets/profile-800.jpg`, then regenerate `assets/og-card.jpg`.
- **CV:** replace `assets/Vinit_Rami_CV.pdf`.
- **Theme:** the first visit follows the visitor's system setting; the sun and
  moon button saves their choice in `localStorage` (`vr-theme`).
- **Icons:** the icon font is a subset. To use a new Phosphor icon, add it to
  the subset and add its `.ph-*` rule at the top of `assets/site.css`.

## Easter eggs

Press `~` (or click the terminal tile) to open an interactive terminal. Try
`help`, `whoami`, `skills`, `certs`, `projects`, `nmap`, `phish`, `matrix`,
`theme`, `sudo hire-vinit`, `ls`, `cat flag.txt` and `clear`. Click a country
on the map, and try the Konami code.

## Licence

This repository holds two kinds of work, under different terms:

- **Code:** the site's HTML, CSS and JavaScript are MIT. You're welcome to
  build your own site with it.
- **Personal content:** the photographs, project screenshots,
  `assets/Vinit_Rami_CV.pdf`, the biography and the name are all rights
  reserved. Reuse the code, not the identity.
- **Fonts and icons** in `assets/fonts/` are third-party, under the SIL Open
  Font Licence (text) and MIT (Phosphor icons). See `assets/fonts/LICENSE.md`.

Full text in [`LICENSE`](LICENSE).
