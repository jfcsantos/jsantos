'use strict';

// Define the `common.portfolio` module
angular.module('shared.portfolio', ['ngResource'])
  .factory('Portfolio', ['$resource',
    function($resource) {
      return $resource('http://localhost:8000/portfolio/:id', {}, {
            get:    {method: 'GET'},
            update: {method: 'POST'}
        });
    }
  ]);
