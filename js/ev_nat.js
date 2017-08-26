
// On Document Load

$(document).ready(function(){


// // Meniu Open
//   $(".hamburger").click(function(){
//     window.setTimeout(function(){
//       if($(".hamburger").not("collapsed")){
//         $(".teste").css("margin-top", "200px");
//       };
//     }, 0.5);
//     window.setTimeout(function(){
//       if($(".hamburger").hasClass("collapsed")){
//         $(".teste").css("margin-top", "20px");
//       };
//     }, 0.5);
//
//   });

// Scrolling Dependant
  $(window).scroll(function(){
    var wScroll = $(this).scrollTop();
    console.log(wScroll);



  });
