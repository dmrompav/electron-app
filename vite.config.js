import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

import pug from 'pug';
import sass from 'sass';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "./src/app/js/assets/styles/sass/variables/index.sass"
        `
      }
    }
  },
  plugins: [
    pug,
    sass,
    vue()
  ],
  resolve: {
    extensions: ['.js', '.json', '.ts', '.sass', '.vue'],
    alias: getAliases()
  }
});

function _relative (str) {
  return path.resolve(path.dirname('./'), str)
}
function getAliases() {
  return {
    '@app': _relative('src/app'),
      '@langs': _relative('src/app/langs'),
      '@js': _relative('src/app/js'),
        '@assets': _relative('src/app/js/assets'),
          '@fonts': _relative('src/app/js/assets/fonts'),
          '@imgs': _relative('src/app/js/assets/imgs'),
          '@styles': _relative('src/app/js/assets/styles'),
        '@plugins': _relative('src/app/js/plugins'),
        '@Vue': _relative('src/app/js/Vue'),
          '@comps': _relative('src/app/js/Vue/components'),
          '@views': _relative('src/app/js/Vue/views'),
  }
};
