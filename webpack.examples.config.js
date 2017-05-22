    var path = require('path');
    var webpack = require('webpack');

module.exports = {
    entry: {
        examples: './examples/index.js',
        index: './index.js'
    },
    output: {
        filename: '[name].app.js',
        path: path.resolve(__dirname, 'examples')
    },
    devServer: {
        contentBase: __dirname + '/examples',
        compress: true,
        hot: true,
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
          }
        }
    },
    module: {
      rules: [{
          test: /\.js[x]?$/,
          use: [ 'babel-loader', ],
          exclude: /node_modules/
        }, {
          test: /\.scss$/,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
      ],
    },

    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(),
    ],
};