import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  vite: {
    optimizeDeps: {
      include: ['swiper/react', 'swiper/modules', 'i18next', 'react-i18next']
    },
    ssr: {
      noExternal: ['react-i18next']
    }
  }
});
