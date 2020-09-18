
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
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg|ico)$/,
        use: [
          {
            // loads files as base64 encoded data url if image file is less than set limit
            loader: 'url-loader',
            options: {
              // if file is greater than the limit (bytes), file-loader is used as fallback
              limit: 8192,
            },
          },
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
