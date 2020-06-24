(function () {

    let floor = angular.module("floor", [

    ]);

    floor.component("floor", {
        controller: "floorCtrl",
        controllerAs: "floor",
        templateUrl: "components/floor/floor.html"
    });

    floor.controller(
        "floorCtrl",
        function ($scope, $timeout) {
            this.app = $scope.$parent.app;
            let floor = this;


            $("#Next").click(function(){
                $(".slider").append($(".slider svg:first-of-type"));
            });
            
            $("#Prev").click(function(){
                $(".slider").prepend($(".slider svg:last-of-type"));
            });


         
            




        });

})();