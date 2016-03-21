
/**
 * to install gulp plugins
 * npm install gulp-util --save-dev
	npm install gulp-imagemin --save-dev
	npm install gulp-ruby-sass --save-dev
	npm install gulp-clean-css --save-dev
	npm install gulp-jshint --save-dev
	npm install gulp-uglify --save-dev
	npm install gulp-rename --save-dev
	npm install gulp-concat --save-dev
	npm install gulp-clean --save-dev
	npm install gulp-notify --save-dev
	npm install gulp-livereload --save-dev
	npm install tiny-lr --save-dev
 * --save-dev
 */

// gulp components
var gulp    = require('gulp'),                 //basis
    imagemin = require('gulp-imagemin'),       //image compass
    sass = require('gulp-ruby-sass'),          //sass
    											//gulp-autoprefixer
    minifycss = require('gulp-clean-css'),    //css compass
    //jshint = require('gulp-jshint'),           //js hint
    uglify  = require('gulp-uglify'),          //js compass
    rename = require('gulp-rename'),           //rename
    concat  = require('gulp-concat'),          // 
    clean = require('gulp-clean'),             //clean folder
    notify = require('gulp-notify'),           //
    tinylr = require('tiny-lr'),               //livereload
    server = tinylr(),
    port = 35729,
    livereload = require('gulp-livereload');   //livereload

var yeoman = {
		  app: require('./bower.json').appPath || 'app',
		  dist: 'dist',
		  build: 'build',
		  dotSlash: './',
		  slash: '/'
};

var paths = {
		js: 	'/js/**/*.js',
		lib:	'/lib/**/*.js',
		css:	'/css/**/*.css',
		img:	'/img/**/*',
		html:   '/*.html',
		bower:  'bower_components'
};


// HTML process
gulp.task('html', function() {
    var htmlSrc = yeoman.dotSlash + yeoman.app + paths.html,
        htmlDst = yeoman.dotSlash + yeoman.build ;
    
    console.log("html src = " + htmlSrc);
    console.log("html dst = " + htmlDst);

    gulp.src(htmlSrc)
        //.pipe(livereload(server))
        .pipe(gulp.dest(htmlDst));
});

// css process
gulp.task('css', function () {
    var cssSrc = yeoman.dotSlash + yeoman.app + paths.css,
        cssDst = yeoman.dotSlash + yeoman.build + '/css/';

    gulp.src(cssSrc)
        .pipe(sass({ style: 'expanded'}))
        .pipe(gulp.dest(cssDst))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(livereload(server))
        .pipe(gulp.dest(cssDst));
});

// image compass
gulp.task('images', function(){
    var imgSrc = yeoman.dotSlash + yeoman.app + paths.img ,  
        imgDst = yeoman.dotSlash + yeoman.build + '/img/';
    gulp.src(imgSrc)
        .pipe(imagemin())
        .pipe(livereload(server))
        .pipe(gulp.dest(imgDst));
})

// js process
gulp.task('js', function () {
    var jsSrc = yeoman.dotSlash + yeoman.app + paths.js,
        jsDst = yeoman.dotSlash + yeoman.build + '/js/';

    gulp.src(jsSrc)
//        .pipe(jshint('.jshintrc'))
//        .pipe(jshint.reporter('default'))
//        .pipe(concat('main.js'))
        .pipe(gulp.dest(jsDst))
        .pipe(rename({ suffix: '.min' }))
//        .pipe(uglify())
        .pipe(livereload(server))
        .pipe(gulp.dest(jsDst))
        .pipe(notify({ message: 'js task completed' }));
});

//copy lib js
gulp.task('lib', function() {
var vendorSrc = [yeoman.dotSlash + yeoman.app + '/' + paths.bower + '/angular/angular.js', yeoman.dotSlash + yeoman.app + '/' + paths.bower + '/angular-resource/angular-resource.js'],
	vendorDst = yeoman.dotSlash + yeoman.build + paths.lib;
gulp.src(vendorSrc)
    .pipe(livereload(server))
    .pipe(gulp.dest(vendorDst))
});

// clean image css and js
gulp.task('clean', function() {
    gulp.src([ yeoman.dotSlash + yeoman.build + paths.img , yeoman.dotSlash + yeoman.build + paths.js, 
               yeoman.dotSlash + yeoman.build + paths.css,  yeoman.dotSlash + yeoman.build + paths.lib ], {read: false})
        .pipe(clean())
        .pipe(notify({ message: 'clean task completed' }));;
});

//  gulp
gulp.task('default', ['clean'], function(){
//	 gulp.start('html','js');
    gulp.start('html','images','js', 'lib','css');
});

//  gulp watch
gulp.task('watch',function(){

    server.listen(port, function(err){
        if (err) {
            return console.log(err);
        }

        // html
        gulp.watch(yeoman.dotSlash + yeoman.app + paths.html , function(event){
            gulp.run('html');
        })

        // css
        gulp.watch(yeoman.dotSlash + yeoman.app + paths.css , function(){
            gulp.run('css');
        });

        // images
        gulp.watch(yeoman.dotSlash + yeoman.app + paths.img, function(){
            gulp.run('images');
        });

        // js

        gulp.watch(yeoman.dotSlash + yeoman.app + paths.js, function(){
            gulp.run('js');
        });

         gulp.watch(yeoman.dotSlash + yeoman.app + paths.lib, function(){
            gulp.run('lib');
        });

    });
});