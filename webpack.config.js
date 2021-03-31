const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'development',
  entry: {
    bundle: [path.resolve(__dirname, './src/index.jsx')],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.mjs', '.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    compress: false,
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    writeToDisk: false,
  },
  devtool: 'source-map',
  optimization: {
    minimize: false,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public', to: '.' },
      ],
    }),
  ],
};

module.exports = config;
