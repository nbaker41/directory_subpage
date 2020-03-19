(function () {

	let floor = angular.module(
		"floorplan", []);

	floor.config(function ($stateProvider) {
		$stateProvider.state(
			'floorplan', {
				url: '/floorplan',
				templateUrl: '/routes/floorplan/floorplan.html',
				controller: "floorCtrl",
				controllerAs: "floor"
			})
	});


	floor.controller(
		"floorCtrl",
		function ($scope, $http) {
			this.app = $scope.$parent.app;
			var floor = this;

			floor.levels = [{
				img: 'images/floorplan.svg',
				floor: '1st Floor'
			},{
				img: 'images/floorplan2.svg',
				floor: '2nd Floor'
			}]


			floor.rooms = [{
				title: 'Laboratory',
				department: 'department',
				person:'person',
				item:'item'
			},{
				title: 'Office #5',
				department: 'department',
				person:'person',
				item:'item'
			},{
				title: 'Office #3',
				department: 'department',
				person:'person',
				item:'item'
			}]
		
			// $(".room-info").toggle();

			// $(document).ready(function(){
			// 	$('.toggle').hide();
			// 	$('.show').click(function(){
			// 	 var t = $(this);
			// 	 // toggle hidden div
			// 	 t.next().next().toggle('slow', function(){
			// 	  // determine which image to use if hidden div is hidden after the toggling is done
			// 	  var imgsrc = ($(this).is(':hidden')) ? 'images/checkmark1.jpg' : 'images/checkmark2.jpg';
			// 	  // update image src
			// 	  t.attr('src', imgsrc );
			// 	 });
			// 	})
			//    })
			
			// 
			// floor.open = function () {	
			// 	var x = document.getElementById('room-info1');
			// 	if (x.style.display === 'none'){
			// 		x.style.display = 'block';
			// 	} else {
			// 		x.style.display = 'none';
			// 	}
			// }
			// floor.toggle = function () {
			// 	var x = document.getElementByClassName('room-info');
			// 	for ( var i = 0; i < x.length; i++) {
			// 		x[i].style.display = x[i].style.display == 'inline' ? 'none' : 'inline';
			// 	}

			// }
			
		
			

		});


})();