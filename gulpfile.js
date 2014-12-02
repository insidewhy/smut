var gulp       = require('gulp')
var sourcemaps = require('gulp-sourcemaps')
var traceur    = require('gulp-traceur')
var concat     = require('gulp-concat')
var merge      = require('merge-stream')

gulp.task('default', function() {
  merge(
    gulp.src(['app/*.js', 'app/*/*.js'])
      .pipe(sourcemaps.init())
        .pipe(traceur())
        .pipe(concat('smut.js'))
      .pipe(sourcemaps.write()),
    gulp.src('bootstrap.js')
      .pipe(sourcemaps.init())
      .pipe(sourcemaps.write())
  )
  .pipe(gulp.dest('dist/assets'))

})
