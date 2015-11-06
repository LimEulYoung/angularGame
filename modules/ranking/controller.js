var rankingApp = angular.module('ranking',[]);

rankingApp.controller('rankingController',
    ['$scope', '$http',
    function ($scope, $http) {
    	$scope.orderProp = 'total';
      	$http.get("json/user.json")
			.success(function (response) {$scope.user = response.records;});
    }]);