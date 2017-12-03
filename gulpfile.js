// CONCAT, MINIFY, UGLIFY
//require 
var gulp = require('gulp');
var notify = require('gulp-notify');
var cssnano = require('gulp-cssnano')
var path = require('path');
var concat = require('gulp-concat');
var gulpIf = require('gulp-if');
var uglify = require('gulp-uglify');

var assets = './assets';
var bower = './bower_components';
var build = './assets/build';
var node = './node_modules';

var is_production = true;



//simple abstraction that resolves to /src/assets/{glob}
var resolveToAssets = function(glob)  {

  return path.join(assets,  glob); // assets/{glob} eg assets/bootstrap/css/bootstrap.min.css
};

var resolveToBower = function(glob) {

  return path.join(bower,  glob); // assets/{glob} eg assets/bootstrap/css/bootstrap.min.css
};

var resolveToNode = function(glob) {

  return path.join(node,  glob); // assets/{glob} eg assets/bootstrap/css/bootstrap.min.css
};

var resolveToBuild = function(glob) {

  return path.join(build,  glob); // assets/build/{glob} eg assets/bootstrap/css/bootstrap.min.css
};

//css - all css both angular related and other libraries
//angular_js - Angular related js and dependencies
//jquery_js - jQuery related js, eg bootstrapJs, magnific popup, etc
//order in html
//	1. on top css
//	2. jquery_js 
//	3. angular_js
//	4. our angular app eg app.module, app.controllers, etc
var paths = {
	css: [
	
	resolveToAssets('animate/animate.css'),
	resolveToAssets('animate/set.css'),
	resolveToAssets('style.css'),
	resolveToAssets('thumbnail_grid_expanding/css/component.css'),
	resolveToBower('magnific-popup/dist/magnific-popup.css'),
	resolveToAssets('magnific-popup-animations/magnific-popup-animations.css'),
	
	resolveToBower('angular-toastr/dist/angular-toastr.css'),
	resolveToBower('ladda/dist/ladda-themeless.min.css'),
	],
	angular_js: [
	resolveToBower('angular/angular.js'),
	resolveToBower('angular-bootstrap/ui-bootstrap.js'),
	resolveToBower('angular-bootstrap/ui-bootstrap-tpls.js'),
	resolveToBower('angular-ui-router/release/angular-ui-router.min.js'),
	resolveToBower('angular-scroll/angular-scroll.js'),
	resolveToBower('ladda/js/spin.js'),
	resolveToBower('ladda/js/ladda.js'),
	resolveToBower('angular-ladda/dist/angular-ladda.min.js'),
	resolveToBower('angular-toastr/dist/angular-toastr.js'),
	resolveToBower('angular-toastr/dist/angular-toastr.tpls.js'),
	resolveToBower('angular-multi-step-form/dist/browser/angular-multi-step-form.js'),
	
	],
	jquery_js: [
	resolveToAssets('bootstrap/js/bootstrap.js'),
	resolveToBower('magnific-popup/dist/jquery.magnific-popup.js'),
	resolveToAssets('magnific-popup-animations/magnific-popup-animations.js'),		
	resolveToAssets('mobile/touchSwipe.min.js'),
	resolveToAssets('respond/respond.js'),
	resolveToAssets('script.js'),
	],
	app: [
		'app.module.js',
		'app.controllers.js',
		'app.directives.js'
	]
}

gulp.task('css', function(){
	var final_css = 'bundled.css';

	console.log(paths);

	return gulp.src(paths.css)
	.on('error', interceptErrors)
	.pipe(concat(final_css, {sourcesContent: true}))
	.pipe(gulpIf(is_production, cssnano({safe: true})))
	.pipe(gulp.dest(resolveToBuild('css')))
	.pipe(notify({
		title: 'Healthix App',
		subtitle: '',
		icon: __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
		message: 'CSS Bower Files Imported!'
	}))
})

gulp.task('angularjs', function(){
  var angularjs = 'vendor.js';

  console.log(paths);

  return gulp.src(paths.angular_js)
  .on('error', interceptErrors)
  .pipe(concat(angularjs, {sourcesContent: true}))
  .pipe(gulpIf(is_production, uglify())) 
  .pipe(gulp.dest(resolveToBuild('js')))
  .pipe(notify({
    title: 'Healthix App',
    subtitle: '',
    icon: __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
    message: 'Javascript Bower Files Imported!'
  }));

})

gulp.task('jqueryjs', function(){
  var jqueryjs = 'jquery_scripts.js';

  return gulp.src(paths.jquery_js)
  .on('error', interceptErrors)
  .pipe(concat(jqueryjs, {sourcesContent: true}))
  .pipe(gulpIf(is_production, uglify())) 
  .pipe(gulp.dest(resolveToBuild('js')))
  .pipe(notify({
    title: 'Healthix App',
    subtitle: '',
    icon: __dirname + '/../node_modules/laravel-elixir/icons/laravel.png',
    message: 'Javascript Bower Files Imported!'
  }));

})

gulp.task('default', ['css','angularjs', 'jqueryjs']);


var interceptErrors = function(error) {
	var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
  	title: 'Compile Error',
  	message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};