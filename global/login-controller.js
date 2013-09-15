'use strict'

onslyde.Controllers.controller('LoginCtrl', [ '$store', '$http', '$scope', '$rootScope', '$routeParams', '$location', function ( $store, $http, $scope, $rootScope, $routeParams, $location) {

  $store.bind($rootScope,'userInfo');


  $scope.login = function() {

    var email = $scope.login_email;
    var password = $scope.login_password;

    $http({method: 'POST', url: 'http://localhost:8080/go/members/login', data: $.param({email:email,password:password}), headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
      success(function(data, status, headers, config) {
        console.log(data)

        if(data.created){
          $('#signin').foundation('reveal', 'close');
          $rootScope.userInfo = data;
          $store.set('userInfo',$rootScope.userInfo)
          $store.bind($rootScope,'userInfo');
          console.log('bind it', $rootScope.userInfo)
        }
      }).
      error(function(data, status, headers, config) {
        $scope.loginAlert = 'Wrong password or user not found.'
      });

      if($rootScope.userInfo && !$rootScope.userInfo.created){
        $scope.loginAlert = 'There was a problem logging in.'
      }
  }

  $scope.logout = function() {


  }


  $rootScope.$on('userNotAuthenticated', function(event) {
    $location.path('/login');


  });



  $scope.$on('loginSuccesful', function(event, user, organizations, applications) {

  });


}]);