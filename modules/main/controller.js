var mainApp = angular.module('main',[]);

mainApp.controller('mainController',
    ['$scope',
    function ($scope) {
      $scope.test = "login";
    }]);