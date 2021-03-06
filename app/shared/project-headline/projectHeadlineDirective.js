(function() {
  'use strict';
  angular.module('bornCo').directive('bcProjectHeadline', bcProjectHeadline);

  function bcProjectHeadline() {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        backgroundUrl: '@',
        services: '@',
        studyId: '@'
      },
      templateUrl: 'shared/project-headline/projectHeadlineView.html',
      link: function(scope) {
        if (/Mobi/.test(navigator.userAgent)) {
          scope.isMobile = true;
        }
      }
    };
  }
})();
