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
		"floor",
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
			}, {
				img: '../assets/visuals/svg/floorplan2.svg',
				floor: '2nd Floor'
			}]




			$rootScope.data = [{
				felicia: [{
					id: 01,
					name: [{
						first: "Felicia",
						middle: "Angelica",
						last: "Williams",
						short: "assets/visuals/images/FeliciaWilliams_prof copy.jpg",
					}],
					contact: [{
						phone: "1234567890",
						email: "felicia.williams@example.com",
					}],
					location: [{
						address: "223 Main Street, Ga",
						department: "Admissions",
						building: "building name",
						floor: 1,
						room: 106,
					}],
					description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
					dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus. Enim eu turpis egestas pretium aenean 
					pharetra magna ac. Massa enim nec dui nunc mattis. Eget magna fermentum iaculis eu non. Mauris pharetra et ultrices 
					neque ornare aenean. Etiam sit amet nisl purus in mollis. Odio euismod lacinia at quis risus sed vulputate odio ut. 
					Ac tortor dignissim convallis aenean et. Praesent elementum facilisis leo vel fringilla est. Sem integer vitae justo 
					eget magna fermentum. Sit amet consectetur adipiscing elit pellentesque habitant morbi.`
					}],
					
				phil: [{
					id: 02,
					name: [{
						first: "Philip",
						middle: "Kevin",
						last: "Banks",
						short: "assets/visuals/images/PhilipBanks.jpg",
					}],
					contact: [{
						phone: "0987654321",
						email: "pbanks@example.com",
					}],
					location: [{
						address: "322 Buford Drive, Ga",
						department: "Mechnical Engineer",
						building: "building name",
						floor: 2,
						room: 201,
					}],
					description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
					dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus. Enim eu turpis egestas pretium aenean 
					pharetra magna ac. Massa enim nec dui nunc mattis. Eget magna fermentum iaculis eu non. Mauris pharetra et ultrices 
					neque ornare aenean. Etiam sit amet nisl purus in mollis. Odio euismod lacinia at quis risus sed vulputate odio ut. 
					Ac tortor dignissim convallis aenean et. Praesent elementum facilisis leo vel fringilla est. Sem integer vitae justo 
					eget magna fermentum. Sit amet consectetur adipiscing elit pellentesque habitant morbi.`
				}]
			}]


			// app.global.Data = {showData: true};

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