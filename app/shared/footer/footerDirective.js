(function() {
  'use strict';
  angular.module('bornCo').directive('bcFooter', bcFooter);

  function bcFooter() {
    return {
      restrict: 'E',
      templateUrl: 'shared/footer/footerView.html'
    };
  }
})();
