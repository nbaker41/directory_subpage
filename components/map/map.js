(function(){

    let map = angular.module("map", [
       
    ]);

   map.component("map", {
       controller: "mapCtrl",
       controllerAs: "map",
       templateUrl: "components/map/map.html"
   });

    map.controller(
    "mapCtrl", function($scope, $timeout){
    this.app = $scope.$parent.app;
    let map = this;


    

    
    });

})();