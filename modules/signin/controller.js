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
        
        user.success(function(data) {
            $scope.user = data;
        });
        $scope.submit = function(){
        	if ($scope.password == $scope.password2) {
        		$scope.signin();
        	}
        	else{
        		$scope.errormessage = 'different password!!';
        	}
        }
        $scope.signin = function(){
            
        	$scope.user.push({'username':$scope.username, 'password':$scope.password, 'game1_score': 0, 'game2_score':0,'game3_score':0, 'total' : 0});
            $location.path('/main');
      }
    }]);
 

