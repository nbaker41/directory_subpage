(function(){

    let slide = angular.module("slideshow", [
      
    ]);

    slide.component("slideshow", {
        controller: "slideCtrl",
        controllerAs: "slide",
        templateUrl: "components/slideshow/slideshow.html"
    });

    slide.controller(
    "slideCtrl", function($scope, $timeout){
    this.app = $scope.$parent.app;
    let slide = this;


    

            
    var slideIndex = 1;
    slide.showSlides(slideIndex);
    
    slide.plusSlides = function (n) {
      slide.showSlides(slideIndex += n);
    }
    
    slide.currentSlide = function (n) {
      slide.showSlides(slideIndex = n);
    }
    
    slide.showSlides = function (n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }

   
            





            




        

    });

})();