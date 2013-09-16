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
    //todo - use $rootScope.registerMessage to see if there is an unfinished pres.
    if(!$rootScope.registerMessage && $store.get('registerMessage')){
      $store.bind($rootScope,'registerMessage');
    }

    if(!$rootScope.userInfo && $store.get('userInfo')){
      $store.bind($rootScope,'userInfo');
    }

//    $scope.$on('$routeChangeSuccess', function () {
//
//
//
//    });

  }]);

