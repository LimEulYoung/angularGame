var loginApp = angular.module('login',[]);

loginApp.controller('loginController',
    ['$scope',
    function ($scope) {
    	    	
    }]);


var loginApp=angular.module('login', []);


loginApp.controller('loginController',
    ['$scope','loginService','$location',
    function ($scope,loginService,$location) {
		$scope.loginService = loginService;
		$scope.login = function(){
			if ($scope.username == 'test' && $scope.password=='test') {
				$scope.isLogined();
			}else{
				$scope.errormessage ='The username or password you entered is incorrect.';
			}
		}
		$scope.isLogined = function(){
			$scope.loginService.isLogin = !$scope.loginService.isLogin;
			$scope.loginService.isLogout = !$scope.loginService.isLogout;
			$scope.loginService.username = $scope.username;
			$scope.loginService.password = $scope.password;
			$location.path('/main');
		}
    }]);