'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp', ['ngMaterial'])
  .controller('MainController', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {

    function buildToggler(componentId) {
     return function() {
       $mdSidenav(componentId).toggle();
     };
    }

    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    if($scope.isSidebar === true) {
     $scope.navClasses = {ul: "nav navbar-nav"};
    }
    else {
     $scope.navClasses = {
       ul: "sidebar-nav",
       li: "page-scroll"
     };
    }
  }]);
