(function(){

    let sidebar = angular.module("sidebar", [
        // 'ngMaterial',
        // 'ngMessages', 
        // 'material.svgAssetsCache'
    ]);

   sidebar.component("sidebar", {
       controller: "sidebarCtrl",
       controllerAs: "sidebar",
       templateUrl: "components/sidebar/sidebar.html"
   });

    sidebar.controller(
    "sidebarCtrl", function($scope, $timeout){
    this.app = $scope.$parent.app;
    let sidebar = this;

    sidebar.openNav = function () {
      document.getElementById("mySidepanel").style.width = "250px";
    }
    
    sidebar.closeNav = function () {
      document.getElementById("mySidepanel").style.width = "0";
    }

    });

})();