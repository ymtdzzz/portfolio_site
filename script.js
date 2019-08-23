$(function() {
    // Scrollify settings
    $.scrollify({
      section : ".scroll-section",
    });
    $('#menu-top').click(function(event) {
      event.preventDefault();
      $.scrollify.move("#1");
    });
    $('#menu-profile').click(function(event) {
      event.preventDefault();
      $.scrollify.move("#2");
    });
    $('#menu-web-design').click(function(event) {
      event.preventDefault();
      $.scrollify.move("#3");
    });
    $('#menu-web-development').click(function(event) {
      event.preventDefault();
      $.scrollify.move("#4");
    });
    $('#menu-illustration').click(function(event) {
      event.preventDefault();
      $.scrollify.move("#5");
    });
    $('#menu-contact').click(function(event) {
      event.preventDefault();
      $.scrollify.move("#6");
    });

    // initializing
    var $top = $('.top');
    var $profile = $('.profile');

    $('.top-container').height($top.height());
    $('.profile-side-container').height($profile.height());
    $('.profile-main-container').height($profile.height());
    
    // 点滅処理
    setInterval(function(){
        $('.whoami-line').fadeOut(300,function(){$(this).fadeIn(300)});
    },1000);
  });