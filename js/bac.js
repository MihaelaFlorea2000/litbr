
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


  var shell_closed = $('.ship').width();
  var shell_top;
  var shell_left;
  
// Image Swap Shell
  $('.ship').mouseover(function(){
    $(this).attr('src', 'img/shell_open.png');
    if(window.matchMedia('(max-width: 890px) and (min-width: 820px)').matches) {
      shell_left = 1.1;
      shell_top = -7.8;
    } else if (window.matchMedia('(max-width: 820px) and (min-width: 767px)').matches) {
      shell_left = 1;
      shell_top = -7.2;
    } else if (window.matchMedia('(max-width: 767px) and (min-width: 670px)').matches){
      shell_left = 1.2;
      shell_top = -7.3;
    } else if (window.matchMedia('(max-width: 670px) and (min-width: 600px)').matches) {
      shell_left = 1.4;
      shell_top = -7.3;
    } else if (window.matchMedia('(max-width: 600px) and (min-width: 520px)').matches) {
      shell_left = 1.6;
      shell_top = -7.3;
    } else if (window.matchMedia('(max-width: 520px) and (min-width: 440px)').matches) {
      shell_left = 1.8;
      shell_top = -7.3;
    } else if (window.matchMedia('(max-width: 440px)').matches) {
      shell_left = 2.1;
      shell_top = -7.3;
    } else {
      shell_left = 1;
      shell_top = -8.5;
    }
    console.log(shell_closed + 20)
    $(this).css({
      'width': shell_closed + 20 + 'px',
      'position': 'relative',
      'left': shell_left + 'vw'
    });
    $(this).parent().css({
      'position':'relative',
      'top': shell_top + 'vh',
    });
  });
  $('.ship').mouseout(function(){
    console.log(shell_closed)
    $(this).attr('src', 'img/shell_closed.png');
    $(this).css({
      'width': shell_closed + 'px',
      'position':'relative',
      'left':'0vw'
    });
    $(this).parent().css({
      'position':'relative',
      'top':'0vh',
    });
  });


// Scrolling Dependant
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    var opacity = 1-(wScroll/500);
    console.log(wScroll);
  });
});
