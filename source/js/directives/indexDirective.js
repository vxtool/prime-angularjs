(function() {
  'use strict';

  angular
  .module('app')
  .directive('index', index);

  index.$inject = ['$timeout'];

  function index($timeout) {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: './source/js/templates/index.html',
      link: function(scope, element, attrs) {
        $timeout(function() {
        });
      }
    }
  }
})();
