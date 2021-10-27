$(function(){
  $('.hamburger').on('click',function(){
    hamburger();
  });
  $('.menu li a').on('click',function(){
    hamburger();
  })
  // タイトルrococoを表示
  $(window).on('load',function(){
    $('#mainvisual .title').addClass('visible');
    setTimeout(()=>{
      $('#mainvisual .title-visual').addClass('close');
    },3000);
  });

  // スムーススクロール
  $('a[href^="#"]').on('click',function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  function hamburger(){
    $('.hamburger span').toggleClass('open');

    if($('.hamburger span').hasClass('open')){
      $('#nav').addClass('open');
      $('#mask').addClass('open');
    }else{
      $('#nav').removeClass('open');
      $('#mask').removeClass('open');  
    }
  }
  // スクロールして表示領域に入ったらclass付与
  $(".js-fadeUp").on("inview", function () {
    $(this).addClass("is-inview");
  });
});
