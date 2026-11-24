# Bundled font and icon licences

| File | Family | Licence | Copyright | Upstream |
|---|---|---|---|---|
| `InstrumentSans-Regular.woff2`, `InstrumentSans-Bold.woff2` | Instrument Sans | SIL Open Font License 1.1 | Copyright 2022 The Instrument Sans Project Authors | https://github.com/Instrument/instrument-sans |
| `GeistMono-Regular.woff2` | Geist Mono | SIL Open Font License 1.1 | Copyright 2024 The Geist Project Authors | https://github.com/vercel/geist-font |
| `phosphor-subset.woff2` | Phosphor Icons 2.1.1 (regular) | MIT | Copyright (c) 2020-2021 Phosphor Icons | https://github.com/phosphor-icons/web |

The copyright lines were read from each font's own `name` table and from the
Phosphor package's `LICENSE` file.

All four files are WOFF2 subsets. The two text families keep Latin, Latin-1
and common punctuation. The icon font keeps only the glyphs this page uses
(the matching `.ph-*` rules are at the top of `assets/site.css`), which cuts it
from 147 KB to about 6 KB. Nothing is renamed or redrawn.

- OFL 1.1 text: <https://openfontlicense.org/open-font-license-official-text/>
  The OFL permits bundling and redistribution, provided the fonts are not
  sold on their own and a modified version is not distributed under the
  original reserved name.
- MIT text: <https://github.com/phosphor-icons/web/blob/master/LICENSE>
