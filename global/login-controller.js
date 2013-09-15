'use strict'

onslyde.Controllers.controller('LoginCtrl', [ '$store', '$http', '$scope', '$rootScope', '$routeParams', '$location', function ( $store, $http, $scope, $rootScope, $routeParams, $location) {

  $store.bind($rootScope,'userInfo');


  $scope.login = function(email,password) {

    var email = (email || $scope.login_email);
    var password = (password || $scope.login_password);

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

  $scope.register = {};
  $scope.registerMessage = '';

  $scope.signup = function() {

    var email = $scope.register.email;
    var password = $scope.register.password;
    var name = $scope.register.fullName;


    $http({method: 'POST', url: 'http://localhost:8080/go/members', data: $scope.register, headers: {}}).
      success(function(data, status, headers, config) {
        $rootScope.registerMessage = data;
        $store.set('registerMessage',$rootScope.registerMessage)
        $scope.login(email,password)
        $location.path('/gettingstarted');
      }).
      error(function(data, status, headers, config) {
        $scope.registerAlert = 'Problem registering user.'
      });


  }

  $scope.logout = function() {
    $store.remove('userInfo')
    $store.remove('registerMessage')
    $rootScope.userInfo = {};
  }


  $rootScope.$on('userNotAuthenticated', function(event) {
    $location.path('/login');


  });



  $scope.$on('loginSuccesful', function(event, user, organizations, applications) {

  });


}]);