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


    }
  ],
  controllerAs: 'portfolioList'

});
