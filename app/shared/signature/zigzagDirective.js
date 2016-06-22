(function() {
  'use strict';
  angular.module('bornCo')
    .directive('bcZigzag', bcZigzag);

  function bcZigzag() {
    return {
      restrict: 'E',
      template: '<img src="assets/img/icons/zigzag.svg"/>'
    };
  }
})();
