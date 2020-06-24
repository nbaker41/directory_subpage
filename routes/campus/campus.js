(function () {

	let camp = angular.module(
		"camp", []);

	camp.config(function ($stateProvider) {
		$stateProvider.state(
			'camp', {
				url: '/camp',
				templateUrl: 'routes/campus/campus.html',
				controller: "campCtrl",
				controllerAs: "camp"
			})
	});


	camp.controller(
		"campCtrl",
		function ($scope, $http) {
			this.app = $scope.$parent.app;
			var camp = this;

			
			
			
			
			
		});


})();