var gulp = require('gulp'),
    concat = require('gulp-concat'),
    cheerio = require('gulp-cheerio'),
    minify = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    svgfallback = require('gulp-svgfallback'),
    svgmin = require('gulp-svgmin'),
    svgstore = require('gulp-svgstore'),
    uglify = require('gulp-uglify');

gulp.task('sass', function(){
    return gulp
        .src('src/scss/main.scss')
        .pipe(sass())
        .pipe(prefix({
            browsers: ['last 2 versions','ie 9']
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('dist/src/css'));
});

gulp.task('concat', function(){
    return gulp
        .src(['src/js/jquery-2.1.3.js','src/js/script.js'])
        .pipe(concat('script.js'))
        .pipe(gulp.dest('./dist/src/js/'));
});

gulp.task('svg', function(){
    return gulp
        .src('src/svg/*.svg')
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').attr('fill','currentColor');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgmin())
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(gulp.dest('dist/src/svg'));
});

gulp.task('svgfallback', function(){
    return gulp
        .src('src/svg/*.svg', {base: 'src/svg'})
        /*.pipe(cheerio({
            run: function ($) {
                $('[fill]').attr('fill','red'); //set fallback color of icons
            },
            parserOptions: { xmlMode: true }
        }))*/
        .pipe(rename({prefix: 'icon--'}))
        .pipe(svgfallback())
        .pipe(gulp.dest('dist/src/img'));
});

gulp.task('svg2png', function(){
    return gulp
        .src('src/svg/*svg')
        .pipe(svg2png())
        .pipe(gulp.dest('dist/src/img'));
});

gulp.task('default',['sass','svg','svgfallback','concat'], function() {
    
});