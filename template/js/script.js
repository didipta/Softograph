const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// scroll to top
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

//slick slider
$(".slider").slick({
  centerMode: true,
  centerPadding: "80px",
  infinite: true,
  slidesToShow: 3,
  slidesToShow: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  nextArrow: '<i class="fas fa-chevron-right right"></i>',
  prevArrow: '<i class="fas fa-chevron-left left"></i>',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerPadding: "60px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: "20px",
      },
    },
  ],
});
$(".slider-one").slick({
  centerMode: true,
  centerPadding: "80px",
  infinite: true,
  slidesToShow: 1,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  nextArrow: '<i class="fas fa-chevron-right right"></i>',
  prevArrow: '<i class="fas fa-chevron-left left"></i>',
});
