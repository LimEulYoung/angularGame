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
    ['$scope','boards','loginService','$location',
    function ($scope,boards,loginService,$location) {
        $scope.search = function(){
            $scope.query = $scope.inputbox;
        }
        boards.success(function(data) {
    		$scope.boards = data;
    	});

        $scope.loginService = loginService;
        $scope.write = function(){
            $location.path('/write');
        }
    }]);


boardApp.controller('board_innerController',
	['$scope','$routeParams','boards','loginService','$location',
	function($scope,$routeParams,boards,loginService,$location){
        $scope.loginService = loginService;
        
		boards.success(function(data) {
    		$scope.boards = data[$routeParams.id];
            $scope.board = data;
    	});
        $scope.test = function(){
            if ($scope.boards.from == $scope.loginService.username) {
                return true;
            }
            else{
                return false;
            }
        };
        $scope.edit_board = function(){
            $location.path('/edit/'+$routeParams.id);
        };
        $scope.delete_board = function(){
            $scope.board.splice($routeParams.id, 1);
            alert('deleted!');
            $location.path('/board');
        };
        $scope.list = function(){
            $location.path('/board');
        };

    }])
boardApp.controller('writeController',
    ['$scope','loginService','$location','boards',
    function ($scope,loginService,$location,boards) {
        $scope.loginService = loginService;
        boards.success(function(data) {
            $scope.boards = data;
        });
        $scope.submit = function(){
            $scope.boards.push({'from':$scope.loginService.username, 'datetime': Date.now(), 'subject':$scope.title,'message':$scope.message,'unread':true});

            $location.path('/board');
      }
    }]);


boardApp.controller('editController',
    ['$scope','boards','$routeParams', '$location','loginService',
    function ($scope,boards,$routeParams,$location,loginService) {
        $scope.loginService = loginService;
        boards.success(function(data) {
            $scope.boards = data[$routeParams.id];
            $scope.board = data;
        });
        $scope.edit = function(){
            $scope.board[$routeParams.id] = {'from':$scope.loginService.username, 'datetime': Date.now(), 'subject':$scope.title,'message':$scope.message,'unread':true};

            $location.path('/board/'+$routeParams.id);
        }
    }]);