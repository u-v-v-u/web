import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
      scss: true
    })
  ],
  kit: {
    adapter: adapter(),
    alias: {
      '@components': './src/components/index.ts'
    }
  }
};

export default config;
