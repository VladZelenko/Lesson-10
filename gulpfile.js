'use strict';

var gulp = require('gulp'),
minifyCSS = require('gulp-minify-css'),
rename = require("gulp-rename"),
sass = require('gulp-sass'),
browserSync = require('browser-sync'),
prefix = require('gulp-autoprefixer'),
uncss = require('gulp-uncss');




// gulp.task('uncss', function () {
//     return gulp.src('src/style/main.css')
//         .pipe(uncss({html: ['src/index.html']}))
//         .pipe(gulp.dest('src/style/'));
// });

// gulp.task('css', function() {
// 	return gulp.src('src/style/main.css')
// 	.pipe(minifyCSS('')
// 		.pipe(prefix('last 15 versions'))
// 		.pipe(uncss({html: ['src/index.html']}))
// 		.pipe(rename("main.min.css"))
// 		.pipe(gulp.dest("src/style/"));
// 	});

	gulp.task("sass", function() {
		return gulp.src('src/style/partials/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/style'))
		.pipe(browserSync.reload({stream: true}))
	});

	gulp.task('browser-sync', function() {
		browserSync({
			server: {
				baseDir: 'src'
			},
			notify: false
		});
	});

	gulp.task('watch', ['browser-sync', 'sass'], function() {
		gulp.watch('src/style/partials/**/*.scss', ['sass']);
		gulp.watch('src/**/*.html', browserSync.reload);
		gulp.watch('src/js/**/*.js', browserSync.reload);
	});