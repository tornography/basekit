var gulp = require('gulp'),
    prefix = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');



gulp.task('default', function() {
    return gulp.src('src/scss/main.scss')
            .pipe(sass())
            .pipe(prefix({
                browsers: ['last 2 versions','ie 9']
            }))
            .pipe(rename('style.css'))
            .pipe(gulp.dest('dist/src/css'));
});