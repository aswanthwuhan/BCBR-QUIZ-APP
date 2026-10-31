# BCBR QBank Desktop

Electron wrapper for the offline build of the BCBR QBank app (Windows, macOS, Linux). Data is stored locally in the app's localStorage; no login or server is needed.

## Run in development

```bash
cd desktop
npm install
npm run web     # builds the offline web bundle into desktop/web
npm start       # launches the desktop app
```

Run `npm run smoke` to start the app headless-style and check that it renders (prints `SMOKE_RESULT` and exits 0 on success).

## Build installers

Run from the `desktop` folder after `npm run web`:

- Windows (NSIS installer): `npm run dist:win`
- macOS (DMG): `npm run dist:mac`
- Linux (AppImage and deb): `npm run dist:linux`

Output goes to `desktop/dist`. Build each platform on that platform (macOS DMG requires a Mac).

## Unsigned builds

The installers are not code-signed.

- Windows: SmartScreen may warn. Click **More info**, then **Run anyway**.
- macOS: right-click the app and choose **Open**, or run:
  `xattr -cr "/Applications/BCBR QBank.app"`
