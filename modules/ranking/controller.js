var rankingApp = angular.module('ranking',[]);

rankingApp.controller('rankingController',
    ['$scope', '$http','user',
    function ($scope, $http,user) {
    	$scope.orderProp = 'total';
      	user.success(function(data) {
            $scope.user = data;
        });
    }]);
