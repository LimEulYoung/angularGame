var rankingApp = angular.module('ranking',[]);

rankingApp.controller('rankingController',
    ['$scope', '$http','user',
    function ($scope, $http,user) {
    	
      	user.success(function(data) {
            $scope.user = data;
        });
    }]);
