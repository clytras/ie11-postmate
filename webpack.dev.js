const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          // /@babel(?:\/|\\{1,2})runtime|core-js/,
          /node_modules/,
          /\bcore-js\b/,
          /\bwebpack\/buildin\b/
        ],
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            configFile: path.resolve(__dirname, 'babel.config.js'),
            compact: false,
            cacheDirectory: true,
            sourceMaps: false,
          },
        },
      },
    ],
  },
  devtool:"cheap-source-map",
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'shim.js',
  }
}
