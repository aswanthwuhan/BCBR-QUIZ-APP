/// <reference types="vite/client" />

declare module 'rehype-sanitize' {
  import { Plugin } from 'unified';
  const rehypeSanitize: Plugin;
  export default rehypeSanitize;
}

interface ImportMetaEnv {
  readonly VITE_SUPPORT_UPI_ID?: string;
  readonly VITE_SUPPORT_PAYEE_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
