(function () {

	let home = angular.module(
		"home", []);

	home.config(function ($stateProvider) {
		$stateProvider.state(
			'home', {
				url: '/home',
				templateUrl: 'routes/home/home.html',
				controller: "homeCtrl",
				controllerAs: "home"
			})

			// .state('campus', {
			// 	url: '/campus',
			// 	templateUrl: 'routes/campus/campus.html',
			// 	controller: 'campCtrl',
			// 	controllerAs: 'camp'
			// })
	});


	home.controller(
		"homeCtrl",
		function ($scope, $http, $stateParams) {
			this.app = $scope.$parent.app;
			var home = this;

			

			
			
		});


})();