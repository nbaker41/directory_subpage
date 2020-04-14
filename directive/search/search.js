(function(){

    let search = angular.module("search", [
      
    ]);

   search.directive("search", function () {
      //  restrict: "AE",
      //  controller: "searchCtrl",
      //  controllerAs: "search",
      return {
       controller: "searchCtrl",
       controllerAs: "search",
       templateUrl: "directive/search/search.html"
      }
   });

    search.controller(
    "searchCtrl", function($scope, $timeout){
    this.app = $scope.$parent.app;
    let search = this;

    search.sortType = 'name'; //set the default sort type
		search.sortReverse = false; // set the default sort order
		search.searchFaculty = ''; //the the default sort filter

		//create the list of sushi rolls

		search.faculty = [
			{ name: 'Felicia Williams', department: 'Admissions', room: 201, url: '../routes/info/ino.html'},
			{ name: 'Phillip Banks', department:'Legal Affairs', room: 133},
			{ name: 'Vincent Carter', department:'Mechanical Engineering', room: 116},
			{ name: 'Kevin Durring', department:'Institutional Research & Planning', room: 108},
      { name: 'Kristen McDowell', department:'Office of the Arts', room: 210},
		];
	

    });

})();