(function(){

    let room = angular.module("roomInfo", [
      
    ]);

   room.directive("roomInfo", function () {
      //  restrict: "AE",
      //  controller: "searchCtrl",
      //  controllerAs: "search",
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


    

            
           

    $(function () {

        //overwrite jquery to match any case (by making uppercase)
        jQuery.expr[':'].contains = function (a, i, m) {
            return jQuery(a).text().toUpperCase()
                .indexOf(m[3].toUpperCase()) >= 0;
        };



        var deactivateAll = function () {
            $('.roomHighlight').removeClass('active');
            $('.directory a').removeClass('active');
            $('g').removeClass('hasActiveCircle');
        }

        var hideShowHeadings = function () {
            if ($('.rooms .show').length > 0) {
                $('#roomsHeading').addClass('show');
            } else {
                $('#roomsHeading').removeClass('show');
            }
            if ($('.people .show').length > 0) {
                $('#peopleHeading').addClass('show');
            } else {
                $('#peopleHeading').removeClass('show');
            }
        }

        $('.directory .rooms a').on("click", function (e) {
            e.preventDefault();
            var target = $(this).attr('href');
            deactivateAll();

            $('#' + target).addClass('active')
            $(this).addClass('active')
            $('.slider').animate({
                scrollTop: $("#" + target).offset().top
            });

        });

        $('.directory .people a').on("click", function (e) {
            e.preventDefault();
            var target = $(this).attr('href');
            deactivateAll();


            $(this).addClass('active')
            $('.slider').animate({
                scrollTop: $("#" + target).offset().top
            }, 200);
            $("#" + target).addClass('hasActiveCircle')

        });
        $('#searchBox').on("input", function (e) {
            var searchMatch = $(this).val();
            console.log(searchMatch);

            if (searchMatch == "") {
                $("li").addClass("show");
            } else {
                $("li").removeClass("show");
                $("li:contains(" + searchMatch + ")").addClass("show");
                hideShowHeadings();
            }

        });
    })
   

            





            




        

    });

})();