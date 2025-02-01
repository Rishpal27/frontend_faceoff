import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows external connections
    port: 3000, // Change if needed
    strictPort: true, // Ensures Vite sticks to the port
    hmr: {
      clientPort: 443, // Important for Render (uses HTTPS)
    },
  },
});

