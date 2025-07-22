/***************************************************
==================== JS INDEX ======================
****************************************************

// Data Js
// Preloader Js
// Offcanvas Js
// Mobile Menu Js
// Hamburger Menu Js
// Search Bar Js
// Sticky js
// Fun Fact Js
// Video Js
// Grid Js
// Skillbar Js
// Nice Select Js
// Project Filter Js
// Rating Js
// Popup Js
// Hero Slider Js
// Difference Slider Js
// Brand Slider Js
// Project Slider Js
// Testimonial Slider Js
// Blog Slider Js
// Custom Cursor Js
// Gsap Js

****************************************************/

(function ($) {
   "use strict";

   // Data Js
   $("[data-bg-image]").each(function () {
      var $this = $(this),
         $image = $this.data("bg-image");
      $this.css("background-image", "url(" + $image + ")");
   });

   // Preloader Js
   function loading() {
      document.querySelectorAll(".bar").forEach(function (current) {
         let startWidth = 0;
         const endWidth = current.dataset.size;
         const interval = setInterval(frame, 20);
         function frame() {
            if (startWidth >= endWidth) {
               clearInterval(interval);
            } else {
               startWidth++;
               current.style.width = `${endWidth}%`;
               current.firstElementChild.innerText = `${startWidth}%`;
            }
         }
      });
   }
   setTimeout(loading, 1000);
   $(window).on("load", function () {
      $("#preloader").fadeOut(500);
   });
   if ($("#preloader").length > 0) {
      $(".tj-cancel-btn").each(function () {
         $(this).on("click", function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(500);
         });
      });
   }

   // Offcanvas Js
   $(".side-menu .canva_expander").on("click", function () {
      $(".offcanvas-area").addClass("opened");
   });
   $(".offcanvas-close a").on("click", function () {
      $(".offcanvas-area").removeClass("opened");
   });

   // Mobile Menu Js
   $(".main-mobile-menu").meanmenu({
      meanMenuContainer: ".mobile_menu",
      meanScreenWidth: "991",
      meanExpand: ['<i class="fa-light fa-angle-right"></i>'],
   });
   $(".menu-bar").on("click", function () {
      $(".menu-bar").addClass("menu-bar-toggeled");
   });

   // Hamburger Menu Js
   $(".mobile-bar").on("click", function () {
      $(".hamburger-area").addClass("opened");
      $(".body-overlay").addClass("opened");
   });
   $(".hamburger_close_btn").on("click", function () {
      $(".hamburger-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
      $(".mobile-bar").removeClass("menu-bar-toggeled");
   });
   $(".body-overlay").on("click", function () {
      $(".hamburger-area").removeClass("opened");
      $(".body-overlay").removeClass("opened");
      $(".offset_canvas").removeClass("show");
      $(".mobile-bar").removeClass("menu-bar-toggeled");
   });

   // Search Bar Js
   $(".header-search .search").on("click", function () {
      $(".search_popup").addClass("search-opened");
      $(".search-popup-overlay").addClass("search-popup-overlay-open");
   });
   $(".search_close_btn").on("click", function () {
      $(".search_popup").removeClass("search-opened");
      $(".search-popup-overlay").removeClass("search-popup-overlay-open");
   });
   $(".search-popup-overlay").on("click", function () {
      $(".search_popup").removeClass("search-opened");
      $(this).removeClass("search-popup-overlay-open");
   });

   // Header Middle Logo
   var minWidth = window.matchMedia("(min-width: 992px)");
   if ($(".move_logo_wrap").length > 0 && minWidth) {
      // Function to dynamically move .header-logo to the middle of top-level li elements
      function moveLogoToMiddle() {
         var container = document.querySelector(".move_logo_wrap");
         var mainMenu = container.querySelector(".mainmenu");
         var siteLogo = container.querySelector(".site-logo");
         var listItems = Array.from(mainMenu.querySelectorAll("li"));
         // Filter out child li elements
         var topLevelListItems = listItems.filter(function (item) {
            return item.parentElement === mainMenu.querySelector("ul");
         });
         var middleIndex = Math.floor(topLevelListItems.length / 2);
         if (topLevelListItems.length > 0) {
            // Calculate the middle index

            // Insert the siteLogo in the middle of top-level list items
            topLevelListItems[middleIndex].insertAdjacentElement("beforebegin", siteLogo);
         }
      }

      // windowOn.on("load resize", function () {
      if (minWidth) {
         // Call the function when the document is fully loaded
         window.addEventListener("load", moveLogoToMiddle);
      }
   }

   // Sticky js
   $(window).scroll(function () {
      var Width = $(document).width();
      if ($("body").scrollTop() > 250 || $("html").scrollTop() > 250) {
         $(".header-sticky").addClass("sticky");
      } else {
         $(".header-sticky").removeClass("sticky");
      }
   });

   // Fun Fact Js
   if ($(".odometer").length > 0) {
      $(".odometer").waypoint(
         function () {
            var odo = $(".odometer");
            odo.each(function () {
               var countNumber = $(this).attr("data-count");
               $(this).html(countNumber);
            });
         },
         {
            offset: "80%",
            triggerOnce: true,
         }
      );
   }

   // Video Js
   var popupvideos = $(".popup-videos-button");
   if (popupvideos.length) {
      $(".popup-videos-button").magnificPopup({
         disableOn: 10,
         type: "iframe",
         mainClass: "mfp-fade",
         removalDelay: 160,
         preloader: false,
         fixedContentPos: false,
      });
   }

   // Grid Js
   function masonryGridSetting() {
      if ($(".masonry-gallery").length) {
         var $grid = $(".masonry-gallery").masonry({
            itemSelector: ".grid-item",
            columnWidth: ".grid-item",
            percentPosition: true,
         });

         $grid.imagesLoaded().progress(function () {
            $grid.masonry("layout");
         });
      }
   }
   masonryGridSetting();

   // Skillbar Js
   if ($(".skills").length > 0) {
      $(document).ready(function () {
         startAnimation();
         function startAnimation() {
            jQuery(".skills").each(function () {
               jQuery(this)
                  .find(".skillbar")
                  .animate(
                     {
                        width: jQuery(this).attr("data-percent"),
                     },
                     4000
                  );
            });
         }
      });
   }

   // Nice Select Js
   if ($("select").length > 0) {
      $("select").niceSelect();
   }

   // Project Filter Js
   $("#project-grid").imagesLoaded(function () {
      $(".filter-menu").on("click", "button", function () {
         var filterValue = $(this).attr("data-filter");
         $grid.isotope({
            filter: filterValue,
         });
      });
      $(".filter-menu button").on("click", function (event) {
         $(this).siblings(".active").removeClass("active");
         $(this).addClass("active");
         event.preventDefault();
      });
      var $grid = $("#project-grid").isotope({
         itemSelector: ".project-single-item",
         percentPosition: true,
         masonry: {
            columnWidth: ".project-single-item",
         },
      });
   });

   // Rating Js
   if ($(".fill-ratings span").length > 0) {
      var star_rating_width = $(".fill-ratings span").width();
      $(".star-ratings").width(star_rating_width);
   }

   // Popup Js
   $(document).ready(function () {
      $(".popup-gallery").magnificPopup({
         delegate: "a",
         type: "image",
         mainClass: "mfp-fade",
         gallery: {
            enabled: true,
         },
      });
   });

   // Hero Slider Js
   if ($(".hero-slider").length > 0) {
      var hero = new Swiper(".hero-slider", {
         slidesPerView: 1,
         speed: 3000,
         loop: true,
         autoplay: true,
         navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
         },
      });
   }

   // Difference Slider Js
   if ($(".difference-slider").length > 0) {
      var service = new Swiper(".difference-slider", {
         slidesPerView: 1,
         loop: true,
         autoplay: {
            delay: 8500,
         },
         navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
         },
      });
   }

   // Brand Slider Js
   if ($(".tj-brand-slider").length > 0) {
      var brand = new Swiper(".tj-brand-slider", {
         slidesPerView: 4,
         spaceBetween: 40,
         loop: false,
         breakpoints: {
            320: {
               slidesPerView: 2,
            },
            576: {
               slidesPerView: 3,
               spaceBetween: 30,
            },
            640: {
               slidesPerView: 3,
            },
            768: {
               slidesPerView: 4,
               spaceBetween: 30,
            },
            992: {
               slidesPerView: 4,
            },
            1024: {
               slidesPerView: 4,
            },
         },
      });
   }

   // Brand Slider Js
   if ($(".tj-brand-slider2").length > 0) {
      var brand = new Swiper(".tj-brand-slider2", {
         slidesPerView: 4,
         loop: true,
         autoplay: true,
         breakpoints: {
            320: {
               slidesPerView: 2,
            },
            576: {
               slidesPerView: 3,
            },
            640: {
               slidesPerView: 3,
            },
            768: {
               slidesPerView: 4,
            },
            992: {
               slidesPerView: 4,
            },
            1024: {
               slidesPerView: 4,
            },
         },
      });
   }

   // Project Slider Js
   if ($(".tj-project-slider").length > 0) {
      var project = new Swiper(".tj-project-slider", {
         slidesPerView: 4,
         spaceBetween: 0,
         loop: true,
         navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
         },
         breakpoints: {
            320: {
               slidesPerView: 1,
            },
            576: {
               slidesPerView: 1,
            },
            640: {
               slidesPerView: 2,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               slidesPerView: 3,
            },
            992: {
               slidesPerView: 3,
            },
            1400: {
               slidesPerView: 4,
            },
         },
      });
   }

   // Testimonial Slider Js
   if ($(".testimonial-carousel").length > 0) {
      $(".testimonial-carousel").owlCarousel({
         center: true,
         items: 3,
         loop: true,
         margin: 50,
         dots: true,
         autoplay: true,
         responsive: {
            320: {
               items: 1,
            },
            576: {
               items: 1,
            },
            768: {
               items: 2,
            },
            1200: {
               items: 2,
            },
            1400: {
               items: 3,
            },
         },
      });
   }

   // Blog Slider Js
   if ($(".blog-standard-slider").length > 0) {
      var blog = new Swiper(".blog-standard-slider", {
         slidesPerView: 1,
         loop: true,
         autoplay: {
            delay: 8500,
         },
         navigation: {
            nextEl: ".slider-next",
            prevEl: ".slider-prev",
         },
      });
   }

   // Custom Cursor Js
   function itCursor() {
      var myCursor = jQuery(".mouseCursor");
      if (myCursor.length) {
         if ($("body")) {
            const e = document.querySelector(".cursor-inner"),
               t = document.querySelector(".cursor-outer");
            let n,
               i = 0,
               o = !1;
            (window.onmousemove = function (s) {
               o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                  (e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                  (n = s.clientY),
                  (i = s.clientX);
            }),
               $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
                  e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
               }),
               $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
                  ($(this).is("a", "button") && $(this).closest(".cursor-pointer").length) ||
                     (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"));
               }),
               (e.style.visibility = "visible"),
               (t.style.visibility = "visible");
         }
      }
   }
   itCursor();

   $(".slider-drag").on("mouseenter", function () {
      $(".mouseCursor").addClass("cursor-big");
   });
   $(".slider-drag").on("mouseleave", function () {
      $(".mouseCursor").removeClass("cursor-big");
   });

   // Gsap Js
   $(window).on("load", function () {
      var wow = new WOW({
         boxClass: "wow", // default
         animateClass: "animated", // default
         offset: 0, // default
         mobile: true, // default
         live: true, // default
      });
      wow.init();
   });
})(jQuery);
