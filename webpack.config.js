const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    inline: true,
    port: 3000,
    contentBase: [
        path.resolve(__dirname, 'public')
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
          limit: 10000
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.join(__dirname, 'src/index.html'),
        inject: 'head',
        filename: path.join(__dirname, 'dist/index.html')
    }),
    new CopyWebpackPlugin({
        patterns: [
            { from: 'assets', to: 'assets' }
        ]
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: '[name].[hash].js'
  }
};
