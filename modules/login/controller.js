var loginApp = angular.module('login',[]);

loginApp.controller('loginController',
    ['$scope',
    function ($scope) {
    	    	
    }]);


var loginApp=angular.module('login', []);


loginApp.controller('loginController',
    ['$scope','loginService','$location','$http','user',
    function ($scope,loginService,$location,$http,user) {
		$scope.loginService = loginService;
		user.success(function(data) {
            $scope.user = data;
        });


		$scope.login = function(){
			for (var i = $scope.user.length - 1; i >= 0; i--) {
				if (($scope.username == $scope.user[i].username) && ($scope.password==$scope.user[i].password)) {
					$scope.isLogined();
				};
			};
			$scope.errormessage ='The username or password you entered is incorrect.';
		}

		$scope.isLogined = function(){
			$scope.loginService.isLogin = !$scope.loginService.isLogin;
			$scope.loginService.isLogout = !$scope.loginService.isLogout;
			$scope.loginService.username = $scope.username;
			$scope.loginService.password = $scope.password;
			$location.path('/main');
		}
    }]);