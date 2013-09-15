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
      .when('/gettingstarted', {templateUrl: 'gettingstarted/gettingstarted.html', controller: 'LoginCtrl'})
      .otherwise({redirectTo: '/home'});

    $locationProvider
      .html5Mode(false)
      .hashPrefix('!');
  }])
  .run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {


      $(document).foundation();

//      $(document).foundation('orbit', {
//        timer_speed: 20000,
//        bullets: false,
//        slide_number: false
//      });

      $(document)
        .foundation()
        .foundation('abide', {
          patterns: {
            password: /^[a-zA-Z]\w{3,14}$/
          }
        });

      $("#how-can-use").on("orbit:after-slide-change", function(event, orbit) {
        console.info("after slide change");
        console.info("slide ", document.querySelectorAll('.slide'));
        var counter = 1;
        angular.forEach(document.querySelectorAll('.slide'), function(value, key){

          if((orbit.slide_number + 1) === counter){
            value.classList.remove('hidden');
            value.classList.add('slide' + counter);
          }else{
            value.classList.add('hidden');
            value.classList.remove('slide' + counter);
          }
          counter++;
        });

      });

      $('#sign-up').on('invalid', function () {
        alert('np')
      })
        .on('valid', function () {
          alert('yes')
        });
    });
  });

