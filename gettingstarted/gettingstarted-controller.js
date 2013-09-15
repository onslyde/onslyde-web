'use strict'

onslyde.Controllers.controller('GetStartedCtrl',
  [ '$scope', '$rootScope','$location', '$http','$store', function (
                        $scope,
                        $rootScope,$location,$http,$store) {

    $scope.getstarted = {};

    $scope.setupPres = function(){

      window.open('http://localhost:8080/go/template/create?' +
        'email=' + $rootScope.userInfo.email + '&' +
        'sessionId=' + (($rootScope.registerMessage && $rootScope.registerMessage.sessionId) || '') + '&' +
        'token=' + $rootScope.userInfo.created + '&' +
        'presName=' + $scope.getstarted.presName + '&' +
        'poll1=' + $scope.getstarted.poll1 + '&' +
        'option1=' + $scope.getstarted.option1 + '&' +
        'option2=' + $scope.getstarted.option2)

      //need a better check to make sure pres was created, or show it as created in ui
    $store.remove('registerMessage')
    }




  }]);

