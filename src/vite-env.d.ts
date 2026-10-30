/// <reference types="vite/client" />

declare module 'rehype-sanitize' {
  import { Plugin } from 'unified';
  const rehypeSanitize: Plugin;
  export default rehypeSanitize;
}

interface ImportMetaEnv {
  readonly VITE_ADSENSE_CLIENT_ID: string;
  readonly VITE_DASHBOARD_AD_SLOT: string;
  readonly VITE_QUIZ_AD_SLOT: string;
  readonly VITE_LEADERBOARD_AD_SLOT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
