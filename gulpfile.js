import gulp from 'gulp';
import dartSass from 'node-sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass(dartSass);

// import sass from 'gulp-sass';
// import concat from 'gulp-concat';
// import nodeSass from 'node-sass';
//
// sass.compiler = nodeSass;

// gulp.task('sass', function () {
//     return gulp.src('./src/sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(concat('style.css'))
//         .pipe(gulp.dest('./dist/css'));
// });
//
// gulp.task('sass:watch', function () {
//     return new Promise((resolve, reject) => {
//         gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
//         resolve();
//     });
// });

export function buildStyles() {
    return gulp.src('./src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

export function watchStyles() {
    return new Promise((resolve, reject) => {
        gulp.watch('./src/sass/**/*.scss', gulp.series(buildStyles));
        resolve();
    });
}

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

export default defaultTask;
