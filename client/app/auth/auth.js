// do not tamper with this code in here, study it, but do not touch
// this Auth controller is responsible for our client side authentication
// in our signup/signin forms using the injected Auth service
angular.module('shortly.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {
  $scope.user = {};
  $scope.errorMessage = 'Invalid Username or Password.\nUsername: alphanumeric characters only, 6 - 20 characters total\nPassword: alphanumeric characters only, 6 - 20 characacters total';
  $scope.signin = function (isValid) {
    if (isValid) {
      Auth.signin($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert($scope.errorMessage);
    }
  };

  $scope.signup = function (isValid) {
    if (isValid) {
      Auth.signup($scope.user)
        .then(function (token) {
          $window.localStorage.setItem('com.shortly', token);
          $location.path('/links');
        })
        .catch(function (error) {
          console.error(error);
        });
    } else {
      alert($scope.errorMessage);
    }
  };

  $scope.signout = function () {
    Auth.signout();
  };
});
