(function(){

    let tbar = angular.module("tbar", [
        // 'ngMaterial',
        // 'ngMessages', 
        // 'material.svgAssetsCache'
    ]);

   tbar.component("tbar", {
       controller: "tbarCtrl",
       controllerAs: "tbar",
       templateUrl: "components/tools/tbar.html"
   });

    tbar.controller(
    "tbarCtrl", function($scope, $timeout){
    this.app = $scope.$parent.app;
    let tbar = this;
    
    tbar.goBack = function (){
        window.history.back();
      }

    

    });

    tbar.directive('previous', function() {
        return{
            restrict: 'E',
            template: '<button class="tool-items" ng-click="tbar.goBack()">&#10094;</button>',
            scope: {
                back:'@back',
                forward:'@forward',
            }
        }
    })

})();