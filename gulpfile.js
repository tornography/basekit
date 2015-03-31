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
        .pipe(sass().on('error', errorHandler))
        .pipe(prefix({
            browsers: ['last 2 versions','ie 9']
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('dist/src/css'));
});

gulp.task('minify', ['sass'], function(){
    return gulp
        .src('dist/src/css/style.css')
        .pipe(minify())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest('dist/src/css/'));
});

gulp.task('concat', function(){
    return gulp
        .src(['src/js/jquery-2.1.3.js','src/js/script.js'])
        .pipe(concat('script.js').on('error', errorHandler))
        .pipe(gulp.dest('./dist/src/js/'));
});

gulp.task('uglify', ['concat'], function(){
    return gulp
        .src('./dist/src/js/script.js')
        .pipe(uglify().on('error', errorHandler))
        .pipe(rename('script.min.js'))
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
        .pipe(svgmin().on('error', errorHandler))
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


gulp.task('default',['sass','svg','svgfallback','uglify'], function() {
    
});

gulp.task('min', ['sass','concat'], function(){

});



function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}