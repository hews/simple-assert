const gulp  = require('gulp'),
      babel = require('gulp-babel'),
      mv    = require('gulp-rename'),
      mocha = require('gulp-spawn-mocha'),
      del   = require('del');

gulp.task('clear', () =>
  del(['dist'])
);

gulp.task('build', ['clear'], () =>
  gulp.src('src/simpleAssert.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(mv('simple-assert.js'))
    .pipe(gulp.dest('dist'))
);

gulp.task('test', ['build'], () =>
  gulp.src(['test/*.test.js'], {read: false})
    .pipe(mocha())
);

gulp.task('default', () =>
  gulp.watch('{src,test}/*', ['test'])
);

