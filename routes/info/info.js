(function () {

	let info = angular.module(
		"info", []);

	info.config(function ($stateProvider) {
		$stateProvider.state(
			'info', {
				url: '/profile/:id',
				templateUrl: '/routes/info/info.html',
				controller: "infoCtrl",
				controllerAs: "info"
			})
	});


	info.controller(
		"infoCtrl",
		function ($scope, $http, $stateParams) {
			this.app = $scope.$parent.app;
			var info = this;

			
			// $http({
			// 	url: "",
			// 	method: "get",
			// 	params: { id: $stateParams.id }
			// }).then(function (response) {
			// 	this.faculty = response.data;
			// })

			info.profiles = [{
				id : 1001,
				name : "Felicia Williams",
				occupation : "Communications Manager",
				email : "felicia.williams@gatech.edu",
				department : "Admissions",
				room : 106,
				floor : 1,
				pic : "../../assets/visuals/images/FeliciaWilliams_prof copy.jpg",
				bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus. Enim eu turpis egestas pretium aenean pharetra magna ac. Massa enim nec dui nunc mattis. Eget magna fermentum iaculis eu non. Mauris pharetra et ultrices neque ornare aenean. Etiam sit amet nisl purus in mollis. Odio euismod lacinia at quis risus sed vulputate odio ut. Ac tortor dignissim convallis aenean et. Praesent elementum facilisis leo vel fringilla est. Sem integer vitae justo eget magna fermentum. Sit amet consectetur adipiscing elit pellentesque habitant morbi."
			// },
			// {
			// 	id : 1002,
			// 	name : "Philip Banks",
			// 	occupation : "Professor",
			// 	email : "pbanks24@gatech.edu",
			// 	department : "Mechanical Engineer",
			// 	room : 204,
			// 	floor : 2,
			// 	pic : "{{app.images + 'PhilipBanks.jpg}}",
			// 	bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat commodo sed egestas egestas fringilla phasellus. Enim eu turpis egestas pretium aenean pharetra magna ac. Massa enim nec dui nunc mattis. Eget magna fermentum iaculis eu non. Mauris pharetra et ultrices neque ornare aenean. Etiam sit amet nisl purus in mollis. Odio euismod lacinia at quis risus sed vulputate odio ut. Ac tortor dignissim convallis aenean et. Praesent elementum facilisis leo vel fringilla est. Sem integer vitae justo eget magna fermentum. Sit amet consectetur adipiscing elit pellentesque habitant morbi."
			}]
			
			
			
		});


})();