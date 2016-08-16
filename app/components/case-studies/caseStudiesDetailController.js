(function() {
  'use strict';
  angular.module('bornCo')
    .controller('CaseStudiesDetailCtrl', CaseStudiesDetailCtrl);

  function CaseStudiesDetailCtrl($scope, $stateParams, caseStudiesFactory) {
    caseStudiesFactory.getEntry($stateParams.id)
      .then(function(response) {
        var data = response.data.items[0].fields;
        console.log(data);

        $scope.project = {
          id: $stateParams.id,
          title: data.title,
          services: data.services,
          header: data.header.fields.file.url,
          description: data.description,
          introPhotos: data.introPhotos,
          description2: data.description2,
          summary: data.summary,
          photos: data.photos,
          description3: data.description3,
          endPhotos: data.endPhotos
        };
      });
  }
})();
