var designApp = angular.module('DesignApp', ['ngRoute']);

designApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/home.html',
      controller:  'HomeController'
    })
    .otherwise({
      templateUrl: '/404.html'
    })


    $locationProvider.hashPrefix('!')


}]);

designApp.controller('ProfileController', ['$scope', '$routeParams', function($scope, $routeParams) {

  $scope.message = "home page"
  $scope.name = $routeParams.name
}]);



designApp.controller('HomeController', ['$scope','$location', function($scope,$location) {

  console.log($location.path());


  $scope.message = "home page"

}]);