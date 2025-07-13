/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SMTP_USER: string;
  readonly VITE_SMTP_PASSWORD: string;
  readonly VITE_SMTP_HOST: string;
  readonly VITE_SMTP_PORT: string;
  readonly VITE_SMTP_SECURE: string;
  readonly VITE_SMTP_TO: string;
  readonly VITE_DEFAULT_LANGUAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}