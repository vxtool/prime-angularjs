(function() {

  /**
   * Find the class in the element
   *
   * @param {scope} $scope
   * @param {function} IndexService -
   *
   */
  angular
  .module('app')
  .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'IndexService'];

  function IndexController($scope, IndexService) {
    var vm = this;
  }
})();
