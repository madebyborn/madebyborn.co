(function() {
  'use strict';
  angular.module('bornCo')
    .directive('bcNavlink', bcNavlink);

  function bcNavlink() {
    return {
      restrict: 'E',
      scope: {
        uiSref: '@',
        toggled: '='
      },
      transclude: true,
      templateUrl: 'shared/navlink/navlinkView.html'
    };
  }
})();
