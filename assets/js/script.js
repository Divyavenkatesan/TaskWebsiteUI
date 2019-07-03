$(document).ready(function() {
 
    $("#owlcarousel").owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        nav: false,
        dots: true,
        autoPlay: 3000, 
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5,
                loop:true,
                dots: false
            }
        }
   
    });
   
  });

  $(document).ready(function() {
 
    $("#owlcarousel1").owlCarousel({
        autoplay: true,
        center: true,
        loop: true,
        nav: false,
        dots: true,
        autoPlay: 3000, 
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:3,
                loop:true,
                dots: false
            }
        }
   
    });
   
  });