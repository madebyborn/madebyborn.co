(function() {
  'use strict';
  angular.module('bornCo')
    .directive('bcNavbar', bcNavbar);

  function bcNavbar() {
    return {
      restrict: 'E',
      templateUrl: 'shared/navbar/navbarView.html'
    };
  }
})();
