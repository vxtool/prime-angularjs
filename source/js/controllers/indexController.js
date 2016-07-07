(function() {
  'use strict';

  angular
  .module('app')
  .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'IndexService'];

  function IndexController($scope, IndexService) {
    var vm = this;
  }
})();
