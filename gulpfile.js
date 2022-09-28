import gulp from 'gulp';
import dartSass from 'node-sass';
import gulpSass from 'gulp-sass';
import browserSync from 'browser-sync';

const sass = gulpSass(dartSass);

const paths = {
    SRC: './src',
    SCSS: './src/assets/scss/**/*.scss',
    JS: './src/**/*.js',
    DEST_CSS: './src/assets/css',
    DEST_JS: './src/assets/js',
}

export function buildStyles() {
    return gulp.src(paths.SCSS)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(paths.DEST_CSS))
        .pipe(browserSync.stream());
}

export function watch() {
    return new Promise((resolve, reject) => {
        gulp.watch(paths.SCSS, gulp.series(buildStyles));
        gulp.watch(paths.SCSS).on('change', browserSync.reload);
        gulp.watch(paths.JS).on('change', browserSync.reload);
        gulp.watch(paths.SRC).on('change', browserSync.reload);
        resolve();
    });
}

export function serve() {
    browserSync.init({
        server: {
            baseDir: paths.SRC
        }
    });
}

// watch sass and serve
// export const serve = gulp.series(buildStyles, watchStyles);



function defaultTask(cb) {
  // place code for your default task here
  cb();
}

export default gulp.series(buildStyles, watch, serve);
