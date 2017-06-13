var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });
});

gulp.task('do-reload', function() {
  browserSync.reload
});

gulp.task('watch', ['browserSync'], function() {
  // gulp.watch("*.html").on("change", reload);
  // gulp.watch('app/index.html', reload);
  gulp.watch("app/index.html", browserSync.reload);

  gulp.watch("app/css/*.css", ['do-reload']);
  gulp.watch("app/js/*.js", ['do-reload']);
})
