(function() {
  'use strict';
  angular.module('bornCo', [
    'ui.router',
    'ngAnimate',
    'headroom'
  ])
  .config(function($stateProvider) {
    $stateProvider
      .state('index', {
        url: '',
        templateUrl: 'components/home/homeView.html',
        controller: 'HomeCtrl'
      })
      .state('home', {
        url: '/',
        templateUrl: 'components/home/homeView.html',
        controller: 'HomeCtrl'
      });
  });
})();
