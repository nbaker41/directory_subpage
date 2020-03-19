(function () {

	let rand = angular.module(
		"random", []);

	rand.config(function ($stateProvider) {
		$stateProvider.state(
			'random', {
				url: '/random',
				templateUrl: '/random/random.html',
				controller: "randCtrl",
				controllerAs: "rand"
			})
	});


	rand.controller(
		"randCtrl",
		function ($scope, $http) {
			this.app = $scope.$parent.app;
			var rand = this;

		
			
			
			
			

		});


})();