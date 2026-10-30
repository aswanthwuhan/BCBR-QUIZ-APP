# BCBR Quiz App

A free, open-source question bank for students preparing for the BCBR (Basic Course in Biomedical Research) exam: 1000+ MCQs across all 23 assignments, flashcards, AI-powered explanations, progress tracking and a leaderboard.

**Created by [Dr. Aswanth Krishnan](https://www.linkedin.com/in/draswanth/)** · Live site: https://bcbr-quiz-app.vercel.app

📱 **[Download the Android app (APK)](https://github.com/aswanthwuhan/BCBR-QUIZ-APP/releases/latest)**: works offline, no account needed.

## Credits

This project is free to use, modify and host under the [MIT License](LICENSE). If you host your own copy, please keep the license file and the "Created by Dr. Aswanth Krishnan" credit in the app footer and About page.

## Use it without an account or internet

Every version has an offline mode: all questions, flashcards and progress tracking work with no account and no server. Progress is saved on the device. AI explanations still need internet and your own Gemini key (Settings). The leaderboard, feedback and question reports need an online account.

### On your computer

Install [Node.js](https://nodejs.org), download this repo (Code → Download ZIP), then:

- **Windows:** double-click `start-local.bat`
- **Mac / Linux:** run `./start-local.sh`
- or run `npm install` then `npm run local`

The app opens at http://localhost:3000. Phones on the same Wi-Fi can open the **Network** address printed in the window, for example `http://192.168.1.5:3000`.

### On your phone

- **Install from the website (Android or iPhone):** open the site in Chrome/Safari → menu → **Add to Home Screen** / **Install app**. After the first visit it works fully offline.
- **Android app (APK):** download the `.apk` from the [latest release](https://github.com/aswanthwuhan/BCBR-QUIZ-APP/releases/latest), open it on your phone and allow "Install unknown apps" when asked. You can also build it yourself (below).

### Build the Android app

Requires [Android Studio](https://developer.android.com/studio) (it includes the JDK and Android SDK).

```bash
npm install
npm run android:sync
cd android
./gradlew assembleDebug
```

The APK is written to `android/app/build/outputs/apk/debug/app-debug.apk`. On Windows, use `gradlew.bat assembleDebug`, and set `JAVA_HOME` to Android Studio's `jbr` folder if Gradle can't find Java. You can also run `npm run android:open` and build from Android Studio (Build → Build APK).

## Host your own copy

You need Node.js 20+, a free [Supabase](https://supabase.com) project, and (optionally) a [Gemini API key](https://aistudio.google.com/app/apikey) for AI explanations.

1. **Fork or clone** this repo and install dependencies:
   ```bash
   npm install
   ```
2. **Create the database:** open your Supabase project → SQL Editor, paste [`supabase/schema.sql`](supabase/schema.sql) and run it.
3. **Configure:** copy `.env.example` to `.env` and fill in:
   - `SUPABASE_URL`, `SUPABASE_ANON_KEY`: from Supabase → Project Settings → API (server-side only)
   - `JWT_SECRET`: a long random string, e.g. `openssl rand -hex 64`
   - `ALLOWED_ORIGINS`: your site URL(s), comma-separated
   - `GEMINI_API_KEY`: optional
   - `ADMIN_TOKEN`: optional, enables the admin "reset scores" endpoint
   - `VITE_SUPPORT_UPI_ID`, `VITE_SUPPORT_PAYEE_NAME`: optional, your own UPI details for the "Support" dialog
4. **Run locally:**
   ```bash
   npm run dev
   ```
   The app serves on http://localhost:3000.

### Deploy to Vercel

Import the repo in Vercel, add the same environment variables in Project Settings → Environment Variables, and deploy. `vercel.json` routes `/api/*` to the serverless API in `api/`.

### Point it at your own domain

Replace `https://bcbr-quiz-app.vercel.app` with your URL in `index.html` (SEO tags), `public/sitemap.xml`, `public/robots.txt` and the `ALLOWED_ORIGINS` default in `api/index.ts`. Update the contact email in `src/components/Legal.tsx` and `index.html` to your own. Delete `public/google0637bad7211e755f.html`, which is the original site's Google Search Console verification file.

## Scripts

- `npm run dev` / `npm start`: run the Express + Vite server
- `npm run build`: production build into `dist/`
- `npm run lint`: TypeScript type check

## Acknowledgements

Thanks to **Dr. Harshad** from [Aurapharmlab](https://aurapharmlab.com) for the support in providing Claude access, which helped build this app.

## Contributing

Corrections to questions and answers are very welcome. Open an issue or pull request.
