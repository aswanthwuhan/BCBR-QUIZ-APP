# BCBR Quiz App

MCQ practice, flashcards and progress tracking for students preparing for the BCBR exam.

## Run locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Copy `.env.example` to `.env` and fill in the values (`GEMINI_API_KEY`, `JWT_SECRET`, Supabase settings).
3. Start the app: `npm run dev` (serves on http://localhost:3000)

## Scripts

- `npm run dev` / `npm start`: run the Express + Vite server
- `npm run build`: production build into `dist/`
- `npm run lint`: TypeScript type check

## Deploy

Configured for Vercel (`vercel.json`, serverless API in `api/`). Set the same environment variables in the Vercel project settings.
