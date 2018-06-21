var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    autoprefixer = require('autoprefixer'),
    babel = require('gulp-babel'),
    cleancss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    flexibility = require('postcss-flexibility');


var SRC = {
    js: 'src/*.js',
    css: 'src/*.scss'
};

/* Directories */
var DIRS = {
    src: './src',
    dest: './dist'
};

/**
 * Error reporting helper function.
 * Code from https://github.com/brendanfalkowski
 *
 * @param err
 */
var errorReport = function(err) {
    var lineNumber = (err.lineNumber) ? 'LINE ' + err.lineNumber + ' -- ' : '';

    notify({
        title: 'Task failed [' + err.plugin + ']',
        message: lineNumber + 'See console.',
        sound: 'Basso'
    }).write(err);

    gutil.beep();

    // Report the error on the console
    var report = '';
    var chalk = gutil.colors.bgMagenta.white;

    report += chalk('TASK:') + ' [' + err.plugin + ']\n';
    report += chalk('ISSUE:') + ' ' + err.message + '\n';
    if (err.lineNumber) { report += chalk('LINE:') + ' ' + err.lineNumber + '\n'; }
    if (err.fileName)   { report += chalk('FILE:') + ' ' + err.fileName + '\n'; }
    console.log(report);

    // Prevent the 'watch' task from stopping
    this.emit('end');
};

// Lint JS
gulp.task('lint:js', function() {
    return gulp.src(SRC_JS)
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(jshint.reporter('fail'));
});

// Build CSS
gulp.task('build:css', function() {
    return gulp.src(SRC.css)
        .pipe(sass({
            compress: true
        }))
        .pipe(postcss([autoprefixer({
            browsers: [
                "Android 2.3",
                "Android >= 4",
                "Chrome >= 20",
                "Firefox >= 24",
                "Explorer >= 8",
                "iOS >= 6",
                "Opera >= 12",
                "Safari >= 6"
            ]
        }), flexibility()]))
        .pipe(cleancss())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(DIRS.dest));
});

gulp.task('build:js', function() {
    return gulp.src(SRC.js)
            .pipe(babel())
            .pipe(gulp.dest(DIRS.dest))
            .pipe(uglify({
                preserveComments:'license'
            }))
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest(DIRS.dest));
});

// WATCH for file changes and rerun the task
gulp.task('watch', function() {
    gulp.watch(SRC.js, gulp.series('build:js'));
    gulp.watch(SRC.css, gulp.series('build:css'));
});

// DEFAULT task
gulp.task('default', gulp.series('build:js', 'build:css'));