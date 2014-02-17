$(function(){
  var windowWidth = $(window).width();
  $("#main_container").css("width", (windowWidth * 5));

  $('#links').animate({
  opacity: '+=1'
  }, 1500);

  setTimeout(function(){
    $('#name').animate({
  marginLeft: '+=200px'
  }, 300)}, 1200);

  setTimeout(function(){
    $('#dev').animate({
  marginLeft: '+=200px'
  }, 300)}, 1500);

  setTimeout(function(){
    $('#home_link').animate({
    opacity: '+=1'
  }, 300);}, 300)

  setTimeout(function(){
    $('#about_link').animate({
    opacity: '+=1'
  }, 300)}, 600);

  setTimeout(function(){
  $('#projects_link').animate({
    opacity: '+=1'
  }, 300)}, 900);

  setTimeout(function(){
  $('#resume_link').animate({
    opacity: '+=1'
  }, 300)}, 1200);

  setTimeout(function(){
  $('#contact_link').animate({
    opacity: '+=1'
  }, 300)}, 1500);

  $("#home_link").on('click', function(){
    console.log("clicked on home");
    $('html, body').animate({
        scrollLeft: ($('#home').offset().left)
      }, 1000);
  });

  $("#about_link").on('click', function(){
    console.log("clicked on about");
    $('html, body').animate({
        scrollLeft: ($('#about').offset().left)
      }, 1000);
  });

  $("#projects_link").on('click', function(){
    console.log("clicked on projects");
    $('html, body').animate({
        scrollLeft: ($('#projects').offset().left)
      }, 1000);
  });

  $("#resume_link").on('click', function(){
    console.log("clicked on resume");
    $('html, body').animate({
        scrollLeft: ($('#resume').offset().left)
      }, 1000);
  });

  $("#contact_link").on('click', function(){
    console.log("clicked on contact");
    $('html, body').animate({
        scrollLeft: ($('#contact').offset().left)
      }, 1000);
  });
})
