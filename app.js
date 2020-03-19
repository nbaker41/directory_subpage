(function () {

	let app = angular.module("app", [
		// AJS modules
		"ui.router",
		//routes
		"info",
		"floorplan",
		"levels",
		//directive
		// "slider",
		// "section"
		"random"

	]);

	app.config(function ($locationProvider, $urlRouterProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise("/");

	});

	app.controller(
		"appCtrl",
		function ($scope, $transitions) {
			this.example = "Hello from AJS";
			let app = this;

			app.images = "../images/";
			app.icons = "../icons/";
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