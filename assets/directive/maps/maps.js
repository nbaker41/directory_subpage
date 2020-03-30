(function () {

    let map = angular.module('map', []);

    map.controller('mapCtrl', [$scope, function() {
        this.app = $scope.$parent.app;
        var map = this;

    }])

    map.directive('myMap')
})