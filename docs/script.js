$(function(){
  $('#open_menu').click(function() {
    $('.phone_menu').toggle(500);
    $('.phone_menu_open').css('display','none');
  })
  $('#close_menu').click(function() {
    $('.phone_menu').toggle(500);
    $('.phone_menu_open').css('display','inline');
  })
});
