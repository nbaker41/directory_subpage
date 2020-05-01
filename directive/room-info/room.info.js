(function(){

    let room = angular.module("roomInfo", [
      
    ]);

   room.directive("roomInfo", function () {
      //  restrict: "AE",
      //  controller: "searchCtrl",
      //  controllerAs: "search",
      return {
       controller: "roomCtrl",
       controllerAs: "room",
       templateUrl: "directive/room-info/room.info.html"
      }
   });

    room.controller(
    "roomCtrl", function($scope, $timeout){
    this.app = $scope.$parent.app;
    let room = this;



    room.rooms = [{
        id:1,
        department: 'department',
        person:'person',
        item:'item',
        href:101
    },{
        id:2,
        department: 'department',
        person:'person',
        item:'item',
        href:102
    },{
        id:3,
        department: 'department',
        person:'person',
        item:'item',
        href:103
    }]

    // search.sortType = 'name'; //set the default sort type
	// 	search.sortReverse = false; // set the default sort order
	// 	search.searchFaculty = ''; //the the default sort filter

	// 	//create the list

	// 	search.faculty = [
	// 		{ name: 'Felicia Williams', department: 'Admissions', room: 201, url: '../routes/info/ino.html'},
	// 		{ name: 'Phillip Banks', department:'Legal Affairs', room: 133},
	// 		{ name: 'Vincent Carter', department:'Mechanical Engineering', room: 116},
	// 		{ name: 'Kevin Durring', department:'Institutional Research & Planning', room: 108},
    //   { name: 'Kristen McDowell', department:'Office of the Arts', room: 210},
    // ];
    
    // $http.get("database/get_data.php")
	// 		.then(function (response)
	// 		{
	// 			info.direct = response.data.records;
	// 		})
    

    room.toggle_visibility = function (id) {
        var e = document.getElementById(id);
        if(e.style.display == 'block')
           e.style.display = 'none';
        else
           e.style.display = 'block';
     }
	

    });

})();