'use strict';

var onslide = onslide || {};

onslide.Constants = angular.module('onslide.constants', []);
onslide.Services = angular.module('onslide.services', []);
onslide.Controllers = angular.module('onslide.controllers', []);
onslide.Filters = angular.module('onslide.filters', []);
onslide.Directives = angular.module('onslide.directives', []);

angular.module('onslide',
    ['ngResource',
      'onslide.filters',
      'onslide.services',
      'onslide.directives',
      'onslide.constants',
      'onslide.controllers']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $routeProvider
      .when('/home', {templateUrl: 'home/home.html', controller: 'LoginCtrl'})
      .when('/login', {templateUrl: 'global/login.html', controller: 'LoginCtrl'})
      .otherwise({redirectTo: '/home'});

    $locationProvider
      .html5Mode(false)
      .hashPrefix('!');
  }]);
