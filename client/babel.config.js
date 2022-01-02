module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3',
        modules: 'commonjs',
        useBuiltIns: false,
        exclude: ['proposal-dynamic-import']
      },
    ],
    [
      '@babel/preset-react',
      {
        development: false,
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
};
