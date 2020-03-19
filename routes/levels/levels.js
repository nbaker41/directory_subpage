(function () {

	let lev = angular.module(
		"levels", []);

	lev.config(function ($stateProvider) {
		$stateProvider.state(
			'levels', {
				url: '/levels',
				templateUrl: '/routes/levels/levels.html',
				controller: "levCtrl",
				controllerAs: "lev"
			})
	});


	lev.controller(
		"levCtrl",
		function ($scope, $http) {
			this.app = $scope.$parent.app;
            var lev = this;
            
            lev.images = [{
				src: '../svg/floorplan.svg',
				title: '1st'
			},{
				src: '../svg/floorplan2.svg',
				title: '2nd'
			},{
				src: '../images/floorplan.jpg',
				title: '3rd'
            }]
            
            

			$("#Next").click(function(){
                $("#Slider").append($("#Slider img:first-of-type"));
            });
            
            $("#Prev").click(function(){
                $("#Slider").prepend($("#Slider img:last-of-type"));
            });

        });



})();