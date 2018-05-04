var myApp = angular.module('myApp');

myApp.controller('CosmeticsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('CosmeticsController loaded...');

	$scope.getCosmetics = function(){
		$http.get('/api/cosmetics').success(function(response){
			$scope.cosmetics = response;
		});
	}

	$scope.getCosmetic = function(){
		var id = $routeParams.id;
		$http.get('/api/cosmetics/'+id).success(function(response){
			$scope.cosmetic = response;
		});
	}

	$scope.addCosmetic = function(){
		console.log($scope.cosmetic);
		$http.post('/api/cosmetics/', $scope.cosmetic).success(function(response){
			window.location.href='#/cosmetics';
		});
	}

	$scope.updateCosmetic = function(){
		var id = $routeParams.id;
		$http.put('/api/cosmetics/'+id, $scope.cosmetic).success(function(response){
			window.location.href='#/cosmetics';
		});
	}

	$scope.removeCosmetic = function(id){
		$http.delete('/api/cosmetics/'+id).success(function(response){
			window.location.href='#/cosmetics';
		});
	}
}]);