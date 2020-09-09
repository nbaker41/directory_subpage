(function(){

    let room = angular.module("roomInfo", [
      
    ]);

   room.directive("roomInfo", function () {
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


    

            
           

   
            





            




        

    });

})();