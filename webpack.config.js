var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-hot-middleware/client',
        "./src/index.js",
    ],
    output: {
        path:'/public',
        filename: "js/build.js",
        publicPath: '/'
    },
    plugins : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
         presets: ['es2015','es2017', 'react', 'stage-0', 'stage-1', 'react-hmre']
        }
      },
       { test: /\.css$/, loader: "style-loader!css-loader" },
       {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
    ]
  },
};