var gulp = require('gulp');
var spsave = require("spsave").spsave;
var vfs = require('vinyl-fs');
var map = require('map-stream');
var minify = require('gulp-minify');
var concat = require('gulp-concat');


var spusername = 'sptestmgr';
var sppassword = 'P@ssw0rd';
var spSiteColUrl = 'http://iconnect.interplex.com/dev';
var spSiteUrl = 'http://iconnect.interplex.com/dev/angular1';
var spDevSiteUrl = 'http://iconnect.interplex.com/dev/angular1';
var spPageFolder = 'Pages';
var spSiteAssetsFolder = 'SiteAssets';

gulp.task("CopySiteCollectionAssets",function()
{
  var options = {
    username:spusername,
    domain:'interplex',
    password:sppassword,
    glob:[
      'SiteAssets/lib/googlefont.css',
      'SiteAssets/lib/bootstrap/bootstrap.min.css',
    	'SiteAssets/lib/fontawesome/css/font-awesome.min.css',
    	'SiteAssets/lib/angularjs-toaster/toaster.min.css',
    	'SiteAssets/lib/chosen/chosen.min.css',
    	'SiteAssets/lib/sweetalert/sweetalert.css',
      'SiteAssets/lib/jquery-1.12.3.min.js',
      'SiteAssets/lib/moment.js',
      'SiteAssets/lib/checklist-model.js',
      'SiteAssets/lib/config.peoplepicker.js',
      'SiteAssets/lib/ui-bootstrap-tpls-1.3.3.min.js',
      'SiteAssets/lib/lodash.min.js',
      'SiteAssets/lib/angular/angular.min.js',
      'SiteAssets/lib/angular/angular-filter.min.js',
      'SiteAssets/lib/angular/angular-animate.js',
      'SiteAssets/lib/angular/angular-sanitize.min.js',
      'SiteAssets/lib/angular/angular-resource.min.js',
      'SiteAssets/lib/angular/angular-route.min.js',
      'SiteAssets/lib/angularjs-toaster/toaster.min.js',
      'SiteAssets/lib/bootstrap/bootstrap.min.js',
      'SiteAssets/lib/core-js/client/shim.min.js',
      'SiteAssets/lib/spservices/jquery.SPServices-2014.02.js',
      'SiteAssets/lib/ng-file-upload/ng-file-upload-shim.min.js',
      'SiteAssets/lib/ng-file-upload/ng-file-upload-all.min.js',
      'SiteAssets/lib/ng-office-ui-fabric/ngOfficeUiFabric.min.js',
      'SiteAssets/lib/angular-smart-table/smart-table.min.js',
      'SiteAssets/lib/chartjs/Chart.min.js',
      'SiteAssets/lib/angular-chart/angular-chart.min.js',
      'SiteAssets/lib/chosen/chosen-jquery.js',
      'SiteAssets/lib/chosen/angular-chosen2.min.js',
      'SiteAssets/lib/sweetalert/sweetalert.min.js',
      'SiteAssets/lib/sweetalert/angular-sweetalert.min.js',
      'SiteAssets/lib/es6-promise/es6-promise.min.js',
      'SiteAssets/lib/whatwg-fetch/fetch.js',
      'SiteAssets/lib/sp-pnp-js/dist/pnp.min.js'
  ],
    base:'SiteAssets',
    siteUrl:spSiteColUrl,
    folder:spSiteAssetsFolder
  };
  spsave(options)
  .then(function(){

  }).catch(function() {
    console.log('spsave error');
  })
});

gulp.task("CopyAllPages",function()
{
  var options = {
    username:spusername,
    domain:'interplex',
    password:sppassword,
    glob:['Pages/*.aspx'],
    base:'Pages',
    checkin:true,
    checkinType:1,
    siteUrl:spSiteUrl,
    folder:spPageFolder
  };
  spsave(options)
  .then(function(){

  }).catch(function() {
    console.log('spsave error');
  })
});

gulp.task("BuildAll",['BuildControllers','BuildServices','BuildDirectives','CopyAllSiteAssets','CopyAllPages','watch']);

gulp.task('watch-controller',function(){
  gulp.watch(["SiteAssets/app/controllers/*.js",]
  ,['upload-controller']);
});

gulp.task('upload-controller',['BuildControllers'],function() {
    vfs.src(["SiteAssets/app/js/controllers-debug.js"], { base: 'SiteAssets' })
    .pipe(map(function(file, cb) {
      spsave({
        siteUrl: spDevSiteUrl,  username: spusername, password: sppassword,
        file: file,
        checkin:true,
        checkinType:1,
        folder: spSiteAssetsFolder
      })
      .then(function(){
          spsave({
            siteUrl: spSiteUrl,  username: spusername, password: sppassword,
            file: file,
            checkin:true,
            checkinType:1,
            folder: spSiteAssetsFolder
          })
          .then(function(){ console.log('success'); })
          .finally(function(){ cb(); });
       })
      .finally(function(){ cb(); });
    }))

})

gulp.task('watch-service',function(){
  gulp.watch(["SiteAssets/app/services/*.js",]
  ,['upload-service']);
});

gulp.task('upload-service',['BuildServices'],function() {
    vfs.src(["SiteAssets/app/js/services-debug.js"], { base: 'SiteAssets' })
    .pipe(map(function(file, cb) {
      spsave({
        siteUrl: spDevSiteUrl,  username: spusername, password: sppassword,
        file: file,
        checkin:true,
        checkinType:1,
        folder: spSiteAssetsFolder
      })
      .then(function(){
            spsave({
              siteUrl: spSiteUrl,  username: spusername, password: sppassword,
              file: file,
              checkin:true,
              checkinType:1,
              folder: spSiteAssetsFolder
            })
            .then(function(){ console.log('success'); })
            .finally(function(){ cb(); });
       })
      .finally(function(){ cb(); });
    }))

})

