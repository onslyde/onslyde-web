'use strict'

onslyde.Controllers.controller('GetStartedCtrl',
  [ '$scope', '$rootScope','$location', '$http', function (
                        $scope,
                        $rootScope,$location,$http) {
    $scope.getstarted = {};

    $scope.setupPres = function(){
      console.log('----',$scope.getstarted.presName)
      window.open('http://localhost:8080/go/template/create?' +
        'email=' + $rootScope.userInfo.email + '&' +
        'token=' + $rootScope.userInfo.created + '&' +
        'presName=' + $scope.getstarted.presName + '&' +
        'poll1=' + $scope.getstarted.poll1 + '&' +
        'option1=' + $scope.getstarted.option1 + '&' +
        'option2=' + $scope.getstarted.option2)

    }


  }]);

