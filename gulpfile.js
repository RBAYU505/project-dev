var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browserSync')

gulp.task('sass',function() {
	console.log('Run sass compilation')
	return gulp.scr('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))
})

gulp.task('js',function(){
	console.log('Run js compilation')

})

gulp.task('default', function() {
  // place code for your default task here
  browserSync. init({
  	server: {
  		baseDir: "./app"
  	}
  })
});