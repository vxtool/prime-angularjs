(function() {
  angular
  .module('app')
  .service('IndexService', IndexService);

  IndexService.$inject = ['$rootScope'];

  function IndexService($rootScope) {
    var vm = this;

    var serv = {};

    serv.method = function($scope) {
    };

    return serv;
  };

})();
