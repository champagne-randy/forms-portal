var gulp        = require('gulp'),
   // minifycss   = require('gulp-minify-css'),
    jshint      = require('gulp-jshint'),
    stylish     = require('jshint-stylish'),
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
gulp.task('jshint', function() {
  return gulp.src('./**/*.js')
             .pipe(jshint())
             .pipe(jshint.reporter(stylish));
});


// Watch ***
gulp.task('watch', function() {
  // Watch .js files
  gulp.watch('{./**/*.js}', ['jshint']);
  
});