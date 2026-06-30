SKULLDAWG PRODUCTIONS — MERGED SITE
====================================

WHAT'S IN THIS FOLDER
- index.html ........ your portfolio (recolored to the rates palette, keeps Gaegu)
- rates.html ........ your services & rates page (now uses Gaegu to match the site)
- assets/fonts/ ..... Gaegu Light/Regular/Bold, subset to web-size woff2 (~12KB each)

HOW TO DEPLOY (GitHub Pages)
1. Copy index.html, rates.html, and the assets/ folder into your repo ROOT
   (the same folder your current index.html lives in: PORT_SDP_2026/).
2. KEEP your existing image files exactly where they are:
      - the  images/  folder (all your project pictures)
      - skullshirt.jpg   (root - used as the favicon)
      - mod3_1.jpg       (root)
   These are referenced by the portfolio and are NOT included here, so do not delete them.
3. Commit. The pages go live at:
      .../PORT_SDP_2026/            (portfolio)
      .../PORT_SDP_2026/rates.html  (rates)

HOW THEY CONNECT
- The portfolio nav now has a "Rates" link -> rates.html
- The rates page has a "<- Portfolio" link and a clickable logo -> index.html

LOOK & FEEL
- Colors: your logo's red (#D85040) + cyan (#00A0C8), on dark charcoal.
- Type: Gaegu across both pages (loaded locally - no external font request).
- Theme toggle still works: DARK is the default (the rates scheme); a matching
  light/cream variant is there if a visitor flips it.

NOTE
- index.html still loads React from a CDN (as your original did), so it needs an
  internet connection to render - which is normal and fine on GitHub Pages.
