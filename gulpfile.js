var gulp      = require('gulp'),
    watch     = require('gulp-watch'),
    uglify    = require('gulp-uglify'),
    concat    = require('gulp-concat'),
    rename    = require('gulp-rename');


gulp.task('js',function(){
    var scripts = [
                    './assets/scripts/radar-cidadao.js',
                  ];
    gulp.src(scripts)
        .pipe(concat('radar-cidadao.min.js'))
        .pipe(gulp.dest('./assets/scripts/'))
        .pipe(uglify())
        .pipe(rename('radar-cidadao.min.js'))
        .pipe(gulp.dest('./assets/scripts/'));
});