(function() {
  'use strict';
  angular.module('bornCo')
    .directive('bcButton', bcButton);

  function bcButton() {
    return {
      restrict: 'E',
      scope: {
        href: '@'
      },
      transclude: true,
      templateUrl: 'shared/button/buttonView.html'
    };
  }
})();
