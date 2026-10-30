# BCBR Quiz App

A free, open-source question bank for students preparing for the BCBR (Basic Course in Biomedical Research) exam: 1000+ MCQs across all 23 assignments, flashcards, AI-powered explanations, progress tracking and a leaderboard.

**Created by [Dr. Aswanth Krishnan](https://www.linkedin.com/in/draswanth/)** · Live site: https://bcbr-quiz-app.vercel.app

## Credits

This project is free to use, modify and host under the [MIT License](LICENSE). If you host your own copy, please keep the license file and the "Created by Dr. Aswanth Krishnan" credit in the app footer and About page.

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

## Contributing

Corrections to questions and answers are very welcome. Open an issue or pull request.
