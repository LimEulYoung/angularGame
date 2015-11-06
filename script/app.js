angular.module('main',[]);
angular.module('home',[]);
angular.module('game1',[]);
angular.module('game2',[]);
angular.module('game3',[]);
angular.module('dashboard',[]);
angular.module('ranking',[]);
angular.module('login',[]);


var myApp = angular.module('myApp', ['ngRoute','home','main','game1','game2','game3','dashboard','ranking','login']);

myApp.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        
        .when('/main', {
            controller: 'mainController',
            templateUrl: 'modules/main/views/main.html'
        }) 
        .when('/game1', {
            controller: 'game1Controller',
            templateUrl: 'modules/game/game1/views/game1.html'
        }) 
        .when('/game2', {
            controller: 'game2Controller',
            templateUrl: 'modules/game/game2/views/game2.html'
        }) 
        .when('/game3', {
            controller: 'game3Controller',
            templateUrl: 'modules/game/game3/views/game3.html'
        })
        .when('/game', {
            controller: 'gameController',
            templateUrl: 'modules/game_home/views/game.html'
        })
        .when('/dashboard',{
            controller: 'dashboardController',
            templateUrl: 'modules/dashboard/views/dashboard.html'
        })
        .when('/ranking',{
            controller: 'rankingController',
            templateUrl: 'modules/ranking/views/ranking.html'
        })
        .when('/login',{
            controller: 'loginController',
            templateUrl: 'modules/login/views/login.html'
        })

        .otherwise({ redirectTo: '/main' });
}]);


myApp.factory('loginService', function() {
    var loginVariable = {};
    loginVariable.isLogin = true;
    loginVariable.isLogout = !loginVariable.isLogin;
    loginVariable.username = '';
    loginVariable.password = '';  
    return loginVariable;
});
myApp.controller('myAppController',
    ['$scope','loginService',
    function ($scope,loginService) {
        $scope.loginService = loginService;
        $scope.isLogouted = function(){
            $scope.loginService.isLogout = !$scope.loginService.isLogout;
            $scope.loginService.isLogin = !$scope.loginService.isLogin;
            $scope.loginService.username = '';
            $scope.loginService.password = '';
        }      
    }]);