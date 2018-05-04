var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'CosmeticsController',
		templateUrl: 'views/cosmetics.html'
	})
	.when('/cosmetics', {
		controller:'CosmeticsController',
		templateUrl: 'views/cosmetics.html'
	})
	.when('/cosmetics/details/:id',{
		controller:'CosmeticsController',
		templateUrl: 'views/cosmetic_details.html'
	})
	.when('/cosmetics/add',{
		controller:'CosmeticsController',
		templateUrl: 'views/add_cosmetic.html'
	})
	.when('/cosmetics/edit/:id',{
		controller:'CosmeticsController',
		templateUrl: 'views/edit_cosmetic.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});