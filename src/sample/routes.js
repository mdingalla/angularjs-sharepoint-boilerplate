routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
  $stateProvider
    .state('sample', {
      url: '/sample',
      template: require('./sample.html'),
      controller: 'SampleController',
      controllerAs: 'sample'
    });
}
