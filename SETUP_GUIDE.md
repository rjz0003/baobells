# Baobells PWA — Setup Guide
## From zero to installed on your iPhone in ~20 minutes

---

## What you need
- Any computer (Mac, Windows, doesn't matter)
- A free GitHub account (github.com)
- Your iPhone / your girlfriend's iPhone
- The 4 files in this folder: `index.html`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`

---

## Step 1 — Create a free GitHub account
Go to **github.com** → Sign up (free). Remember your username.

---

## Step 2 — Create a new repository
1. After logging in, click the **+** in the top right → **New repository**
2. Name it exactly: `baobells`
3. Set it to **Public** (required for free GitHub Pages)
4. Check **"Add a README file"**
5. Click **Create repository**

---

## Step 3 — Upload your files
1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop ALL of these files at once:
   - `index.html`
   - `sw.js`
   - `manifest.json`
   - `icon-192.png`
   - `icon-512.png`
3. Scroll down, click **Commit changes**

---

## Step 4 — Enable GitHub Pages
1. In your repository, click **Settings** (top bar)
2. In the left sidebar, click **Pages**
3. Under "Source", select **Deploy from a branch**
4. Under "Branch", select **main** and **/ (root)**
5. Click **Save**
6. Wait ~2 minutes, then refresh the page
7. You'll see a green box: **"Your site is live at https://YOURUSERNAME.github.io/baobells/"**

Copy that URL — that's your app's address.

---

## Step 5 — Install on iPhone (both of you do this)
1. Open **Safari** on iPhone (must be Safari, not Chrome)
2. Go to: `https://YOURUSERNAME.github.io/baobells/`
3. Tap the **Share button** (box with arrow pointing up, bottom center)
4. Scroll down and tap **"Add to Home Screen"**
5. Name it **Baobells** → tap **Add**

It's now on your home screen and launches fullscreen like a real app. ✅

---

## How to push updates (without losing any data)

When you update the app (new features, bug fixes):

1. Make your changes to `index.html` (or `sw.js`)
2. **IMPORTANT**: Open `sw.js` and change the version number at the top:
   ```
   const VERSION = "1.0.1";  ← bump this every update
   ```
3. Upload the changed files to GitHub (same Add file → Upload process, it overwrites)
4. Wait ~2 minutes for GitHub Pages to rebuild
5. Next time either of you opens the app, a banner appears at the bottom:
   **"🏋️ Baobells update ready [Update]"**
6. Tap **Update** — the app refreshes with new code, ALL your data stays intact

### Why data is safe:
- Your workout history, plans, weights — everything — lives in **localStorage** on your device
- Updates only replace the app's code (like updating an app on the App Store)
- Data is never touched by updates, period

---

## Keeping it private

The GitHub repo is public (required for free Pages) but that just means someone could view your code if they found it — it doesn't expose your personal workout data, which lives only on your phones. If you want it truly private, GitHub Pro ($4/month) allows private repos with Pages.

Alternatively, host on **Netlify** (free, supports private projects):
1. Go to netlify.com → Sign up free
2. Drag your entire folder onto their dashboard
3. They give you a URL like `baobells.netlify.app`
4. Same install process from Safari

---

## Two people, two separate data sets

Since you're each installing on your own phone, your data is **completely separate by default** — no setup needed. Each phone has its own localStorage. What you log on your phone never appears on hers and vice versa.

---

## Troubleshooting

**"Add to Home Screen" option is missing**
→ Make sure you're using Safari, not Chrome or Firefox

**App isn't loading after install**
→ Open the URL in Safari first to make sure it loads, then add to home screen

**Update banner not appearing**
→ Close the app fully (swipe up), reopen it. If still nothing, delete and reinstall from Safari.

**Fonts look wrong**
→ You need internet for the first load. After that it works offline.

---

## Your app URL
`https://YOURUSERNAME.github.io/baobells/`

Replace YOURUSERNAME with your actual GitHub username.
