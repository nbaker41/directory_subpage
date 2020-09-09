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
        
			// var rect = document.getElementsByTagName("rect");
            // for ( i = 0; i < rect.length; i++ ) {
            //    rect[i].setAttribute("id", app[i].id);
            // } 

            
				// document.addEventListener("click", function(event){
				// // First, check to see if it was an anchor that was clicked
				// // in the document
				// if(event.target.nodeName === "A"){
				// 	// If so, add a class to the target 
				// 	// Get the href attribute and strip off the "#", then find that element and toggle the class
				// document.getElementById(event.target.getAttribute("href").replace("#","")).classList.toggle("active");
				// }
				// });
            
           
              

            

            


			

			
        });





})();