(function() {
  'use strict';
  angular.module('bornCo').controller('NavbarCtrl', NavbarCtrl);

  function NavbarCtrl($scope) {
    $scope.navbar = {
      toggled: false
    };
  }
})();
