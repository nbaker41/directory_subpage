(function () {

	let dir = angular.module(
		"directory", []);

	dir.config(function ($stateProvider) {
		$stateProvider.state(
			'directory', {
				url: '/directory',
				templateUrl: 'routes/directory/directory.html',
				controller: "dirCtrl",
				controllerAs: "dir"
			})
	});


	dir.controller(
		"dirCtrl",
		function ($scope, $http) {
			this.app = $scope.$parent.app;
			var dir = this;

			window.onscroll = function () {
				dir.onScroll()
			  };
  
			  var header = document.getElementById("myHeader");
			  var sticky = header.offsetTop;
  
			dir.onScroll = function () {
				  if (window.pageYOffset > sticky) {
					  header.classList.add("sticky");
				  } else {
					  header.classList.remove("sticky");
				  }
			  }

			
		});





})();