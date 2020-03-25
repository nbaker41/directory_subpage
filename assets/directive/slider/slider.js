(function () {
let slider = angular.module('slider', [
    'ngAnimate'


]);

slider.controller('sliderCtrl', function ($scope, $http)     {
    this.app = $scope.$parent.app;
    let slider = this;
//     slider.images = [{
//         src: '../images/floorplan.jpg',
//         title: 'plan1'
//     },{
//         src: '../images/floorplan.jpg',
//         title: 'plan2'
//     },{
//         src: '../images/floorplan.jpg',
//         title: 'plan3'
//     }]
// });



    slider.directive('map', function() {

        return {
            restrict: 'AE',
            replace: true,
            scope:{
        templateUrl: 'directive/slider/slider.html'
        // link: function($scope, element, attrs){}
    }
        };
    });

})
})