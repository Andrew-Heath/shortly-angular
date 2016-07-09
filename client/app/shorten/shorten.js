angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {}; // Maybe remove?

  $scope.addLink = function(isValid) {
    if (isValid) {
      Links.addOne($scope.newLink);
      $scope.newLink = '';    
    } else {
      console.log('input is invalid');
    }
  };
});
