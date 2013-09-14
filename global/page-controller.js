'use strict'

onslide.Controllers.controller('PageCtrl',
  [ 'pagedata',
    'utility',
    '$scope',
    '$rootScope',
    '$location',
    '$routeParams',
    '$q',
    '$route', function (pagedata,
                     utility,
                     $scope,
                     $rootScope,
                     $location,
                     $routeParams,
                     $q,
                     $route) {
      console.log($location)
      $scope.location = $location;

}]);

