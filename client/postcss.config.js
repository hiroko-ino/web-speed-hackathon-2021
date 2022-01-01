const postcssImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const tailwindcss = require('tailwindcss');
const cssnano = require('cssnano');

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss(),
    cssnano({
      preset: ['default']
    }),
    postcssPresetEnv({
      stage: 3,
    }),
  ],
};
