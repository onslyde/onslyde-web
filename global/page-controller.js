'use strict'

onslyde.Controllers.controller('PageCtrl',
  [ 'pagedata',
    'utility',
    '$scope',
    '$rootScope',
    '$location',
    '$routeParams',
    '$q',
    '$route',
    '$store', function (pagedata,
                     utility,
                     $scope,
                     $rootScope,
                     $location,
                     $routeParams,
                     $q,
                     $route,
                     $store) {
      console.log($location)
      $scope.location = $location;

//    $rootScope.userInfo = {};


    if(!$rootScope.userInfo && $store.get('userInfo')){
      $store.bind($rootScope,'userInfo');
    }


  }]);

