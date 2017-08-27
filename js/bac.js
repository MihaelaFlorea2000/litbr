
// On Document Load

$(document).ready(function(){
  $('.fly2').each(function(i){
    setTimeout(function(){
      $('.fly2').eq(i).addClass('is-showing');
    }, 150 * (i*4+1));
  });
  setTimeout(function(){
    $('.cont .fly').each(function(i){
      setTimeout(function(){
        $('.cont .fly').eq(i).addClass('is-showing');
      }, 150 * (i*1.5+1));
    });
  }, 400);

  $('.ship').hover(function(){
    $(this).attr('src', 'img/shell_open.png');
    $(this).css({
      'width':'110px'
    });
  });


// Scrolling Dependant
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    var opacity = 1-(wScroll/500);
    console.log(wScroll);
  });
});
