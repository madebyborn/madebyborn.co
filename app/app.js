(function() {
  'use strict';
  angular.module('bornCo', [
    'ui.router',
    'ngAnimate'
  ])
  .config(function($stateProvider) {
    $stateProvider
      .state('index', {
        url: '',
        templateUrl: 'components/home/homeView.html'
      })
      .state('home', {
        url: '/',
        templateUrl: 'components/home/homeView.html'
      });
  });
})();
