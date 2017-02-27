var config      = require('./config/gulp_config.json');
if(!config.tasks.fonts) return;

var changed     = require('gulp-changed'),
    gulp        = require('gulp'),
    path        = require('path');

gulp.task('googleFont', function () {
    return gulp.src([paths.iconsrc, '*!README.md'])
      .pipe(changed(paths.dest))
      .pipe(gulp.dest(paths.dest))
});
