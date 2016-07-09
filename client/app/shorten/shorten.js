angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {}; // Maybe remove?

  $scope.addLink = function() {
    Links.addOne($scope.newLink);
    $scope.newLink = '';
  };

  if (!Auth.isAuth()) {  
    console.log('Not authorized');
    // redirect to login?
    Auth.signout();
  }
});
