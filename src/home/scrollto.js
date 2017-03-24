scrollto.$inject = ['$rootScope', '$location', '$anchorScroll', '$stateParams'];

export default function scrollto($rootScope, $location, $anchorScroll, $stateParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($stateParams.id);
    $anchorScroll();
  });
}
