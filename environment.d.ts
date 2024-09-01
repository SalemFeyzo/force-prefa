// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    SITE_URL: string;
    NEXT_PUBLIC_LOCALE_PREFIX: "always" | "as-needed" | "never";
    NEXT_PUBLIC_INSTANTDB_APP_ID: string;
  }
}
