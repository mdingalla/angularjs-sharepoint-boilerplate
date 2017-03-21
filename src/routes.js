routes.$inject = ['$routeProvider','$locationProvider'];

export default function routes() {
  $routeProvider.
      when('/', {
        template: require('./home/home.html'),
        controller: 'HomeController',
        controllerAs:'vm'
      }).
      otherwise({
          template: require('./home/home.html'),
          controller: 'HomeController',
          controllerAs:'vm'
        });
}

// export default function routes($stateProvider) {
//   $stateProvider
//     .state('home', {
//       url: '/',
//       template: require('./home/home.html'),
//       controller: 'HomeController',
//       controllerAs: 'home'
//     });
// }
