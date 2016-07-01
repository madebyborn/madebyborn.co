(function() {
  'use strict';
  angular.module('bornCo').directive('bcHideOnStateChange', bcHideOnStateChange);

  function bcHideOnStateChange($rootScope, $timeout) {
    return {
      restrict: 'A',
      link: link
    };

    function link(scope, element, attrs, ctrl) {
      $rootScope.$on('$stateChangeStart', $stateChangeStart);
      $rootScope.$on('$stateChangeSuccess', $stateChangeSuccess);
      var stateChangePromise;
      addVisibleClass();

      function $stateChangeStart() {
        element.removeClass('visible');
      }

      function $stateChangeSuccess() {
        addVisibleClass();
      }

      function addVisibleClass() {
        $timeout.cancel(stateChangePromise);
        stateChangePromise = $timeout(function() {
          element.addClass('visible');
        }, 1000);
      }
    }
  }
})();
