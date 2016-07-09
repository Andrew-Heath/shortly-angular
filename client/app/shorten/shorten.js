angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {}; // Maybe remove?

  $scope.addLink = function() {
    Links.addOne($scope.newLink);
    $scope.newLink = '';
  };
});
