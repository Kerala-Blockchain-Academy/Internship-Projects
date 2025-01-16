/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PINATA_JWT: string;
    readonly VITE_GATEWAY_URL: string;
    // Add other environment variables as needed
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  