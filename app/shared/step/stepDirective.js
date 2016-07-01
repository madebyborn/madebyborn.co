(function() {
  'use strict';
  angular.module('bornCo').directive('bcStep', bcStep);

  function bcStep() {
    return {
      restrict: 'AE',
      scope: {
        title: '@',
        number: '@'
      },
      transclude: true,
      templateUrl: 'shared/step/stepView.html'
    };
  }
})();
