(function () {

	let app = angular.module("app", [
		// AJS modules
		"ui.router",
		//routes
		"info",
		"form",
		"levels",
		"directory",

		//components
		"sidebar",
		"map",
		//directive
		"search",
		"roomInfo"
		
	

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