'use strict'

onslide.Controllers.controller('LoginCtrl', [ '$http', '$scope', '$rootScope', '$routeParams', '$location', function ( $http, $scope, $rootScope, $routeParams, $location) {



  $scope.login = function() {

    var email = $scope.login_email;
    var password = $scope.login_password;

    $http({method: 'POST', url: 'http://localhost:8080/go/members/login', data: $.param({email:email,password:password}), headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).
      success(function(data, status, headers, config) {
        console.log(data)
        $rootScope.userInfo = data;
        if(data.created){
          $('#signin').foundation('reveal', 'close');
        }
      }).
      error(function(data, status, headers, config) {
        $scope.loginAlert = 'Wrong password or user not found.'
      });

    $scope.loginAlert = 'Wrong password or user not found.'

  }

  $scope.logout = function() {


  }


  $rootScope.$on('userNotAuthenticated', function(event) {
    $location.path('/login');


  });



  $scope.$on('loginSuccesful', function(event, user, organizations, applications) {

  });


}]);