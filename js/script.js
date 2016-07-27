jQuery(function($) {
  $('#about-link').on('click', function () {
    $('.content-div').hide();
    $('.link-nav').hide();
    $('.content-about').show();
    $('.close-div').show();
  });
  $('#work-link').on('click', function () {
    $('.content-div').hide();
    $('.link-nav').hide();
    $('.content-work').show();
    $('.close-div').show();
  });

  $('.close-div').on('click', function () {
    $('.content-div').hide();
    $('.close-div').hide();
    $('.content-home').show();
    $('.link-nav').show();
  })
});
