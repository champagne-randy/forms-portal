var gulp        = require('gulp'),
   // minifycss   = require('gulp-minify-css'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish');
    //uglify      = require('gulp-uglify'),
    //usemin      = require('gulp-usemin'),
    //imagemin    = require('gulp-imagemin'),
    //rename      = require('gulp-rename'),
    //concat      = require('gulp-concat'),
    //notify      = require('gulp-notify'),
    //cache       = require('gulp-cache'),
    //changed     = require('gulp-changed'),
    //rev         = require('gulp-rev'),
    //browserSync = require('browser-sync'),
    //del         = require('del'),
    //ngannotate  = require('gulp-ng-annotate');


// JShint task
gulp.task('jshint:test', function() {
  return gulp.src('test/**/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter(stylish));
});


// Watch ***
gulp.task('watch:test', ['jshint:test'], function() {
  // Watch .js files
  gulp.watch('{test/**/*.js}', ['jshint:test']);
  
});