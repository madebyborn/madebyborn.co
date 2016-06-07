'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');

gulp.task('default', ['watch']);

gulp.task('jshint', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jscs', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(jscs())
    .pipe(stylish());
});

gulp.task('watch', function() {
  gulp.watch('app/scripts/**/*.js', ['jshint', 'jscs']);
});
