import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import App from './App.tsx';
import './index.css';

// Vercel's analytics scripts only exist on Vercel; skip them in offline builds (local run, Android)
const OFFLINE_ONLY = import.meta.env.VITE_OFFLINE_ONLY === 'true';

// Offline caching is only for the offline builds (GitHub download, Android). The website
// needs internet, so it unregisters any worker and clears the cache a previous visit left behind.
if ('serviceWorker' in navigator) {
  if (OFFLINE_ONLY) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  } else {
    navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
    caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {!OFFLINE_ONLY && <Analytics />}
    {!OFFLINE_ONLY && <SpeedInsights />}
  </StrictMode>,
);
