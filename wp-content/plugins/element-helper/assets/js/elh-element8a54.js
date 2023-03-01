(function ($) {
	"use strict";

	/*----- ELEMENTOR LOAD FUNTION CALL ---*/
	$(window).on("elementor/frontend/init", function () {
		var heroSlider = function () {

			if ($('.main-slider-carousel').length) {
				$('.main-slider-carousel').owlCarousel({
					animateOut: 'fadeOut',
					animateIn: 'fadeIn',
					loop:true,
					margin:0,
					nav:true,
					//autoHeight: true,
					smartSpeed: 500,
					autoplay: 6000,
					navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						800:{
							items:1
						},
						1024:{
							items:1
						},
						1200:{
							items:1
						}
					}
				});
			}

		}; // end

		var brandSlider = function () {

			if ($('.sponsors-carousel').length) {
				$('.sponsors-carousel').owlCarousel({
					loop:true,
					margin:0,
					nav:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:2
						},
						600:{
							items:3
						},
						800:{
							items:4
						},
						1024:{
							items:5
						}
					}
				});
			}

		}; // end

		var testimonialSlider = function () {

			// Testimonial Carousel
			if ($('.testimonial-carousel').length) {
				$('.testimonial-carousel').owlCarousel({
					//animateOut: 'slideInDown',
					//animateIn: 'fadeInUp',
					loop:true,
					margin:0,
					nav:true,
					center:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="fa fa-angle-up"></span>', '<span class="fa fa-angle-down"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:1
						},
						600:{
							items:1
						},
						800:{
							items:2
						},
						1024:{
							items:3
						},
						1340:{
							items:3
						},
						1640:{
							items:3
						}
					}
				});
			}

		}; // end

		var fourColSlider = function () {

			// Four Item Carousel
			if ($('.four-item-carousel').length) {
				$('.four-item-carousel').owlCarousel({
					loop:true,
					margin:30,
					nav:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:1
						},
						600:{
							items:2
						},
						800:{
							items:4
						},
						1024:{
							items:4
						}
					}
				});
			}

			if ($(".four-item-carousel-two").length) {
				$(".four-item-carousel-two").owlCarousel({
					loop: true,
					margin: 0,
					nav: true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [
						'<span class="fa fa-angle-left"></span>',
						'<span class="fa fa-angle-right"></span>',
					],
					responsive: {
						0: {
							items: 1,
						},
						480: {
							items: 1,
						},
						600: {
							items: 2,
						},
						800: {
							items: 4,
						},
						1024: {
							items: 4,
						},
					},
				});
			}


		}; // end

		var movieSlider = function () {

			if ($('.three-item-carousel').length) {
				$('.three-item-carousel').owlCarousel({
					loop:true,
					margin:30,
					nav:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:1
						},
						600:{
							items:2
						},
						800:{
							items:3
						},
						1024:{
							items:3
						}
					}
				});
			}

		}; // end

		var teamSlider = function () {

			// Three Item Carousel
			if ($('.three-item-carousel').length) {
				$('.three-item-carousel').owlCarousel({
					loop:true,
					margin:30,
					nav:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:1
						},
						600:{
							items:2
						},
						800:{
							items:3
						},
						1024:{
							items:3
						}
					}
				});
			}

		}; // end
	
		var authoreSliderActive = function () {
			//Client Testimonial Carousel
			if ($('.client-testimonial-carousel').length && $('.client-thumbs-carousel').length) {

				var $sync3 = $(".client-testimonial-carousel"),
					$sync4 = $(".client-thumbs-carousel"),
					flag = false,
					duration = 500;

					$sync3
						.owlCarousel({
							loop:true,
							items: 1,
							margin: 0,
							nav: true,
							navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
							dots: true,
							autoplay: true,
							autoplayTimeout: 5000
						})
						.on('changed.owl.carousel', function (e) {
							if (!flag) {
								flag = false;
								$sync4.trigger('to.owl.carousel', [e.item.index, duration, true]);
								flag = false;
							}
						});

					$sync4
						.owlCarousel({
							loop:true,
							margin:20,
							items: 1,
							nav: false,
							navText: [ '<span class="icon flaticon-left-arrow-2"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
							dots: false,
							center: true,
							autoplay: true,
							autoplayTimeout: 5000,
							responsive: {
								0:{
									items:1,
									autoWidth: false
								},
								400:{
									items:1,
									autoWidth: false
								},
								600:{
									items:1,
									autoWidth: false
								},
								1000:{
									items:1,
									autoWidth: false
								},
								1200:{
									items:1,
									autoWidth: false
								}
							},
						})
						
				.on('click', '.owl-item', function () {
					$sync3.trigger('to.owl.carousel', [$(this).index(), duration, true]);
				})
				.on('changed.owl.carousel', function (e) {
					if (!flag) {
						flag = true;		
						$sync3.trigger('to.owl.carousel', [e.item.index, duration, true]);
						flag = false;
					}
				});
			}

		}; // end

		var galleryFilter = function () {

			//Gallery Filters
			if ($(".filter-list").length) {
				$(".filter-list").mixItUp({});
			}

		}; // end
		var sponcoreActiveh5 = function () {
		// Sponsors Carousel Two
			if ($('.sponsors-carousel-two').length) {
				$('.sponsors-carousel-two').owlCarousel({
					loop:true,
					margin:30,
					nav:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:2
						},
						600:{
							items:3
						},
						800:{
							items:4
						},
						1024:{
							items:5
						}
					}
				});    		
			}
		};
		var testimonialCallback = function () {
			// SIngle Item Carousel
			if ($('.single-item-carousel').length) {
				$('.single-item-carousel').owlCarousel({
					//animateOut: 'fadeOut',
					//animateIn: 'fadeIn',
					loop:true,
					margin:0,
					nav:true,
					//autoHeight: true,
					smartSpeed: 500,
					autoplay: 6000,
					navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						800:{
							items:1
						},
						1024:{
							items:1
						},
						1200:{
							items:1
						}
					}
				});
			}
		};

		var filterMoview = function () {
			//Gallery Filters
			if($('.filter-list').length){
				$('.filter-list').mixItUp({});
			}	
		};	

		//Movie Filter 4
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/moviefilter.default",
			function ($scope, $) {
				filterMoview();
			}
		);
		//Authore Slider Home 4
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/callback.default",
			function ($scope, $) {
				testimonialCallback();
			}
		);
		//Authore Slider Home 4
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/brand.default",
			function ($scope, $) {
				sponcoreActiveh5();
			}
		);

		//Authore Slider Home 4
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/slider.default",
			function ($scope, $) {
				authoreSliderActive();
			}
		);
		//heroslider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/elh_main_slider.default",
			function ($scope, $) {
				heroSlider();
			}
		);

		//fourColSlider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/elh_partner_slider.default",
			function ($scope, $) {
				brandSlider();
			}
		);

		//fourColSlider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/elh_testimonial_slider.default",
			function ($scope, $) {
				testimonialSlider();
			}
		);

		//fourColSlider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/elh_woo_product.default",
			function ($scope, $) {
				fourColSlider();
			}
		);

		//fourColSlider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/elh_service.default",
			function ($scope, $) {
				fourColSlider();
			}
		);

		//fourColSlider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/elh_movies.default",
			function ($scope, $) {
				movieSlider();
			}
		);

		//teamSlider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/elh_team_slider.default",
			function ($scope, $) {
				teamSlider();
			}
		);

		//teamSlider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/elh_gallery_filter.default",
			function ($scope, $) {
				teamSlider();
			}
		);

	});

	/*----- ELEMENTOR LOAD FUNTION CALL ---*/

	$(window).on("elementor/frontend/init", function () {
		var heroSlider = function () {

			if ($('.main-slider-carousel').length) {
				$('.main-slider-carousel').owlCarousel({
					animateOut: 'fadeOut',
					animateIn: 'fadeIn',
					loop:true,
					margin:0,
					nav:true,
					//autoHeight: true,
					smartSpeed: 500,
					autoplay: 6000,
					navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						600:{
							items:1
						},
						800:{
							items:1
						},
						1024:{
							items:1
						},
						1200:{
							items:1
						}
					}
				});
			}
		}; // end


		var brandSlider = function () {

			if ($('.sponsors-carousel').length) {
				$('.sponsors-carousel').owlCarousel({
					loop:true,
					margin:0,
					nav:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:2
						},
						600:{
							items:3
						},
						800:{
							items:4
						},
						1024:{
							items:5
						}
					}
				});
			}

		}; // end

		var testimonialSlider = function () {

			// Testimonial Carousel
			if ($('.testimonial-carousel').length) {
				$('.testimonial-carousel').owlCarousel({
					//animateOut: 'slideInDown',
					//animateIn: 'fadeInUp',
					loop:true,
					margin:0,
					nav:true,
					center:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="fa fa-angle-up"></span>', '<span class="fa fa-angle-down"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:1
						},
						600:{
							items:1
						},
						800:{
							items:2
						},
						1024:{
							items:3
						},
						1340:{
							items:3
						},
						1640:{
							items:3
						}
					}
				});
			}

		}; // end

		var fourColSlider = function () {

			// Four Item Carousel
			if ($('.four-item-carousel').length) {
				$('.four-item-carousel').owlCarousel({
					loop:true,
					margin:30,
					nav:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:1
						},
						600:{
							items:2
						},
						800:{
							items:4
						},
						1024:{
							items:4
						}
					}
				});
			}

			if ($(".four-item-carousel-two").length) {
				$(".four-item-carousel-two").owlCarousel({
					loop: true,
					margin: 0,
					nav: true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [
						'<span class="fa fa-angle-left"></span>',
						'<span class="fa fa-angle-right"></span>',
					],
					responsive: {
						0: {
							items: 1,
						},
						480: {
							items: 1,
						},
						600: {
							items: 2,
						},
						800: {
							items: 4,
						},
						1024: {
							items: 4,
						},
					},
				});
			}

		}; // end

		var movieSlider = function () {

			if ($('.three-item-carousel').length) {
				$('.three-item-carousel').owlCarousel({
					loop:true,
					margin:30,
					nav:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:1
						},
						600:{
							items:2
						},
						800:{
							items:3
						},
						1024:{
							items:3
						}
					}
				});
			}

		}; // end.

		var teamSlider = function () {

			// Three Item Carousel
			if ($('.three-item-carousel').length) {
				$('.three-item-carousel').owlCarousel({
					loop:true,
					margin:30,
					nav:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:1
						},
						600:{
							items:2
						},
						800:{
							items:3
						},
						1024:{
							items:3
						}
					}
				});
			}

		}; // end

		var sponsorsTwoActive = function () {
			if ($('.sponsors-carousel-two').length) {
				$('.sponsors-carousel-two').owlCarousel({
					loop:true,
					margin:30,
					nav:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="flaticon-left"></span>', '<span class="flaticon-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:2
						},
						600:{
							items:3
						},
						800:{
							items:4
						},
						1024:{
							items:5
						}
					}
				});    		
			}
		}; // end
		var testimonialThreeActive = function () {
			// Three Item Carousel
			if ($('.three-item-carousel').length) {
				$('.three-item-carousel').owlCarousel({
					loop:true,
					margin:30,
					nav:true,
					smartSpeed: 500,
					autoplay: 4000,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						480:{
							items:1
						},
						600:{
							items:2
						},
						800:{
							items:3
						},
						1024:{
							items:3
						}
					}
				});    		
			}
		};

		var galleryFilter = function () {

			//Gallery Filters
			if ($(".filter-list").length) {
				$(".filter-list").mixItUp({});
			}

		}; // end

		var videoTrailer = function () {
			//Tabs Box
			if($('.tabs-box').length){
				$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
					e.preventDefault();
					var target = $($(this).attr('data-tab'));
					
					if ($(target).is(':visible')){
						return false;
					}else{
						target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
						$(this).addClass('active-btn');
						target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
						target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
						$(target).fadeIn(300);
						$(target).addClass('active-tab');
					}
				});
			}

			//Hide Loading Box (Preloader)
			if($('.trailer-section .default-tab-box .tab-btns').length){
				$('.trailer-section .default-tab-box .tab-btns').mCustomScrollbar();
			}
		};
		var spotlightTabActive = function () {
			//Product Tabs
			if($('.spotlight-tab').length){
				$('.spotlight-tab .product-tab-btns .p-tab-btn').on('click', function(e) {
					e.preventDefault();
					var target = $($(this).attr('data-tab'));
					
					if ($(target).hasClass('actve-tab')){
						return false;
					}else{
						$('.spotlight-tab .product-tab-btns .p-tab-btn').removeClass('active-btn');
						$(this).addClass('active-btn');
						$('.spotlight-tab .p-tabs-content .p-tab').removeClass('active-tab');
						$(target).addClass('active-tab');
					}
				});
			}
		};
		var spotlightCarousleActive = function () {
			// Spotlight Carousel
			if ($('.spotlight-carousel').length) {
				$('.spotlight-carousel').owlCarousel({
					loop:true,
					margin:30,
					nav:true,
					smartSpeed: 700,
					autoplay: 5000,
					navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
					responsive:{
						0:{
							items:1
						},
						600:{
							items:2
						},
						800:{
							items:2
						},
						1024:{
							items:3
						},
						1200:{
							items:4
						},
						1400:{
							items:4
						},
						1600:{
							items:4
						}
					}
				});    		
			}
		};

		var home3SLiderBanner = function () {
			if ($('.appScreenshotCarousel-container').length) {
	
				var swiper = new Swiper('.appScreenshotCarousel-container', {
					effect: 'coverflow',
					loop: true,
					auto: true,
					centeredSlides: true,
					slidesPerView: 2,
					initialSlide: 2,
					keyboardControl: true,
					mousewheelControl: false,
					grabCursor: true,
					lazyLoading: true,
					autoplay: 5000,
					speed: 600,
					paginationClickable: true,
					coverflowEffect: {
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows : true,
					  },
					//preventClicks: false,
					//preventClicksPropagation: false,
					//lazyLoadingInPrevNext: true,
					nextButton: '.swiper-button-next',
					prevButton: '.swiper-button-prev',
					coverflow: {
						rotate: 0,
						stretch: 0,
						depth: 250,
						modifier: .5,
						slideShadows: false,
					},
					breakpoints: {
						1699: {
							slidesPerView: 2,
							spaceBetween: 0,
						},
						1100: {
							slidesPerView: 2,
							spaceBetween: 0,
						},
						991: {
							slidesPerView: 2,
							spaceBetween: 0,
						},
						767: {
							slidesPerView: 2,
							spaceBetween: 10,
						},
						575: {
							slidesPerView: 2,
							spaceBetween: 5,
						},
						330: {
							slidesPerView: 1,
							spaceBetween: 10,
						}
					},
				});
	
			}
		};


	// // odometer counter start
	var odmeterActive = function () {
	jQuery('.odometer').appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});
	}
	// // odometer counter end


	// inhover active start
	var mouseActive = function () {
		// inhover active start
		$(".services__item--2").on('mouseenter', function () {
			$(".services__item--2").removeClass("active");
			$(this).addClass("active");
		});
	}
	// nhover active start
	
		
		

		//heroslider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/banner-wid.default",
			function ($scope, $) {
				home3SLiderBanner();
			}
		);

		//heroslider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/spotlight.default",
			function ($scope, $) {
				spotlightCarousleActive();
			}
		);

		//heroslider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/slider.default",
			function ($scope, $) {
				heroSlider();
			}
		);

		//fourColSlider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/brand.default",
			function ($scope, $) {
				brandSlider();
			}
		);

		//fourColSlider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/testimonial_slider.default",
			function ($scope, $) {
				testimonialSlider();
			}
		);

		//fourColSlider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/woo_product.default",
			function ($scope, $) {
				fourColSlider();
			}
		);

		//service
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/service.default",
			function ($scope, $) {
				fourColSlider();
			}
		);

		//movie slider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/featured_list.default",
			function ($scope, $) {
				movieSlider();
			}
		);

		//team slider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/member_slider.default",
			function ($scope, $) {
				teamSlider();
			}
		);

		//gallery filter
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/post_tab.default",
			function ($scope, $) {
				galleryFilter();
			}
		);
		//Brand Slider
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/brand.default",
			function ($scope, $) {
				sponsorsTwoActive();
			}
		);
		//testimonial Style Two filter
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/testimonial_slider.default",
			function ($scope, $) {
				testimonialThreeActive();
			}
		);
		//testimonial Style Two filter
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/videotrailers.default",
			function ($scope, $) {
				videoTrailer();
			}
		);
		
		//testimonial Style Two filter
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/spotlight.default",
			function ($scope, $) {
				spotlightTabActive();
			}
		);

		// odometer
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/about.default",
			function ($scope, $) {
				odmeterActive();
			}
		);
		// odometer
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/counter-intr.default",
			function ($scope, $) {
				odmeterActive();
			}
		);

		// odometer
		elementorFrontend.hooks.addAction(
			"frontend/element_ready/service.default",
			function ($scope, $) {
				mouseActive();
			}
		);
		


	});
})(jQuery);
