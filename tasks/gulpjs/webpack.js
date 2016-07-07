var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackConfig = require("../../../config/webpack.config.prod.js");

gulp.task('webpack', function () {
  var myConfig = Object.create(webpackConfig);

  webpack(myConfig, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack:build]", stats.toString({
      colors: true
    }));
    callback();
  });
});
