var slider = angular.module('slider',[]);

slider.directive('slider', function($timeout) {

    return {
        restrict:'AE',
        replace: true,
        scope: {
            images:'='
        },
        link: function(scope, elem, attrs) {},
        templateUrl:'/routes/infopg.html'
    };

});