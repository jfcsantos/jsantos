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
    .directive('myNavMenu', function() {
      return {
        replace: true,
        restrict: 'E',
        scope: {
            isSidebar: '@',
        },
        templateUrl: 'views/sidebar.template.html',
        link: function (scope, element, attributes) {
            // var el = angular.element(element);
            var button = angular.element('#navbar-toggle');
            var navLink = angular.element('.sidebar-nav a');
            navLink.on('click', function(){
               // Actions after the file is selected
               button.click();
            });
        }
      };
    })
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
