angular.module('main',[]);
angular.module('home',[]);
angular.module('game1',[]);
angular.module('game2',[]);
angular.module('game3',[]);
angular.module('dashboard',[]);
angular.module('ranking',[]);


var myApp = angular.module('myApp', ['ngRoute','home','main','game1','game2','game3','dashboard','ranking']);

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


        .otherwise({ redirectTo: '/main' });
}]);
