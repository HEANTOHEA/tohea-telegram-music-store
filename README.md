# Tohea Music Store — Static Website

## What is included
- `index.html`: Khmer-language storefront
- `style.css`: responsive white/green design
- `script.js`: demo catalog, search and category filters

## Run locally
Open `index.html` in a browser. For a local server, open PowerShell in this folder and run:
```powershell
py -m http.server 8080
```
Then visit `http://localhost:8080`.

## Customize music
Edit the `tracks` array in `script.js`. Replace demo titles/artists with entries you are allowed to distribute. Set `url` to a direct URL for an authorized file. Empty URLs intentionally show “មិនទាន់មានតំណ”.

## Security
- Never put Telegram bot tokens, private API keys, or other secrets in `script.js` or any frontend file.
- The static site does not upload files to Telegram. Use a secured backend/Worker for upload actions.
- Before connecting any public upload API, add authentication, validation, rate limiting, and file-size limits.

## Deploy free with Cloudflare Pages
1. Create a new GitHub repository just for this static site.
2. Upload only `index.html`, `style.css`, and `script.js` (and optionally this README). Do not upload `.env`, `node_modules`, `downloads`, or the original Node project secrets.
3. In Cloudflare Dashboard, open **Workers & Pages** → **Create application** → **Pages** → **Import an existing Git repository**.
4. Choose your repository and set:
   - Production branch: `main`
   - Build command: `exit 0`
   - Build output directory: `/` (if the dashboard accepts root) or the repository root / leave blank as directed by the current UI.
5. Deploy. Cloudflare Pages gives you a `*.pages.dev` URL.

Official docs: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
