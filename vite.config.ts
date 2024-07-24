import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'production') {
    process.env.NODE_ENV = 'production';
  }

  return {
    plugins: [react()],
    base: process.env.REACT_APP_BASENAME || '/',
  };
});
