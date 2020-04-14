(function () {

	let app = angular.module("app", [
		// AJS modules
		"ui.router",
		//routes
		"info",
		"floorplan",
		"levels",
		"directory",

		//components
		"sidebar",
		"map",
		//directive
		"search"
		
	

	]);

	app.config(function ($locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("/");

	});

	app.controller(
		"appCtrl",
		function ($scope, $transitions, $rootScope) {
			this.example = "Hello from AJS";
			let app = this;

			$rootScope.hello = function() {
				var x = document.getElementById('blah');
				if (x.style.display === 'none') {
					x.style.dispaly = 'block';
				} else { 
					x.style.display = 'none';
				}
			}

			

			app.images = "../assets/visuals/images/";
			app.icons = "../assets/visuals/icons/";
			app.maps = "../assets/visuals/svg/"


			app.levels = [{
				img: '../assets/visuals/svg/floorplan.svg',
				floor: '1st Floor'
			},{
				img: '../assets/visuals/svg/floorplan2.svg',
				floor: '2nd Floor'
			}]


			app.rooms = [{
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
		
			
			 
			

			// app.directive('bdInfo', function() {
			// 	return {
			// 		restrict: "E",
			// 		template: ""
			// 	}
			// })
			// transitions
			$transitions.onSuccess({}, function ($transition) {
				app.route = {};
				app.route.from = $transition.$from().name;
				app.route.to = $transition.$to().name;
				app.route.params = $transition.params().name;

				app.pageClass = app.route.to;
			});

		});

		

})();