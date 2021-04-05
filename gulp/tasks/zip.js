const zip = require('gulp-zip');

module.exports = function (gulp, plugins, config) {
    return function zip() {
	    gulp.src('build/*')
    		.pipe(zip('artifact.zip'))
	    	.pipe(gulp.dest('build'))
    };
};