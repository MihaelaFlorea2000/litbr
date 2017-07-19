$(document).ready(function(){
  // jQuery(".button").fitText(1, { minFontSize: '10px', maxFontSize: '17px' });
  jQuery(".subtitle").fitText(1, { minFontSize: '70px', maxFontSize: '110px' });
  jQuery(".sub1").fitText(1, { minFontSize: '70px', maxFontSize: '110px' });
  jQuery(".title").fitText(1, { minFontSize: '5px', maxFontSize: '20px' });


  $(".hamburger").click(function(){
    window.setTimeout(function(){
      if($(".hamburger").not("collapsed")){
        $(".sub1").css("margin-top", "20px");
      };
    }, 0.5);
    window.setTimeout(function(){
      if($(".hamburger").hasClass("collapsed")){
        $(".sub1").css("margin-top", "100px");
      };
    }, 0.5);

  });


  // // Select all links with hashes
  // $('a[href*="#"]')
  //   // Remove links that don't actually link to anything
  //   .not('[href="#"]')
  //   .not('[href="#0"]')
  //   .click(function(event) {
  //     // On-page links
  //     if (
  //       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
  //       &&
  //       location.hostname == this.hostname
  //     ) {
  //       // Figure out element to scroll to
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //       // Does a scroll target exist?
  //       if (target.length) {
  //         // Only prevent default if animation is actually gonna happen
  //         event.preventDefault();
  //         $('html, body').animate({
  //           scrollTop: target.offset().top
  //         }, 1000, function() {
  //           // Callback after animation
  //           // Must change focus!
  //           var $target = $(target);
  //           $target.focus();
  //           if ($target.is(":focus")) { // Checking if the target was focused
  //             return false;
  //           } else {
  //             $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
  //             $target.focus(); // Set focus again
  //           };
  //         });
  //       }
  //     }
  //   });


  	$('a[href^="#"]').on('click',function (e) {
  	    e.preventDefault();

  	    var target = this.hash;
  	    var $target = $(target);

  	    $('html, body').stop().animate({
  	        'scrollTop': $target.offset().top
  	    }, 900, 'swing', function () {
  	        window.location.hash = target;
  	    });
  	});
});
