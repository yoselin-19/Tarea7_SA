// importaciones
var gulp = require('gulp');
var zip = require('gulp-zip');

//Creo la funcion que hara el zip
const Fun_zip_tarea = function () {
  //Origen del codigo
  //Nombre del zip
  //Destino del zip
  return gulp.src('./src/*')
    .pipe(zip('Tarea.zip'))
    .pipe(gulp.dest('dist'));
};

gulp.task('zip_tarea', Fun_zip_tarea);