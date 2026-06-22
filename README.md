# DJ Harshaw-Minley — Portfolio

Live portfolio site for **DJ Harshaw-Minley / SkullDAWG Productions** — multidisciplinary digital creator specializing in branding, web design, art prints, album covers, and merchandise.

## 🚀 Deploy to GitHub Pages

1. **Create a new GitHub repository** (e.g. `portfolio` or `dj-harshaw-minley`)
2. **Upload all files** in this folder to the repo root (drag & drop in GitHub, or use git)
3. Make sure the main page is named `index.html`
4. Go to **Settings → Pages**
5. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)`
6. Click **Save** — your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/REPO-NAME/
   ```

## 📁 File Structure

```
/
├── index.html        ← Main portfolio page
├── README.md         ← This file
└── images/           ← All portfolio images (webp optimized)
    ├── image1.webp   (SkullDAWG logo)
    ├── image2.webp   (Serenade tha Boss logo)
    └── ...
```

## ✏️ Customizing

- **Contact link**: Search for `linktr.ee/skulldawgproductions` in `index.html` to update the Linktree URL
- **Dark mode**: Use the theme toggle in the top navigation; the choice is saved in local storage
- **Colors**: All colors are defined as CSS variables at the top of the `<style>` block — change `--cyan`, `--yellow`, `--coral` etc. to retheme
- **Adding new work**: Duplicate a `.project` block in the `#portfolio` section and update the image path, title, year, and description
- **Footer year**: Update `© 2026` in the footer when needed

## 🛠 Tech

Pure HTML + CSS + vanilla JS. No build step, no dependencies, no frameworks. Drop the folder into any static host and it works.
