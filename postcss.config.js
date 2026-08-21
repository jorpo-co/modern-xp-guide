module.exports = {
  plugins: [
    require('postcss-import')({
      path: [require('path').resolve(__dirname, 'assets/css')],
    }),
  ],
}