$(document).ready(function () {
  "use strict";
  // Circle Styles
  $("[data-width]").each(function () {
    var width = $(this).attr("data-width");
    var height = $(this).attr("data-width");
    $(this).css({
      border: "1px solid #EFEFFD",
      left: "50%",
      position: "absolute",
      "border-radius": "100%",
      transform: "translateX(-50%) ",
      "z-index": "-11",
    });
    if (window.screen.width > 1400 && window.screen.width < 1650) {
      $(this).css({
        width: width * 0.85,
        height: height * 0.85,
        top: -(width * 0.9) / 2,
      });
    } else if (window.screen.width >= 1200 && window.screen.width <= 1400) {
      $(this).css({
        width: width * 0.75,
        height: height * 0.75,
        top: -(width * 0.75) / 2,
      });
    } else if (window.screen.width >= 975 && window.screen.width <= 1199) {
      $(this).css({
        width: width * 0.6,
        height: height * 0.6,
        top: -(width * 0.6) / 2,
      });
    } else if (window.screen.width >= 800 && window.screen.width <= 974) {
      $(this).css({
        width: width * 0.5,
        height: height * 0.5,
        top: -(width * 0.5) / 2,
      });
    } else if (window.screen.width < 800) {
      $(this).css({
        width: width * 0.4,
        height: height * 0.4,
        top: -(width * 0.4) / 2,
      });
    } else {
      $(this).css({
        width: width,
        height: height,
        top: -width / 2,
      });
    }
  });

  // Video Replace from data attribute
  $(".video-button").on("click", function () {
    var video =
      '<iframe allowfullscreen src="' +
      $(this).attr("data-video") +
      '"></iframe>';
    $(this).replaceWith(video);
  });

  //  AOS Initialize
  AOS.init();

  $(window).on("scroll", function () {
    var windscroll = $(window).scrollTop();
    if (windscroll >= 100) {
      $("#navigationBar").addClass("sticky-nav");
    } else {
      $("#navigationBar").removeClass("sticky-nav");
    }
  });

  // Background Shape Switches
  TweenMax.fromTo(
    ".switch",
    2,
    { opacity: 1 },
    { opacity: 0.3, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-two",
    2,
    { y: 0 },
    { y: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );
  TweenMax.fromTo(
    ".switch-three",
    2,
    { x: 0 },
    { x: 10, repeat: -1, yoyo: true, ease: Power2.easeInOut }
  );

  //parallax js for Hero
  if (document.getElementById("get-start")) {
    var scene2 = document.getElementById("get-start");
    var parallaxInstance = new Parallax(scene2);
    parallaxInstance.friction(0.2, 0.6);
    parallaxInstance.scalar(2, 2);
  }
  // parallax js for Hero

  // Review Slider
  $(".testimonial-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
          autoplay: false,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
          infinite: false,
        },
      },
    ],
  });
  $(".testimonial-sliderTwo").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    autoplay: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          centerMode: false,
          autoplay: false,
          infinite: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: false,
          infinite: false,
        },
      },
    ],
  });

  //Scroll It
  $(function(){
    $.scrollIt({
      topOffset: -100           // offste (in px) for fixed top navigation
    });
  });
});
