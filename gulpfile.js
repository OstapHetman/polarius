const gulp = require('gulp'),
    sass = require('gulp-sass'),
    wait = require('gulp-wait'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    pump = require('pump'),
    fileinclude = require('gulp-file-include');

gulp.task('sass', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(wait(150))
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
    gulp.watch('src/sass/**/*.*', ['sass']);

});
// gulp.task('imagemin', () =>
//     gulp.src('src/img/**/*.*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist/img'))
// );

// gulp.task('compress', function() {
//     return gulp.src('src/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });

// gulp.task('compress', function(cb) {
//     pump([
//             gulp.src('src/js/*.js'),
//             uglify(),
//             gulp.dest('dist/js')
//         ],
//         cb
//     );
// });



// gulp.task('minify', function() {
//     return gulp.src('src/*.html')
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest('dist/'));
// });

gulp.task('fileinclude', function() {
    gulp.src(['src/vinil.html', 'src/parket.html', 'src/laminat.html'])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('dist/'));
});


gulp.task('default', ['sass', 'watch'], function() {
    return gulp.src('src/**/*.*')
        .pipe(gulp.dest('dist/'));
});