    var path = require('path');
    var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: __dirname + '/examples',
        compress: true,
        hot: true,
        port: 8080,
        publicPath: "/dist/",
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