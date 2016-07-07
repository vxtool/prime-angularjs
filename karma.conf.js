var webpack = require("webpack");

module.exports = function(config, options){

  config.set({
    basePath:  '',
    frameworks: ['mocha', 'chai'],
    files: [
      'tests/**/*.js'
    ],
    preprocessors: {
      'tests/**/*.js': ['webpack']
    },
    webpack: {
      resolve: {
        extensions: ["", ".js"]
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: "babel-loader",
            query: {
              presets: ['es2015', 'stage-0']
            }
          }
        ]
      }
    },
    webpackMiddleware: {
      stats: {
        colors: true
      }
    },
    exclude: [
    ],
    reporters: ['mocha'],

    plugins: [
      "karma-chai",
      "karma-mocha",
      "karma-phantomjs-launcher",
      'karma-mocha-reporter',
      'karma-webpack'
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: false
  });
};
