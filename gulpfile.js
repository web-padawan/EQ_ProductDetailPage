var gulp          = require('gulp'),
    compass       = require('gulp-compass'),
    postcss       = require('gulp-postcss'),
    autoprefixer  = require('autoprefixer'),
    browserSync   = require('browser-sync'),
    path          = require('path');

gulp.task('reload', function () {
  browserSync.reload();
});

gulp.task('browser-sync', ['sass'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('sass', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      sass: 'scss',
      css: 'assets/css',
      images: 'assets/images',
      bundle_exec: true
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(postcss([ autoprefixer({ browsers: ['IE >= 9'] }) ]))
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch(['index.html', 'assets/js/*', 'assets/images/*'], ['reload']);
});

gulp.task('default', ['browser-sync', 'watch']);