gulp.task('watch-directive',function(){
  gulp.watch(["SiteAssets/app/directives/*.js",]
  ,['upload-directive']);
});

gulp.task('upload-directive',['BuildDirectives'],function() {
    vfs.src(["SiteAssets/app/js/directives-debug.js"], { base: 'SiteAssets' })
    .pipe(map(function(file, cb) {
      spsave({
        siteUrl: spDevSiteUrl,  username: spusername, password: sppassword,
        file: file,
        checkin:true,
        checkinType:1,
        folder: spSiteAssetsFolder
      })
      .then(function(){
          spsave({
            siteUrl: spSiteUrl,  username: spusername, password: sppassword,
            file: file,
            checkin:true,
            checkinType:1,
            folder: spSiteAssetsFolder
          })
          .then(function(){ console.log('success'); })
          .finally(function(){ cb(); });
       })
      .finally(function(){ cb(); });
    }))

})


// gulp.task('watch',['watch-controller','watch-service','watch-directive'],function()
gulp.task('watch',function()
{
  //watch non js
  // gulp.watch(["SiteAssets/app/main.js"],function(event) {
  //   console.log(event.path);
  //   vfs.src(event.path, { base: 'SiteAssets' })
  //   .pipe(map(function(file, cb) {
  //     spsave({
  //       siteUrl: spDevSiteUrl,  username: spusername, password: sppassword,
  //       file: file,
  //       checkin:true,
  //       checkinType:1,
  //       folder: spSiteAssetsFolder
  //     })
  //     .then(function(){
  //         spsave({
  //           siteUrl: spSiteUrl,  username: spusername, password: sppassword,
  //           file: file,
  //           checkin:true,
  //           checkinType:1,
  //           folder: spSiteAssetsFolder
  //         })
  //         .then(function(){ console.log('success'); })
  //         .finally(function(){ cb(); });
  //     })
  //     .finally(function(){ cb(); });
  //   }))
  // })

  gulp.watch([
    "SiteAssets/app/pages/*.html",
    "SiteAssets/app/css/*.css",
    "SiteAssets/app/app.js",
    "SiteAssets/app/controller.js",
    "SiteAssets/app/directives.js"
  ],function(event) {
    console.log(event.path);
    vfs.src(event.path, { base: 'SiteAssets' })
    .pipe(map(function(file, cb) {
      spsave({
        siteUrl: spDevSiteUrl,  username: spusername, password: sppassword,
        file: file,
        checkin:true,
        checkinType:1,
        folder: spSiteAssetsFolder
      })
      .then(function(){
        spsave({
          siteUrl: spSiteUrl,  username: spusername, password: sppassword,
          file: file,
          checkin:true,
          checkinType:1,
          folder: spSiteAssetsFolder
        })
        .then(function(){ console.log('success'); })
        .finally(function(){ cb(); });
       })
      .finally(function(){ cb(); });
    }))
  })

  //watch pages
  gulp.watch("Pages/**/*.aspx",function(event) {
    console.log(event.path);
    vfs.src(event.path, { base: 'Pages' })
    .pipe(map(function(file, cb) {
      spsave({
        siteUrl: spDevSiteUrl,  username: spusername, password: sppassword,
        file: file,
        checkin:true,
        checkinType:1,
        folder: spPageFolder
      })
      .then(function(){
        spsave({
          siteUrl: spSiteUrl,  username: spusername, password: sppassword,
          file: file,
          checkin:true,
          checkinType:1,
          folder: spPageFolder
        })
        .then(function(){ console.log('success'); })
        .finally(function(){ cb(); });
       })
      .finally(function(){ cb(); });
    }))
  })
});

gulp.task("CopyAppJS",function() {
  var options = {
    username:spusername,
    domain:'interplex',
    password:sppassword,
    glob:['SiteAssets/app/js/*.js'],
    base:'SiteAssets',
    siteUrl:spSiteUrl,
    folder:spSiteAssetsFolder
  };
  spsave(options)
  .then(function(){

  }).catch(function() {
    console.log('spsave error');
  })
})

gulp.task("BuildControllers",function() {
  gulp.src('SiteAssets/app/controllers/*.controller.js')
      .pipe(concat('controllers.js'))
      .pipe(minify({
          ext:{
              src:'-debug.js',
              min:'.js'
          },
           exclude: ['BuildServices','BuildDirectives']
          // ignoreFiles: ['.combo.js', '-min.js']
      }))
      .pipe(gulp.dest('SiteAssets/app/js'))
});

gulp.task("BuildServices",function() {
  gulp.src('SiteAssets/app/services/*.service.js')
      .pipe(concat('services.js'))
      .pipe(minify({
          ext:{
              src:'-debug.js',
              min:'.js'
          },
          exclude: ['BuildControllers','BuildDirectives']
          // exclude: ['tasks'],
          // ignoreFiles: ['.combo.js', '-min.js']
      }))
      .pipe(gulp.dest('SiteAssets/app/js'))
});

gulp.task("BuildDirectives",function() {
  gulp.src('SiteAssets/app/directives/*.directive.js')
      .pipe(concat('directives.js'))
      .pipe(minify({
          ext:{
              src:'-debug.js',
              min:'.js'
          },
            exclude: ['BuildControllers','BuildServices']
          // exclude: ['tasks'],
          // ignoreFiles: ['.combo.js', '-min.js']
      }))
      .pipe(gulp.dest('SiteAssets/app/js'))
});
