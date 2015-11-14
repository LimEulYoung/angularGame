var rankingApp = angular.module('ranking',[]);

rankingApp.controller('rankingController',
    ['$scope', '$http','user',
    function ($scope, $http,user) {
    	
      	user.success(function(data) {
            $scope.user = data;
        });
        $scope.game1 = function(){
        	$scope.orderProp = "game1_score";
        }
        $scope.game2 = function(){
        	$scope.orderProp = "game2_score";
        }
        $scope.game3 = function(){
        	$scope.orderProp = "game3_score";
        }
    }]);
