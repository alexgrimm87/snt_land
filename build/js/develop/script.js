$(document).ready(function(){
  $('.big-slider').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    speed: 1300
  });

  $('a[href^="#"]').click(function(){
  var el = $(this).attr('href');
  $("html").animate({
    scrollTop: $(el).offset().top}, 2000);
    return false;
  });

});

$(window).load(function(){

});

$(window).resize(function(){

});