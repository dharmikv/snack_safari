// =========================================== HERO SECTION SLIDER ===========================================

var header_swiper = new Swiper(".header_swiper", {
    effect: "fade",
    navigation: {
    nextEl: ".swiper-navigation_header .swiper-button-next",
    prevEl: ".swiper-navigation_header .swiper-button-prev",
    },
});

var product_swiper = new Swiper(".product_swiper", {
    loop:true,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-navigation_product .swiper-button-next",
      prevEl: ".swiper-navigation_product .swiper-button-prev",
    },
    breakpoints: {
      1440:{
        slidesPerView:3,
      },
      1024: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
      425: {
        slidesPerView: 1,
      },
      375: {
        slidesPerView: 1,
      },
      320: {
        slidesPerView: 1,
      }
      
    }
  });
  
  
  
  

jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 70) {
            $('.header').addClass('is-sticky');
            $('.inner-header').addClass('hidden');
        } else {
            $('.header').removeClass('is-sticky');
            $('.inner-header').removeClass('hidden')
        }
    });
}); 

gsap.from(".img-hero img", {
    rotate: 3,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut" 
});

const productContainers = document.querySelectorAll('.product_img');

productContainers.forEach((container) => {
    const img = container.querySelector('.product_img img'); 
    container.addEventListener('mouseenter', () => {
        gsap.to(img, {
            rotation: -15,
            duration: 0.5,
            ease: "power2.inOut"
        });
    });

    container.addEventListener('mouseleave', () => {
        gsap.to(img, {
            rotation: 0,
            duration: 0.5,
            ease: "power2.inOut"
        });
    });
});