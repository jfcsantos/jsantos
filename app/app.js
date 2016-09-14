'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */
angular
  .module('yoAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'ui.bootstrap',
    'portfolioList',
    'shared'
  ])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    // $locationProvider.hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'components/main/main.template.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'components/about/about.template.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
      // $locationProvider.html5Mode(true);

  }]);
