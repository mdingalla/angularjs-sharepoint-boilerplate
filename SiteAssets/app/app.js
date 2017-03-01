(function() {

    'use strict';
    var myApp = angular.module('myApp', ['ngAnimate','ngRoute',
      'ui.bootstrap','ngResource','ui.People','ngFileUpload','angular.filter',
      'toaster','chart.js','angular.chosen','oitozero.ngSweetAlert']);

     myApp.config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
        when('/home', {
          templateUrl: '../SiteAssets/app/pages/home.html',
          controller:'HomeController'
        }).
          when('/dashboard', {
            templateUrl: '../SiteAssets/app/pages/dashboard.html',
            controller:'DashboardController'
          }).
          when('/complete', {
            templateUrl: '../../SiteAssets/app/pages/closeform.html',
            controller: function($timeout) {
              $timeout(function() {
               window.location.href="/supplierapp";
               toaster.pop('success','Saved Successfully!!!','Images Saved');
             },4000);
            }
          }).
          otherwise({
            templateUrl: '../../SiteAssets/app/pages/home.html',
            controller:'HomeController'
          });
          // otherwise({
          //   templateUrl:'default.aspx',
          //   controller:function(){
          //
          //   }
          //  //  redirectTo: '/'
          // });
     }]);
})();
