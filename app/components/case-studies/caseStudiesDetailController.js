(function() {
  'use strict';
  angular.module('bornCo')
    .controller('CaseStudiesDetailCtrl', CaseStudiesDetailCtrl);

  function CaseStudiesDetailCtrl($scope, $stateParams, caseStudiesFactory) {
    caseStudiesFactory.getEntry($stateParams.id)
      .then(function(response) {
        var data = response.data.items[0].fields;

        $scope.project = {
          id: $stateParams.id,
          title: data.title,
          services: data.services,
          header: data.header.fields.file.url,
          description: data.description,
          introPhotos: data.introPhotos,
          summary: data.summary,
          photos: data.photos
        };
      });
  }
})();
