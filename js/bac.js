
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

// Image Swap Shell
  $('.ship').mouseover(function(){
    // $(this).delay(200).fadeOut(100, function(){
    //   $(this).attr('src', 'img/shell_open.png').css({'width':'130px'}).fadeIn(100);
    // });
    $(this).attr('src', 'img/shell_open.png');
    $(this).css({
      'width':'130px',
      'position':'relative',
      'left':'10px'
    });
    $(this).parent().css({
      'position':'relative',
      'top':'-55px',
    });
  });
  $('.ship').mouseout(function(){
    $(this).attr('src', 'img/shell_closed.png');
    $(this).css({
      'width':'110px',
      'position':'relative',
      'left':'0px'
    });
    $(this).parent().css({
      'position':'relative',
      'top':'0px',
    });
  });


// Scrolling Dependant
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    var opacity = 1-(wScroll/500);
    console.log(wScroll);
  });
});
