var BabApp = angular.module('BabApp', ['ngRoute']);

BabApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '/musicMain.html',
      controller:  'HomeController'
    })
    .when('/designOne',{
      templateUrl: '/designOne.html',
      controller: 'HomeController'
    })
    .when('/musicDesign',{
      templateUrl: '/musicDesign.html',
      controller: 'HomeController'
    })
    .when('/musicMain',{
      templateUrl: '/musicMain.html',
      controller: 'HomeController'
    })
    .otherwise({
      templateUrl: '/404.html'
    })

    $locationProvider.hashPrefix('!')


}]);

BabApp.controller('ProfileController', ['$scope', '$routeParams', function($scope, $routeParams) {

  $scope.message = "home page"
  $scope.name = $routeParams.name
}]);


BabApp.controller('HomeController', ['$scope','$location', function($scope,$location) {

  // console.log($location.path());

  // $scope.message = "home page"

  $('.carousel').carousel();


}]);