var signinApp = angular.module('signin',[]);
 
signinApp.factory('user', ['$http', function($http) {
  return $http.get("json/user.json")
            .success(function(data) {
              return data;
            })
            .error(function(err) {
              return err;
            });
}]);


signinApp.controller('signinController',
    ['$scope','$location','user',
    function ($scope,$location,user) {
        var valiad_id = false;
        
        user.success(function(data) {
            $scope.user = data;
        });
        $scope.submit = function(){
        	var count = 0;
        	for(var i = $scope.user.length - 1; i >= 0; i--){
              	if ($scope.username == $scope.user[i].username) {
                	$scope.errormessage2 = 'The ID is already using!!';
                  $scope.isID=true;
                	count++;
                	break;
              	};
            }
            if(count == 0){
              		valiad_id = true;
              		$scope.errormessage2='';
                  $scope.isID=false;
              	}

        	if (($scope.password == $scope.password2) && valiad_id) {
        		$scope.signin();
        	}
        	else if(valiad_id && ($scope.password != $scope.password2)){
        		$scope.errormessage = 'Please confirm your password!!';
            $scope.isPWD = true;
        	}
        }
        $scope.signin = function(){
            
        	$scope.user.push({'username':$scope.username, 'password':$scope.password, 'game1_score': 0, 'game2_score':0,'game3_score':0, 'total' : 0});
            $location.path('/main');
      }
    }]);
 

