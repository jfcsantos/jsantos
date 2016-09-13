'use strict';

angular.module('portfolioList', ['common.portfolio', 'ngMaterial'])
  .component('portfolioList', {
    templateUrl: 'scripts/portfolio-list/portfolio-list.template.html',
    controller: ['Portfolio', '$scope', '$mdDialog',
      function PortfolioListController(Portfolio, $scope, $mdDialog) {
        $scope.portfolio = Portfolio.query();
        $scope.workId = 0;

        $scope.getWorkId = function () {
          $scope.workId += 1;
          return $scope.workId;
        };

        $scope.showDialog = function(ev, modalDiv) {
          console.log('#' + modalDiv);
          $mdDialog.show({
            controller: DialogController,
            contentElement: '#' + modalDiv,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: true
          });
        };

        function DialogController($scope, $mdDialog) {
          $scope.hide = function() {
            $mdDialog.hide();
          };

          $scope.cancel = function() {
            $mdDialog.cancel();
          };

          $scope.answer = function(answer) {
            $mdDialog.hide(answer);
          };
        }
    }
  ]
});
