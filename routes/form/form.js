(function () {

	let form = angular.module(
		"form", []);

	form.config(function ($stateProvider) {
		$stateProvider.state(
			'form', {
				url: '/form',
				templateUrl: '/routes/form/form.html',
				controller: "formCtrl",
				controllerAs: "form"
			})
	});


	form.controller(
		"formCtrl",
		function ($scope, $http) {
			this.app = $scope.$parent.app;
			var form = this;

			// floor.levels = [{
			// 	img: 'images/floorplan.svg',
			// 	floor: '1st Floor'
			// },{
			// 	img: 'images/floorplan2.svg',
			// 	floor: '2nd Floor'
			// }]


			// floor.rooms = [{
			// 	title: 'Laboratory',
			// 	department: 'department',
			// 	person:'person',
			// 	item:'item'
			// },{
			// 	title: 'Office #5',
			// 	department: 'department',
			// 	person:'person',
			// 	item:'item'
			// },{
			// 	title: 'Office #3',
			// 	department: 'department',
			// 	person:'person',
			// 	item:'item'
			// }]
		
			
			
		
			

		});


})();