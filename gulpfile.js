const gulp = require('gulp');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const svgmin = require('gulp-svgmin');
const svgstore = require('gulp-svgstore');

const path = 'src/assets/svg';

gulp.task('sprite', () => {
  return gulp
    .src(`${path}/i-*.svg`)
    .pipe(plumber())
    .pipe(svgmin())
    .pipe(svgstore({ inlineSvg: true }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest('public/img/'));
});

// Watcher
gulp.task('watch', ['sprite'], () => {
  gulp.watch(`${path}/i-*.svg`, ['sprite']);
});

gulp.task('default', ['watch']);
