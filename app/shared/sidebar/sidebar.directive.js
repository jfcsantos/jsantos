'use strict';

// Define the `shared` module
angular.module('shared.sidebar', ['ngResource'])
.directive('myNavMenu', function() {
  return {
    replace: true,
    restrict: 'E',
    scope: {
        isSidebar: '@',
    },
    templateUrl: 'shared/sidebar/sidebar.template.html',
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
});
