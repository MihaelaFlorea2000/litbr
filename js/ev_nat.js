
// On Document Load

$(document).ready(function(){

  $('.cont .fly2').each(function(i){
    setTimeout(function(){
      $('.cont .fly2').eq(i).addClass('is-showing');
    }, 150 * (i*3+1));
  });
  setTimeout(function(){
    $('.cont .fly').each(function(i){
      setTimeout(function(){
        $('.cont .fly').eq(i).addClass('is-showing');
      }, 150 * (i*3+1));
    });
  }, 1000);




// Scrolling Dependant
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    var opacity = 1-(wScroll/500);
    console.log(wScroll);
  });
});
