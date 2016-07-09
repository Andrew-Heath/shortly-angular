angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = { links: [] };

  var getAllLinks = function() {
    Links.getAll().then(function(links) {
      $scope.data.links = links;
    });   
  };

  if (Auth.isAuth()) {
    getAllLinks();
  } else {  
    console.log('Not authorized');
    // redirect to login?
    Auth.signout();
  }
});
