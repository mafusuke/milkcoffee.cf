$(function(){
  $('a[href^="#"]').click(function(){
    var time = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" ? 'html' : href);
    var distance = target.offset().top;
    $("html, body").animate({scrollTop:distance}, time, "swing");
    return false;
  });
  var appear = false;
  var pagetop = $('#page_top');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      if (appear == false) {
        appear = true;
        pagetop.stop().animate({
          'right': '0px'
        }, 300);
      }
    } else {
      if (appear) {
        appear = false;
        pagetop.stop().animate({
          'right': '-100px'
        }, 300);
      }
    }
  });
  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });

  $('#open_menu').click(function() {
    $('.phone_menu').toggle(500);
    $('.phone_menu_open').css('display','none');
  });
  $('#close_menu').click(function() {
    $('.phone_menu').toggle(500);
    $('.phone_menu_open').css('display','inline');
  });
  $('[id=open_command]').click(function() {
    $(this).children(".command_description").slideToggle();
  });
});
