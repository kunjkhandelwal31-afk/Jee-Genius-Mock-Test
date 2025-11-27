import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development/production)
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Robustly replace process.env.API_KEY with the string value from the environment
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    },
  };
});