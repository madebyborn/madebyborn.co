'use strict';
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var stylish = require('gulp-jscs-stylish');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

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

gulp.task('js-watch', ['jshint', 'jscs'], browserSync.reload);

gulp.task('sass', function() {
  return gulp.src('app/styles/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './app'
  });

  gulp.watch('app/styles/*.scss', ['sass']);
  gulp.watch('app/**/*.html').on('change', browserSync.reload);
  gulp.watch('app/scripts/**/*.js', ['js-watch']);
});
