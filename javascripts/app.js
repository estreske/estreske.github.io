$(function(){
  var windowWidth = $(window).width();
  $("#main_container").css("width", (windowWidth * 5));

  $(window).on("resize", function(){
    location.reload();
  })

  $('#links').animate({
  opacity: '+=1'
  }, 1500);

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
  $('#experience_link').animate({
    opacity: '+=1'
  }, 300)}, 1200);

  setTimeout(function(){
  $('#contact_link').animate({
    opacity: '+=1'
  }, 300)}, 1500);


  if (windowWidth < 1100) {

    $("#main_container").css("width", (windowWidth));

    $("#home_link").click(function() {
        $('html, body').animate({
            scrollTop: $("#home").position().top
        }, 1000);
    });

    $("#about_link").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").position().top
        }, 1000);
    });

    $("#projects_link").click(function() {
        $('html, body').animate({
            scrollTop: $("#projects").position().top
        }, 1000);
    });

    $("#experience_link").click(function() {
        $('html, body').animate({
            scrollTop: $("#experience").position().top
        }, 1000);
    });

    $("#contact_link").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").position().top
        }, 1000);
    });
  }

  else {

      setTimeout(function(){
      $('#main_copy').animate({
    marginLeft: '+=47%'
    }, 300)}, 1200);

    setTimeout(function(){
      $('#main_photo').animate({
    marginRight: '+=47%'
    }, 300)}, 1500);

    $("#home_link").on('click', function(){
    $('html, body').animate({
        scrollLeft: ($('#home').offset().left)
      }, 1000);
    });

    $("#about_link").on('click', function(){
      $('html, body').animate({
          scrollLeft: ($('#about').offset().left)
        }, 1000);
    });

    $("#projects_link").on('click', function(){
    $('html, body').animate({
        scrollLeft: ($('#projects').offset().left)
      }, 1000);
    });

    $("#experience_link").on('click', function(){
    $('html, body').animate({
        scrollLeft: ($('#experience').offset().left)
      }, 1000);
    });

    $("#contact_link").on('click', function(){
    $('html, body').animate({
        scrollLeft: ($('#contact').offset().left)
      }, 1000);
    });

  }
})
