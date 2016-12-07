(function() {
  'use strict';
  angular.module('bornCo').directive('bcCrewMember', bcCrewMember);

  function bcCrewMember() {
    return {
      restrict: 'E',
      replace: true,
      transclude: true,
      templateUrl: 'shared/crew-member/crewMemberView.html',
      scope: {
        imgId: '@',
        name: '@',
        position: '@',
        description: '@',
        dribbble: '@',
        instagram: '@',
        twitter: '@',
        behance: '@'
      }
    };
  }
})();
