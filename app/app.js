(function() {
  'use strict';
  angular.module('bornCo', [
    'ui.router',
    'ngAnimate',
    'headroom',
    'smoothScroll'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {
          'footer': {
            templateUrl: 'shared/footer/footerView.html',
            controller: 'FooterCtrl'
          }
        }
      })
      .state('root.home', {
        url: '/',
        views: {
          'container@': {
            templateUrl: 'components/home/homeView.html'
          }
        }
      })
      .state('root.team', {
        url: '/team',
        views: {
          'container@': {
            templateUrl: 'components/team/teamView.html'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  });
})();
