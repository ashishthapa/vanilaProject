
const gulp = require('gulp');
const  dartSass = require('sass');
const gulpSass  = require('gulp-sass');
const sass = gulpSass( dartSass );
const path = {
    input: ['styles/*.{scss,sass}'],
    output: 'styles/'
}

// Compile scss into css file
gulp.task('compile_scss', () => {
    return gulp.src(path.input)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(path.output))
})

 //Detect changes in SCSS
gulp.task('watch_scss', function(){
    gulp.watch(path.input, gulp.series('compile_scss'));
});


exports.default = gulp.series('watch_scss');
