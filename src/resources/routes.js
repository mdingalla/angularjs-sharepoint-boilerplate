routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('resources', {
      url: '/resources',
      template: require('./resources.html'),
      controller: 'ResourcesController',
      controllerAs: 'resources'
    });
}
