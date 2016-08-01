(function() {
  'use strict';

  angular.module('bornCo').factory('caseStudiesFactory', caseStudiesFactory);

  function caseStudiesFactory(contentful) {
    function get() {
      return contentful.entries('content_type=project');
    }

    function getEntry(id) {
      return contentful.entries('sys.id=' + id + '&include=1');
    }

    return {
      get: get,
      getEntry: getEntry
    };
  }
})();
