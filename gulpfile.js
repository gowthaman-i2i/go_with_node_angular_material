var gulp = require('gulp'),
    gutil = require('gulp-util'),
    debug = require('gulp-debug'),
    clean = require('gulp-clean'),
    inject = require('gulp-inject'),
    browserSync = require('browser-sync'),
    watch = require('gulp-watch'),
    clean = require('gulp-clean'),
    connect = require('gulp-connect');
var Lazy = require('lazy.js');

var application_root = __dirname;
var path = require("path");
var dirPath = path.join(application_root, "/assets");

var sources = require('./config/assets.json');

var css = Lazy(sources.lib.css.src).concat(sources.core.css.src).toArray();
var js = Lazy(sources.lib.js.src).concat(sources.core.js.src).toArray();

gulp.task('clean', function() {
    gulp.src(['inex.html', sources.lib.css.dest, sources.core.css.dest, sources.lib.js.dest, sources.core.js.dest], {
            read: false
        })
        .pipe(clean({
            force: true
        }));
});

// inject task
gulp.task('inject', function() {
    gulp.src('./app/index.html')
        .pipe(debug())
        .pipe(inject(gulp.src(css, {
            read: false
        })))
        .pipe(inject(gulp.src(js, {
            read: false
        })))
        .pipe(gulp.dest('./'));
});


console.log('application_root+>', application_root)

// watch files for changes and reload
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: ''
        }
    });
    gulp.watch(['app/*.html','app/**/.html', 'app/**/*.js', 'config/assets.json'], {
        cwd: ''
    }, browserSync.reload);
});

/*gulp.task('connect', function() {
    connect.server({
        root: application_root + '',
        port: 4000
    })
})*/

gulp.task('default', ['clean', 'inject', 'serve']);
