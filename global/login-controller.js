'use strict'

onslide.Controllers.controller('LoginCtrl', [ '$scope', '$rootScope', '$routeParams', '$location', function ( $scope, $rootScope, $routeParams, $location) {

  $scope.login = function() {

    var username = $scope.login_username;
    var password = $scope.login_password;

  }

  $scope.logout = function() {


  }


  $rootScope.$on('userNotAuthenticated', function(event) {
    $location.path('/login');


  });



  $scope.$on('loginSuccesful', function(event, user, organizations, applications) {

  });


}]);