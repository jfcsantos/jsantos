'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
    .controller('MainController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
      function buildToggler(componentId) {
       return function() {
         $mdSidenav(componentId).toggle();
       };
      }
      $scope.toggleLeft = buildToggler('left');
    }])
    .directive('scrollToItem', function() {
      return {
          restrict: 'A',
          scope: {
              scrollTo: "@"
          },
          link: function(scope, element, attr) {

              element.on('click', function() {
                  var bodyElem = angular.element("body");
                  angular.element(bodyElem).animate({scrollTop: element.offset().top}, "fast");
              });
          }
      };
    });
