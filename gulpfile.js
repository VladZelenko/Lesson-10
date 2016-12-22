var gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/style/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/style'));
});