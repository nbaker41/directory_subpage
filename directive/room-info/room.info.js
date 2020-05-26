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



    pan.faculty = [
               
        {
            id:01,
            name:{
                first: 'Felicia',
                middle: 'Ashley',
                last: 'Williams',
                full: function() {
                    return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                },
            },
            name_short:'',
            department: {
                name:"Admissions",
                team: null,
                role:"Admissions Counsellor",
            },
            bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
            sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
            address:{
                street:'1234 Main Street',
                city:'Atlanta',
                zip:'30024',
                building:null
            },
            contact:{
                phone:'012.345.6789',
                email:'fwilliams@example.com',
                other:null
            },
            office: {
                number:201,

            }
        },
        {
            id:02,
            name:{
                first: 'Philip',
                middle: 'Gerald',
                last: 'Banks',
                full: function() {
                    return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                },
            },
            name_short:'',
            department: {
                name:"Admissions",
                team: null,
                role:"Admissions Counsellor",
            },
            bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
            sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
            address:{
                street:'1234 Main Street',
                city:'Atlanta',
                zip:'30024',
                building:null
            },
            contact:{
                phone:'012.345.6789',
                email:'fwilliams@example.com',
                other:null
            },
            office: {
                number:201,
                
            }
        },
        {
            id:03,
            name:{
                first: 'Vincent',
                middle: 'Skye',
                last: 'Carter',
                full: function() {
                    return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                },
            },
            name_short:'',
            department: {
                name:"Admissions",
                team: null,
                role:"Admissions Counsellor",
            },
            bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
            sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
            address:{
                street:'1234 Main Street',
                city:'Atlanta',
                zip:'30024',
                building:null
            },
            contact:{
                phone:'012.345.6789',
                email:'fwilliams@example.com',
                other:null
            },
            office: {
                number:105,
                
            }
        },
        {
            id:04,
            name:{
                first: 'Kevin',
                middle: 'Lawrence',
                last: 'Durring',
                full: function() {
                    return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                },
            },
            name_short:'',
            department: {
                name:"Admissions",
                team: null,
                role:"Admissions Counsellor",
            },
            bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
            sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
            address:{
                street:'1234 Main Street',
                city:'Atlanta',
                zip:'30024',
                building:null
            },
            contact:{
                phone:'012.345.6789',
                email:'fwilliams@example.com',
                other:null
            },
            office: {
                number:101,
                
            }
        },
        {
            id:05,
            name:{
                first: 'Kristen',
                middle: 'Diane',
                last: 'McDowell',
                full: function() {
                    return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                },
            },
            name_short:'',
            department: {
                name:"Office of the Arts",
                team: null,
                role:"Counsellor",
            },
            bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
            sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
            address:{
                street:'1234 Main Street',
                city:'Atlanta',
                zip:'30024',
                building:null
            },
            contact:{
                phone:'012.345.6789',
                email:'fwilliams@example.com',
                other:null
            },
            office: {
                number:107,
                
            }
        },
        {
            id:06,
            name:{
                first: 'Andre',
                middle: 'X',
                last: 'Irvin',
                full: function() {
                    return this.first + " " + this.middle.charAt(0) + "." + " " + this.last;
                },
            },
            name_short:'',
            department: {
                name:"Admissions",
                team: null,
                role:"Admissions Counsellor",
            },
            bio:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Arcu cursus vitae congue mauris rhoncus aenean. Ullamcorper 
            sit amet risus nullam eget felis. Volutpat sed cras ornare arcu dui vivamus arcu felis.`,
            address:{
                street:'1234 Main Street',
                city:'Atlanta',
                zip:'30024',
                building:null
            },
            contact:{
                phone:'012.345.6789',
                email:'fwilliams@example.com',
                other:null
            },
            office: {
                number:203,
                
            }
    
        }
]











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