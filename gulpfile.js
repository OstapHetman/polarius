let gulp = require('gulp');
let sass = require('gulp-sass');
let wait = require('gulp-wait');

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(wait(150))
        .pipe(sass())
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.*', ['sass']);

});

gulp.task('default', ['sass', 'watch']);