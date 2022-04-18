$(document).ready(function () {
  window.addEventListener("scroll", function () {
    var obj = $("header.header-menu").offset().top;
    console.log(obj);
    if (obj > 50) {
      $("header.header-menu").addClass("scroll");
    } else {
      $("header.header-menu").removeClass("scroll");
    }
  });
});

$(document).ready(function () {
  $(".carousel-banner").slick({
    infinite: true,
    dots:true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".carousel-img-product").slick({
    dots: true,
    infinite: true,
  });
  $(".carousel-Ad").slick({
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 1300,
  });
  $(".carousel-brand").slick({
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 9,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $(".carousel-product-hot").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

function increaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById("number").value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById("number").value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? (value = 1) : "";
  value--;
  document.getElementById("number").value = value;
}
