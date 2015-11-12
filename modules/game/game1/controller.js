var game1 = angular.module('game1', []);

game1.factory('game', function() {
  var tileNames = ['8-ball', 'kronos', 'baked-potato', 'dinosaur', 'rocket', 'skinny-unicorn',
    'that-guy', 'zeppelin'];
  return new Game(tileNames);
});


game1.controller('game1Controller',function GameCtrl($scope, game, $timeout,loginService,user) {
  var index = 0;
  $scope.loginService = loginService;
  user.success(function(data) {
            $scope.user = data;
            for(var i = $scope.user.length - 1; i >= 0; i--){
              if ($scope.loginService.username == $scope.user[i].username) {
                index = i;
              };
            }
        });
  $scope.game = game;
  $scope.unmatchedPairs = $scope.game.unmatchedPairs;
  $scope.counter = 0;
  $scope.onTimeout = function(){
      $scope.counter++;
      $scope.unmatchedPairs = $scope.game.unmatchedPairs;
      mytimeout = $timeout($scope.onTimeout,1000);
      if ($scope.unmatchedPairs == 0) {

        if($scope.user[index].game1_score < 100-($scope.counter)){
          $scope.user[index].game1_score = 100-($scope.counter);      
        };
        $timeout.cancel(mytimeout);
      };
  }
  var mytimeout = $timeout($scope.onTimeout,1000);
});