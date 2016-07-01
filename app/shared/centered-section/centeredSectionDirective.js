(function() {
  'use strict';
  angular.module('bornCo').directive('bcCenteredSection', bcCenteredSection);

  function bcCenteredSection() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'shared/centered-section/centeredSectionView.html',
      scope: {
        id: '@'
      }
    };
  }
})();
