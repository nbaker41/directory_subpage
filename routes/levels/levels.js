(function () {

	let lev = angular.module(
		"levels", []);

	lev.config(function ($stateProvider) {
		$stateProvider.state(
			'levels', {
				url: '/levels',
				templateUrl: 'routes/levels/levels.html',
				controller: "levCtrl",
				controllerAs: "lev"
			})
	});


	lev.controller(
		"levCtrl",
		function ($scope, $http) {
			this.app = $scope.$parent.app;
            var lev = this;
        
			$("#Next").click(function(){
                $(".slider").append($(".slider svg:first-of-type"));
            });
            
            $("#Prev").click(function(){
                $(".slider").prepend($(".slider svg:last-of-type"));
            });

            // $(document).ready(function(){
            //     $("map").click(function(){
            //       $("li").toggle();
            //     });
            //   });

           

            
           
              

            

            


			

			
        });





})();