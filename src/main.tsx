import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import App from './App.tsx';
import './index.css';

// Vercel's analytics scripts only exist on Vercel; skip them in offline builds (local run, Android)
const OFFLINE_ONLY = import.meta.env.VITE_OFFLINE_ONLY === 'true';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {!OFFLINE_ONLY && <Analytics />}
    {!OFFLINE_ONLY && <SpeedInsights />}
  </StrictMode>,
);
