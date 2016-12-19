'use strict';
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    stylish = require('gulp-jscs-stylish'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    angularFileSort = require('gulp-angular-filesort'),
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files');

gulp.task('default', ['watch']);

gulp.task('jshint', function() {
  return gulp.src(['app/**/*.js', '!app/bower_components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('jscs', function() {
  return gulp.src(['app/**/*.js', '!app/bower_components/**'])
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

gulp.task('inject', function() {
  gulp.src('app/index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}),
          {name: 'bower', relative: true}))
    .pipe(inject(
      gulp.src(['app/**/*.js', '!app/bower_components/**']).pipe(angularFileSort()),
      {relative: true}
    ))
    .pipe(gulp.dest('app'));
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './app'
  });

  gulp.watch('app/styles/*.scss', ['sass']);
  gulp.watch('app/**/*.html').on('change', browserSync.reload);
  gulp.watch(['app/**/*.js', '!app/bower_components/**'], ['js-watch', 'inject']);
  gulp.watch(['app/bower_components/**/*.js', 'app/bower_components/**/*.min.css'],
    ['inject']);
});
