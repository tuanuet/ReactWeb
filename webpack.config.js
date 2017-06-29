const webpack = require('webpack')
module.exports = {
  entry: [
    'style-loader!script-loader!jquery/dist/jquery.min.js',
    'bootstrap/dist/js/bootstrap.min.js',
    './app/app.js'
  ],
  externals :{
    jquery : 'jQuery'
  },
  plugins :[
    new webpack.ProvidePlugin({
      '$': 'jquery'
    })
  ],
  output :{
    path: __dirname,
    filename: './public/bundle.js'
  },
  module:{
    loaders :[
      {
        loader : 'babel-loader',
        query : {
          presets:['react','es2015'],
          plugins: [
              ["transform-decorators-legacy"]
          ]
        },
        test : /\.jsx?$/,
        exclude : /node_modules/
      },
      {test : /\.css$/,loader : "style-loader!css-loader" },
      {test : /\.woff|\.svg|\.ttf|\.eot|\.woff2/, loader: 'url-loader'}
    ]
  }
};
