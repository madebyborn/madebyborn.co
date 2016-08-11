(function() {
  'use strict';
  angular.module('bornCo').factory('letsTalkFactory', letsTalkFactory);

  function letsTalkFactory($http) {
    return {
      postEmail: postEmail
    };

    function postEmail(data) {
      data._subject = 'Contact from madebyborn.co';
      return $http.post('https://formspree.io/get@madebyborn.co', data);
    }
  }
})();
