$(".top__slider").slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  fade: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        dots: false,
      },
    },
  ],
});

$(".menu__btn").click(function () {
  $(".menu__list").toggleClass("menu__list--active");
});
