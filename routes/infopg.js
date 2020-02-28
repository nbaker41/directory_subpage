(function () {

	let info = angular.module(
		"infopg", []);

	info.config(function ($stateProvider) {
		$stateProvider.state(
			'infopg', {
				url: '/infopg',
				templateUrl: '/routes/infopg.html',
				controller: "infopgCtrl",
				controllerAs: "info"
			})
	});


	info.controller(
		"infopgCtrl",
		function ($scope, $http) {
			this.infp = $scope.$parent.csv;
			var info = this;

			info.images=[{
				src:'/images/floorplan.jpg',
				title: 'pic1',
			},{
				src:'/images/floorplan_2.jpg',
				title: 'pic2',
			},{
				src:'/images/floorplan.jpg',
				title: 'pic3'
			}]
			
			info.currentIndex = 0;

			info.setCurrentSlideIndex = function (index) {
				info.currentIndex = index;
			}
			info.isCurrentSlideIndex = function (index) {
				return info.currentIndex === index;
			}
				
			
			

		});


})();