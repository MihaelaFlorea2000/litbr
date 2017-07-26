$(document).ready(function(){
  // jQuery(".button").fitText(1, { minFontSize: '10px', maxFontSize: '17px' });
  jQuery(".subtitle").fitText(1, { minFontSize: '70px', maxFontSize: '110px' });
  jQuery(".sub1").fitText(1, { minFontSize: '70px', maxFontSize: '110px' });
  jQuery(".title").fitText(1, { minFontSize: '5px', maxFontSize: '20px' });



  $('.hero .fly').each(function(i){
    setTimeout(function(){
      $('.hero .fly').eq(i).addClass('is-showing');

    }, 150 * (i*2+1));

  });





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

// Parallax
// $(window).scroll(function(){
//   var wScroll = $(this).scrollTop();
//   console.log(wScroll);
//   $('.hero h1').css({
//     'transform' : 'translate(0px, '+ wScroll / 20 +'px)'
//   });
// });

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var opacity = 1-(wScroll/500);
  console.log(opacity);
  $('.hero').css({
    'transform' : 'translate(0px, '+ wScroll / 10 +'%)',
    'opacity' : opacity
  });
});
