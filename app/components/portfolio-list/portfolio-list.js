'use strict';

angular.module('portfolioList', ['shared.portfolio', 'ngMaterial'])
  .component('portfolioList', {
    templateUrl: 'components/portfolio-list/portfolio-list.template.html',
    controller: ['Portfolio', '$scope', '$mdDialog',
      function PortfolioListController(Portfolio, $scope, $mdDialog) {
        var portfolio = Portfolio.query();
        portfolio.$promise.then(function (result) {
          console.log(result);
          $scope.portfolio = result;
        });

        $scope.workId = 1;

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
      var work = Portfolio.query({id: $scope.workId});
      work.$promise.then(function (result) {
        console.log(result);
        self.work = result;
      });

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
