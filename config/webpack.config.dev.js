var path = require('path');
var webpack = require('webpack');

// App files location
var PATHS = {
  app: path.resolve(__dirname, '../source/js'),
  build: path.resolve(__dirname, '../dist')
};

var plugins = [
  // Avoid publishing files when compilation fails
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
  }),
  new webpack.optimize.OccurenceOrderPlugin()
];

var modulesDirectories = [
  '../node_modules'
];

var aliases = {
  'angular': path.resolve(__dirname, '../node_modules/angular/')
};

module.exports = {
  env : process.env.NODE_ENV,
  entry: {
    app: path.resolve(PATHS.app, 'app.js'),
    vendor: [
      'angular'
    ]
  },
  output: {
    path: PATHS.build,
    filename: 'js/scripts.min.js',
    publicPath: '/'
  },
  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: modulesDirectories,
    alias: aliases
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0']
        },
        include: PATHS.app
      }
    ]
  },
  plugins: plugins,
  devServer: {
    contentBase: path.resolve(__dirname, PATHS.build),
    port: 8100,
    historyApiFallback: true
  },
  devtool: 'eval'
};
