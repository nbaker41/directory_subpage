(function () {

	let lev = angular.module(
		"levels", []);

	lev.config(function ($stateProvider) {
		$stateProvider.state(
			'levels', {
				url: '/levels',
				templateUrl: 'routes/levels/levels.html',
				controller: "levCtrl",
				controllerAs: "lev"
			})
	});


	lev.controller(
		"levCtrl",
		function ($scope, $http) {
			this.app = $scope.$parent.app;
            var lev = this;
        
			$("#Next").click(function(){
                $("#Slider").append($("#Slider svg:first-of-type"));
            });
            
            $("#Prev").click(function(){
                $("#Slider").prepend($("#Slider svg:last-of-type"));
            });



			$(function() 
            {

                //overwrite jquery to match any case (by making uppercase)
                jQuery.expr[':'].contains = function(a, i, m) {
                return jQuery(a).text().toUpperCase()
                .indexOf(m[3].toUpperCase()) >= 0;
                };



            var deactivateAll=function()
                    {
                    $('.roomHighlight').removeClass('active');
                    $('.directory a').removeClass('active');
                    $('g').removeClass('hasActiveCircle');
                    }    

            var hideShowHeadings=function()
                    {
                    if($('.rooms .show').length >0)
                        {$('#roomsHeading').addClass('show');}
                    else{$('#roomsHeading').removeClass('show');}
                    if($('.people .show').length >0)
                        {$('#peopleHeading').addClass('show');}
                    else{$('#peopleHeading').removeClass('show');}


                    }    

            $('.directory .rooms a').on( "click", function(e) 
                    {
                    e.preventDefault();
                    var target = $(this).attr('href');
                    deactivateAll();

                    $('#'+target).addClass('active')
                    $(this).addClass('active')
                    $('.map').animate({scrollTop: $("#"+target).offset().top});

                    });

             $('.directory .people a').on( "click", function(e) 
                    {
                    e.preventDefault();
                    var target = $(this).attr('href');
                    deactivateAll();


                    $(this).addClass('active')
                    $('.map').animate({scrollTop: $("#"+target).offset().top}, 200);
                    $("#"+target).addClass('hasActiveCircle')

                    });
            $('#searchBox').on( "input", function(e) 
                    {
                    var searchMatch = $(this).val();
                    console.log( searchMatch);

                    if(searchMatch =="")
                        {
                        $("li").addClass("show");
                        }
                    else
                        {
                        $("li").removeClass("show");
                        $("li:contains("+searchMatch+")").addClass("show");
                        hideShowHeadings();
                        }
                    
                    });
			});
			

			
        });





})();