(function() {
  'use strict';
  angular.module('bornCo').controller('FooterCtrl', FooterCtrl);

  function FooterCtrl($scope) {
    $scope.year = new Date().getFullYear();
  }
})();
