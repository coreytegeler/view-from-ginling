$(function() {
  var $fixedNav, $topNav;
  window.iframes = [];
  $topNav = $('nav.top');
  $fixedNav = $('nav.fixed');
  $('.blocks iframe:not(.adjusted)').each(function(i, iframe) {
    var $iframe, $placeholder;
    $iframe = $(iframe).addClass('full');
    $placeholder = $('<div></div>').addClass('placeholder').css({
      height: $iframe.innerHeight()
    });
    $iframe.after($placeholder);
    return window.iframes[i] = $iframe;
  });
  return $(window).on('scroll', function(e) {
    var scrollTop, topNavBottom, topNavHeight, topNavTop;
    topNavHeight = $topNav.innerHeight();
    topNavTop = $topNav.offset().top;
    topNavBottom = topNavTop + topNavHeight;
    scrollTop = $(window).scrollTop();
    if (scrollTop >= topNavBottom) {
      return $fixedNav.addClass('show');
    } else {
      return $fixedNav.removeClass('show');
    }
  });
});
