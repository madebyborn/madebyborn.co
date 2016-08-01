(function() {
  'use strict';
  angular.module('bornCo').controller('CaseStudiesCtrl', CaseStudiesCtrl);

  function CaseStudiesCtrl($scope, caseStudiesFactory, BornBucket) {
    $scope.caseStudies = [];
    $scope.shots = [];

    caseStudiesFactory.get().then(
      function(response) {
        $scope.caseStudies = response.data.items;
      }
    );

    $.jribbble.buckets(BornBucket).shots({'per_page': 3}).then(function(res) {
      $scope.shots = _.map(res, mapShots);

      function mapShots(value) {
        return {
          description: value.description,
          imgUrl: value.images.hidpi,
          title: value.title,
          url: value.html_url
        };
      }
    });
  }
})();
