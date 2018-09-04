const gulp = require('gulp');
const less = require('gulp-less');
const gcmq = require('gulp-merge-media-queries');
const cssmin = require('gulp-cssmin');
const nodemon = require('nodemon');

function less_(){
    return gulp.src('less/man.less')
    .pipe(less())
    .pipe(gulp.dest('css/'));
}
function css(){
    return gulp.src('css/man.css')
    .pipe(gcmq())
    //.pipe(cssmin())
    .pipe(gulp.dest('css/'));
}
function watch (){
    nodemon({
        script: 'index.js'
      , tasks: ['browserify']
      })
    gulp.watch('./less/*.less', gulp.series(less_,css));
}
 
const build = gulp.series(watch);
gulp.task('build', build);
gulp.task('default', build);



