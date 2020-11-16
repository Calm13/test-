$(document).ready(function () {
  $("a.scroll_a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate(
      {
        scrollTop: destination,
      },
      800
    );
    return false;
  });
  $(".quantity").each(function () {
    var $this = $(this);
    $({ Counter: 0 }).animate(
      { Counter: $this.text() },
      {
        duration: 10000,
        easing: "swing",
        step: function () {
          $this.text(Math.ceil(this.Counter));
        },
      }
    );
  });
  $(".slidder").slick({
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
