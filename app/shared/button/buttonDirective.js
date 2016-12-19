(function() {
  'use strict';
  angular.module('bornCo')
    .directive('bcButton', bcButton);

  function bcButton() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'shared/button/buttonView.html',
      link: link
    };

    function link(scope, element, attr) {
      if (attr.href) {
        scope.href = attr.href;
      }
    }
  }
})();
