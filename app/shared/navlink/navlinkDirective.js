(function() {
  'use strict';
  angular.module('bornCo')
    .directive('bcNavlink', bcNavlink);

  function bcNavlink() {
    return {
      restrict: 'E',
      scope: {
        uiSref: '@'
      },
      transclude: true,
      templateUrl: 'shared/navlink/navlinkView.html'
    };
  }
})();
