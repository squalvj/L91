var gulp = require('gulp');
var pug = require('gulp-pug');
var stylus = require('gulp-stylus');
var minifyCSS = require('gulp-csso');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');

// gulp.task('html', function(){
//   return gulp.src('src/*.pug')
//     .pipe(pug())
//     .pipe(gulp.dest('dist/html'))
// });

// gulp.task('css', function(){
//   return gulp.src('assets/css/*.styl')
//     .pipe(stylus())
//     .pipe(minifyCSS())
//     .pipe(gulp.dest('dist/html/css'))
// });

// gulp.task('js', function(){
//   return gulp.src('assets/js/*.js')
//     .pipe(sourcemaps.init())
//     .pipe(babel({
//         presets: ['@babel/env']
//     }))
//     .pipe(concat('app.min.js'))
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('dist/html/js'))
// });

// gulp.task('default', function () {
//   gulp.watch('assets/css/*.styl', ['css']);
//   gulp.watch('assets/js/*.js', ['js']);
//   gulp.watch('src/*.pug', ['html']);
//   gulp.watch('src/*/*.pug', ['html']);
// });


gulp.task('html', function(){
  return gulp.src('src/blog/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist/html/blog'))
});

gulp.task('css', function(){
  return gulp.src('src/blog/assets/css/*.styl')
    .pipe(stylus())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/html/blog/css'))
});

gulp.task('js', function(){
  return gulp.src('src/blog/assets/js/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(concat('app.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/html/blog/js'))
});

gulp.task('default', function () {
  gulp.watch('src/blog/assets/css/*.styl', ['css']);
  gulp.watch('src/blog/assets/js/*.js', ['js']);
  gulp.watch('src/*.pug', ['html']);
  gulp.watch('src/*/*.pug', ['html']);
  gulp.watch('src/*/*/*.pug', ['html']);
});
