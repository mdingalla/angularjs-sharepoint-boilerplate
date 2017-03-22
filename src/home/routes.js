routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./home.html'),
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('learn', {
      url: '/learn',
      template: require('./learn.html'),
      controller: 'LearnController',
      controllerAs: 'learn'
    });
}
