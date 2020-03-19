// (function () {
// let slider = angular.module('slider', [
//     'ngAnimate'


// ]);

// slider.controller('sliderCtrl', function ($scope, $http)     {
//     this.app = $scope.$parent.app;
//     let slider = this;
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



//     slider.directive('slider', function() {

//         return {
//             restrict: 'AE',
//             replace: true,
//             scope: {
//               images: '='
//             },
//             link: function(scope, elem, attrs,$http) {
         
//                 slider.currentIndex = 0; // Initially the index is at the first image

//                 slider.down = function() {
//                 slider.currentIndex < slider.images.length - 1 ? slider.currentIndex++ : slider.currentIndex = 0;
//                 };

//                 slider.up = function() {
//                 slider.currentIndex > 0 ? slider.currentIndex-- : slider.currentIndex = slider.images.length - 1;
//                 };

//                 slider.$watch('currentIndex', function() {
//                     slider.images.forEach(function(image) {
//                     image.visible = false; // make every image invisible
//                     });
                
//                     slider.images[slider.currentIndex].visible = true; // make the current image visible
//                 });
//             },

//         templateUrl: 'directive/slider/slider.html'
//         };
//     });

// })