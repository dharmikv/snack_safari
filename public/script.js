const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
// =========================================== HERO SECTION SLIDER ===========================================

var header_swiper = new Swiper(".header_swiper", {
    effect: "fade",
    navigation: {
    nextEl: ".swiper-navigation_header .swiper-button-next",
    prevEl: ".swiper-navigation_header .swiper-button-prev",
    },
});

// =========================================== PRODUCT SECTION SLIDER ===========================================

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
  
var subscription_slider = new Swiper(".subscription_slider",{
  loop:true,
  slidesPerView: 1.26,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-navigation_subscription .swiper-button-nex",
    prevEl: ".swiper-navigation_subscription .swiper-button-pre",
  },
  breakpoints: {
    1440:{
      slidesPerView:1.26,
    },
    1024: {
      slidesPerView: 1.26,
    },
    768:{
      slidesPerView:1,
    },
    640:{
      slidesPerView:1,
    },
    425:{
      slidesPerView:1,
    },
    375:{
      slidesPerView:1,
    },
  }
})


// =========================================== HEADER STICKY ANIMATION ===========================================
  
jQuery(document).ready(function ($) { 
    if ($(window).scrollTop() >= 70) {
        $('.header').addClass('is-sticky');
        $('.inner-header').addClass('hidden');
    }
    $(window).scroll(function () { 
        if ($(window).scrollTop() >= 70) {
            $('.header').addClass('is-sticky');
            $('.inner-header').addClass('hidden');
        } else {
            $('.header').removeClass('is-sticky');
            $('.inner-header').removeClass('hidden');
        }
    });
});

// =========================================== ACCORDION JAVASCRIPT  ===========================================

$(document).ready(function() {

  $('#accordion1').next('.accordion-content').slideDown();
  $('#accordion1').removeClass('rounded-b-[14px]');
  $('#accordion1').find('svg').css({ transform: 'rotate(180deg)' });

  $('.accordion-header').on('click', function() {
    var currentContent = $(this).next('.accordion-content');
    var currentArrow = $(this).find('svg');
    var currentHeader = $(this);

    $('.accordion-content').not(currentContent).slideUp(function() {
      $(this).prev('.accordion-header').addClass('rounded-b-[14px]');
    });
    $('.accordion-header').not(this).find('svg').css({ transform: 'rotate(0deg)' });

    if (currentContent.is(':visible')) {
      currentContent.slideUp(function() {
        currentHeader.addClass('rounded-b-[14px]');
      });
      currentArrow.css({ transform: 'rotate(0deg)' });
    } else {
      currentContent.slideDown();
      currentHeader.removeClass('rounded-b-[14px]');
      currentArrow.css({ transform: 'rotate(180deg)' });
    }
  });
});


// =========================================== GSAP ANIMATION ===========================================


// ---------------------------------------- 1) HERO SECTION IMAGE MOVING ANIMTION ----------------------------------------

gsap.from(".img-hero img", {
    rotate: 4,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut" 
});


// ---------------------------------------- 2) PRODUCT SECTION IMAGE HOVER EFFECT  ----------------------------------------

const productContainers = document.querySelectorAll('.product_img');

productContainers.forEach((container) => {
    const img = container.querySelector('.product_img img'); 
    container.addEventListener('mouseenter', () => {
        gsap.to(img, {
            rotation: -15,
            scale:1.035,
            duration: 0.5,
            ease: "power2.inOut"
        });
    });

    container.addEventListener('mouseleave', () => {
        gsap.to(img, {
            rotation: 0,
            scale:1,
            duration: 0.5,
            ease: "power2.inOut"
        });
    });
});

// ---------------------------------------- 3) SIDEBAR ANIMATION  ----------------------------------------

let close_btn = document.querySelector(".close_btn")
let sidebar = document.querySelector(".sidebar")
let sidebarLinks = document.querySelectorAll(".sidebar ul li a")
let hamburger_menu = document.querySelector(".hamburger_menu")


let sidebar_timeline = gsap.timeline()

sidebar_timeline.to(sidebar, {
    right: 0,
    duration: 0.3,
});
sidebar_timeline.from(sidebarLinks,{

    opacity:0,
    duration:0.4,
    stagger:0.1
})
sidebar_timeline.pause()

hamburger_menu.addEventListener("click",function(){
    sidebar_timeline.play()
})
close_btn.addEventListener("click",function(){
    sidebar_timeline.reverse()
})


gsap.utils.toArray(".fade-in").forEach((fadeElement) => {
  gsap.from(fadeElement, {
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: fadeElement,
      start: "top 80%", 
      end: "bottom top",
      toggleActions: "play none none reverse",
    },
  });
});
