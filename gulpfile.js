var gulp = require('gulp');
var connect = require('gulp-connect');
var webserver  =require('gulp-webserver');
var livereload = require('livereload');
var uglify = require('gulp-uglify');

gulp.task('connect', function() {
	gulp.src('demo/')
		.pipe(webserver({
			host: '0.0.0.0',
			port:8001,
			livereload: {
				port: 35720,
				enable: true
			},
			directoryListing: {
				enable: true,
				path: '../dist/index.html'
			}
		}))
});
