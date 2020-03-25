(function () {

	let floor = angular.module(
		"floorplan", []);

	floor.config(function ($stateProvider) {
		$stateProvider.state(
			'floorplan', {
				url: '/floorplan',
				templateUrl: '/routes/floorplan/floorplan.html',
				controller: "floorCtrl",
				controllerAs: "floor"
			})
	});


	floor.controller(
		"floorCtrl",
		function ($scope, $http) {
			this.app = $scope.$parent.app;
			var floor = this;

			floor.levels = [{
				img: 'images/floorplan.svg',
				floor: '1st Floor'
			},{
				img: 'images/floorplan2.svg',
				floor: '2nd Floor'
			}]


			floor.rooms = [{
				title: 'Laboratory',
				department: 'department',
				person:'person',
				item:'item'
			},{
				title: 'Office #5',
				department: 'department',
				person:'person',
				item:'item'
			},{
				title: 'Office #3',
				department: 'department',
				person:'person',
				item:'item'
			}]
		
			
			
		
			

		});


})();