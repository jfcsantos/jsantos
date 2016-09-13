'use strict';

// Define the `common.portfolio` module
angular.module('common.portfolio', ['ngResource'])
  .factory('Portfolio', ['$resource',
    function($resource) {
      return $resource('assets/portfolio/:workId.json', {}, {
        query: {
          method: 'GET',
          params: {workId: 'portfolio'},
          isArray: true
        }
      });
    }
  ]);
