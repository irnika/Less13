/*global require*/
    var gulp = require("gulp");
    var sass = require("gulp-sass");
    function style() {
    	return(

              gulp
              .src('scss/*.scss)')
              .pipe(sass())
              .on('error, sass .logError')
              .pipe(gulp.dest("css"))

    );
    }
    export .style = style;