(function() {
  'use strict';
  angular.module('bornCo')
    .directive('bcZigzag', bcZigzag);

  function bcZigzag() {
    return {
      restrict: 'E',
      scope: {
        class: '@'
      },
      templateUrl: 'assets/img/icons/zigzag.svg'
    };
  }
})();
