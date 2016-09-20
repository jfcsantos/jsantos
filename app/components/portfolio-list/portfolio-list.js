'use strict';

angular.module('portfolioList', ['shared.portfolio', 'ngMaterial'])
  .component('portfolioList', {
    templateUrl: 'components/portfolio-list/portfolio-list.template.html',
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
})
.controller('ModalDemoCtrl', ['$scope', '$uibModal', 'Portfolio', function ($scope, $uibModal, Portfolio, $log) {
  var self = this;
  self.animationsEnabled = true;

  self.openComponentModal = function () {
    self.work = Portfolio.query({id: $scope.workId});

    var modalInstance = $uibModal.open({
      // animation: false,
      backdrop: false,
      windowClass: 'full-screen',
      component: 'modalComponent',
      resolve: {
        work: function () {
          return self.work;
        }
      }
    });

  };

}]);;
