routing.$inject = ['$urlRouterProvider', '$locationProvider'];

export default function routing($urlRouterProvider, $locationProvider) {
  // $locationProvider.html5Mode(true);
  $locationProvider.html5Mode({
  enabled: true,
  requireBase: true
});
  $urlRouterProvider.otherwise('/home');
}
