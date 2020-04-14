(function () {

	let info = angular.module(
		"info", []);

	info.config(function ($stateProvider) {
		$stateProvider.state(
			'info', {
				url: '/info',
				templateUrl: '/routes/info/info.html',
				controller: "infoCtrl",
				controllerAs: "info"
			})
	});


	info.controller(
		"infoCtrl",
		function ($scope, $http) {
			this.app = $scope.$parent.app;
			var info = this;

		
			// info.goBack() = function() {
			// 	window.history.back();
			// }
			// info.currentIndex = 0;

			// info.setCurrentSlideIndex = function (index) {
			// 	info.currentIndex = index;
			// }
			// info.isCurrentSlideIndex = function (index) {
			// 	return info.currentIndex === index;
			// }
				
			
			

		});


})();