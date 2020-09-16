const path = require('path');

module.exports = {
  //main point of entry for webpack
  entry: './client/index.js',
  //Where the bundle file is placed
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    //defines fallback route ('localhost:8080/')
    publicPath: '/',
  },
  //Production or Development, production gets minified/uglified
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        //What dir to skip
        exclude: /(node_modules)/,
        use: {
          //what loader used to make these file type browser ready
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', `@babel/preset-react`],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i, // scss (sass)
        exclude: /node_modules/,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    //where to find the bundle
    publicPath: '/build/',
    proxy: {
      '/api': 'http://localhost:3000',
    },
    //All 404's will fallback to '/'
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
