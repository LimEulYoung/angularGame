var boardApp = angular.module('board',[]);

boardApp.factory('boards', ['$http', function($http) {
  return $http.get("json/board.json")
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);


boardApp.controller('boardController',
    ['$scope','boards','loginService',
    function ($scope,boards,loginService) {
        $scope.search = function(){
            $scope.query = $scope.inputbox;
        }
        boards.success(function(data) {
    		$scope.boards = data;
    	});

        $scope.loginService = loginService;
    }]);


boardApp.controller('board_innerController',
	['$scope','$routeParams','boards',
	function($scope,$routeParams,boards){
		boards.success(function(data) {
    		$scope.boards = data[$routeParams.id];
    	});
    }])
boardApp.controller('writeController',
    ['$scope','loginService','$location','boards',
    function ($scope,loginService,$location,boards) {
        $scope.loginService = loginService;
        boards.success(function(data) {
            $scope.boards = data;
            alert($scope.boards[0].from);
        });
        $scope.submit = function(){
            $scope.boards.push({'from':$scope.loginService.username, 'datetime': Date.now(), 'subject':$scope.title,'message':$scope.message,'unread':true});

            $location.path('/board');
      }
    }]);