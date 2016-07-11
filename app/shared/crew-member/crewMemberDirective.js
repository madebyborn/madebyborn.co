(function() {
  'use strict';
  angular.module('bornCo').directive('bcCrewMember', bcCrewMember);

  function bcCrewMember() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'shared/crew-member/crewMemberView.html',
      scope: {
        id: '@',
        name: '@',
        position: '@',
        dribbble: '@',
        instagram: '@',
        twitter: '@',
        behance: '@'
      }
    };
  }
})();
