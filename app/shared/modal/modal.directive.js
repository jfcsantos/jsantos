angular.module('shared.modal', ['ngResource'])
  .component('modalComponent', {
      templateUrl: 'components/portfolio-detail/portfolio-detail.template.html',
      bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
      },
      controller: function () {
        var self = this;
        self.$onInit = function () {
          self.work = self.resolve.work;
        };
      },
      controllerAs: 'modalContent'
    });
