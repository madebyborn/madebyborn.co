(function() {
  'use strict';
  angular.module('bornCo', [
    'ui.router'
  ])
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'components/home/homeView.html'
      });
  });
})();
