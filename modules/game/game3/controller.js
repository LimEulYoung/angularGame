var game3App = angular.module('game3',[]);

game3App.controller('game3Controller',
    ['$scope','$timeout','user','loginService',
    function ($scope,$timeout,user,loginService) {
        var index = 0;
        $scope.loginService = loginService;
        user.success(function(data) {
            $scope.user = data;
            for(var i = $scope.user.length - 1; i >= 0; i--){
              if ($scope.loginService.username == $scope.user[i].username) {
                index = i;
                
              };
            }
        });
        
    	  $scope.count = 0;
      	$scope.img = 'egg1.png';
      	$scope.counter = 0;

        setTimeout(function(){
          $scope.count = $scope.user[index].game3_score;
          $scope.clickEgg();
        },10);
      	$scope.onTimeout = function(){
      		$scope.counter++;
      		mytimeout = $timeout($scope.onTimeout,1000);
      	}
      	var mytimeout = $timeout($scope.onTimeout,1000);
      	$scope.clickEgg = function(){
      	$scope.count++;
      	if ($scope.count>999 && $scope.count<1999) {
      		$scope.img='egg2.png';
      	}
      	else if ($scope.count>1999 && $scope.count<2999) {
      		$scope.img='egg3.png';
      	}
      	else if ($scope.count>2999 && $scope.count<3999) {
      		$scope.img='egg4.png';
      	}
      	else if ($scope.count>3999 && $scope.count<4999) {
      		$scope.img='egg5.png';
      	}
      	else if($scope.count>4999){
      		$scope.img='egg6.png';
      	};
        $scope.user[index].game3_score = $scope.count;
      }
    }]);