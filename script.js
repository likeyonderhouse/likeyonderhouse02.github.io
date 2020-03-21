$(function(){

  // ========== header ==========

  $('.nav-button').on('click', function(){
    $(this).toggleClass('active');
    return false;
  });

  $('#menu li a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({'scrollTop': position}, 'slow');
  });

  $('.overlay-menu li a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({'scrollTop': position - 70}, 'slow');
    $('.overlay').removeClass('add-active');
  });

  $('.nav-button').click(function(){
    if( $('.overlay').hasClass('add-active') ) {
      $('.overlay').removeClass('add-active');
    } else {
      $('.overlay').addClass('add-active');
    }
  });

  // ========== faq ==========

  $('.accordion-opened').hide();

  $('.faq').click(function(){
    if( $('.accordion-opened').hasClass('open') ) {
      $(this).find('.accordion-opened').removeClass('open').slideUp();
    } else {
      $(this).find('.accordion-opened').addClass('open').slideDown();
    }
  });


  // ========== footer ==========

  $('#scroll-top').hide();

  $(window).scroll(function(){
    var topBtn = $(this).scrollTop();
    if(topBtn >= 200) {
      $('#scroll-top').fadeIn();
    } else {
      $('#scroll-top').fadeOut();
    }
  });

  $('#scroll-top').click(function(){
    $('html, body').animate({'scrollTop': 0}, 'slow');
    return false;
  });

});
