(function() {
    'use strict';
    var myApp = angular.module('myApp');
    myApp.controller('HomeController', HomeController);
    HomeController.$inject = ['$scope'];
    function HomeController($scope) {
      var vm = this;
      vm.Message = 'Welcome to AngularJS in SharePoint';
    }


})();
