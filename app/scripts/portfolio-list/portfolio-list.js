'use strict';

angular.module('portfolioList', ['common.portfolio'])
  .component('portfolioList', {
    templateUrl: 'scripts/portfolio-list/portfolio-list.template.html',
    controller: ['Portfolio', '$scope',
      function PortfolioListController(Portfolio, $scope) {
        $scope.portfolio = Portfolio.query();
        $scope.workId = 0;

        $scope.getWorkId = function () {
          $scope.workId += 1;
          return $scope.workId;
        };
    }
  ]
});
