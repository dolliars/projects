var gulp = require('gulp')
var nunjucksRender = require('gulp-nunjucks-render')
var data = require('gulp-data')

gulp.task('nunjucks', function () {
  return gulp.src('pages/**/*.+(html|njk)')
    .pipe(data(function () {
      return require('./data.json')
    }))
    .pipe(nunjucksRender({
      path: ['templates']
    }))
    .pipe(gulp.dest('./'))
})
