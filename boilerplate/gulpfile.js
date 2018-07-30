var gulp = require('gulp');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var concatCss = require('gulp-concat-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var pump = require('pump');


gulp.task('css', function(){
  return gulp.src('css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/css'));
});

gulp.task('js', function(){
    return gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js'))
});

gulp.task('build', [ 'css', 'js' ]);