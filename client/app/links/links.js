angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = { links: [] };

  var getAllLinks = function() {
    Links.getAll().then(function(links) {
      $scope.data.links = links;
    });   
  };

  getAllLinks();
});
