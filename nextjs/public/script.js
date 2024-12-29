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
  nextArrow: '<span class=" right">></i>',
  prevArrow: '<span class=" left"><</i>',
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
  nextArrow: '<span class=" right">></i>',
  prevArrow: '<span class=" left"><</i>',
});

$(document).ready(function () {
  const slider = $(".slider-vertical");

  // Initialize the Slick slider
  slider.slick({
    dots: false,
    arrows: false,
    infinite: false, // Disable infinite scrolling
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  });

  // Smooth scrolling for the slider
  slider.on("wheel", function (e) {
    e.preventDefault();

    const delta = e.originalEvent.deltaY;
    const currentSlide = slider.slick("slickCurrentSlide");
    const totalSlides = slider.slick("getSlick").slideCount;

    if (delta < 0) {
      // Scroll up
      if (currentSlide > 0) {
        slider.slick("slickPrev");
      } else {
        // Allow page scroll up when at the first slide
        smoothScroll($(window).scrollTop() - 150); // Adjust offset for smoother transition
      }
    } else {
      // Scroll down
      if (currentSlide < totalSlides - 1) {
        slider.slick("slickNext");
      } else {
        // Allow page scroll down when at the last slide
        smoothScroll($(window).scrollTop() + 150); // Adjust offset for smoother transition
      }
    }
  });

  // Smooth scroll function
  function smoothScroll(targetPosition) {
    $("html, body").stop().animate(
      { scrollTop: targetPosition },
      600, // Duration of scroll in milliseconds
      "swing" // Easing function for smoothness
    );
  }
});
