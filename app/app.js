(function() {
  'use strict';
  angular.module('bornCo', [
    'ui.router',
    'ngAnimate',
    'headroom',
    'smoothScroll',
    'contentful',
    'ngSanitize',
    'hc.marked'
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
      })
      .state('root.case-studies', {
        url: '/case-studies',
        views: {
          'container@': {
            templateUrl: 'components/case-studies/caseStudiesView.html',
            controller: 'CaseStudiesCtrl'
          }
        }
      })
      .state('root.case-studies-detail', {
        url: '/case-studies/:id',
        views: {
          'container@': {
            templateUrl: 'components/case-studies/caseStudiesDetailView.html',
            controller: 'CaseStudiesDetailCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  })
  .config(function(contentfulProvider) {
    contentfulProvider.setOptions({
      space: 'ih0uyh1op3d3',
      accessToken: '47f53b26131f3e6196e3fddc7792b18446ee0e8f54d7cd5e01e121f58951ac2a'
    });

    $.jribbble.setToken('a6b5f42d9518b8b3f94f18a310bf34e531c33ef28c4e9da884c5ba1a641ee0a8');
  })
  .run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    });
  })
  .constant('BornBucket', 405639);
})();
