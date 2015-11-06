var loginApp = angular.module('login',[]);

loginApp.controller('loginController',
    ['$scope',
    function ($scope) {
    	    	
    }]);


var loginApp=angular.module('login', []);


loginApp.controller('loginController',
    ['$scope','loginService',
    function ($scope,loginService) {
		$scope.loginService = loginService;
		$scope.isLogined = function(){
			$scope.loginService.isLogin = !$scope.loginService.isLogin;
		}
    }]);