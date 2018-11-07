const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

var config = {
  mode: 'development',

  context: __dirname,

  entry: [
    './src/index.js',
    'webpack-hot-middleware/client'
  ],

  output: {
    path: path.join(__dirname, 'public/bundles'),
    publicPath: '/bundles/',
    filename: 'app.js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-function-bind',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-export-default-from',
              [
                'styled-jsx/babel',
                {
                  plugins: [
                    [
                      'styled-jsx-plugin-sass',
                      {
                        sassOptions: {
                          includePaths: ['./src/styles']
                        }
                      }
                    ]
                  ]
                }
              ],
              'react-hot-loader/babel'
            ]
          }
        },
        exclude: [/\/(node_modules)\//, path.join(__dirname, 'src/server')]
      }
    ]
  },

  plugins: [
    new CompressionPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        parallel: true,
        sourceMap: false
      })
    ]
  }
};

module.exports = config;
