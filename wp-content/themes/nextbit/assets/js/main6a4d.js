(function ($) {
	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($(".preloader").length) {
			$(".preloader").delay(200).fadeOut(500);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($(".main-header").length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $(".main-header");
			var scrollLink = $(".scroll-to-top");

			var HeaderHight = $(".main-header").height();
			if (windowpos >= HeaderHight) {
				siteHeader.addClass("fixed-header");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass("fixed-header");
				scrollLink.fadeOut(300);
			}
		}
	}

	

	headerStyle();

	//Submenu Dropdown Toggle
	if ($(".main-header .menu-item-has-children ul").length) {
		$(".main-header .menu-item-has-children").append(
			'<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
		);

		//Dropdown Button
		$(".main-header .menu-item-has-children .dropdown-btn").on("click", function () {
			$(this).prev("ul").slideToggle(500);
		});

		//Dropdown Menu / Fullscreen Nav
		$(".fullscreen-menu .navigation .menu-item-has-children > a").on(
			"click",
			function () {
				$(this).next("ul").slideToggle(500);
			}
		);

		//Disable dropdown parent link
		$(".navigation .menu-item-has-children > a").on("click", function (e) {
			e.preventDefault();
		});

		//Disable dropdown parent link
		$(
			".main-header .navigation .menu-item-has-children > a,.hidden-bar .side-menu .menu-item-has-children > a"
		).on("click", function (e) {
			e.preventDefault();
		});

		$(".cart-box .dropdown-menu").click(function (e) {
			e.stopPropagation();
		});
	}

	//Jquery Spinner / Quantity Spinner
	if ($(".quantity-spinner").length) {
		$("input.quantity-spinner").TouchSpin({
			verticalbuttons: true,
		});
	}

	//Jquery Counter
	$('.counter').counterUp({
		delay: 10,
		time: 10000
	});

	//Mobile Nav Hide Show
	if ($(".mobile-menu").length) {
		$(".mobile-menu .menu-box").mCustomScrollbar();

		var mobileMenuContent = $(".main-header .nav-outer .main-menu").html();
		$(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);
		$(".sticky-header .main-menu").append(mobileMenuContent);

		//Dropdown Button
		$(".mobile-menu .menu-item-has-children .dropdown-btn").on("click", function () {
			$(this).toggleClass("open");
			$(this).prev("ul").slideToggle(500);
		});
		//Menu Toggle Btn
		$(".mobile-nav-toggler").on("click", function () {
			$("body").addClass("mobile-menu-visible");
		});

		//Menu Toggle Btn
		$(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
			"click",
			function () {
				$("body").removeClass("mobile-menu-visible");
			}
		);
	}

	

	// sticky start
	var wind = $(window);
	var sticky = $('#sticky-header');
	wind.on('scroll', function () {
		var scroll = wind.scrollTop();
		if (scroll < 300) {
			sticky.removeClass('sticky-header');
		} else {
			sticky.addClass('sticky-header');
		}
	});
	// sticky end

	//Header Search
	if ($(".search-box-outer").length) {
		$(".search-box-outer").on("click", function () {
			$("body").addClass("search-active");
		});
		$(".close-search").on("click", function () {
			$("body").removeClass("search-active");
		});

		$(".search-popup .color-layer").on("click", function () {
			$("body").removeClass("search-active");
		});
	}

	//Hidden Sidebar
	if ($(".hidden-bar,.fullscreen-menu").length) {
		var hiddenBar = $(".hidden-bar");
		var hiddenBarOpener = $(".nav-toggler");
		var hiddenBarCloser = $(".hidden-bar-closer,.close-menu");
		$(".hidden-bar-wrapper").mCustomScrollbar();

		//Show Sidebar
		hiddenBarOpener.on("click", function () {
			$("body").addClass("visible-menu-bar");
			hiddenBar.addClass("visible-sidebar");
		});

		//Hide Sidebar
		hiddenBarCloser.on("click", function () {
			$("body").removeClass("visible-menu-bar");
			hiddenBar.removeClass("visible-sidebar");
		});
	}

	//Custom Seclect Box
	if ($(".custom-select-box").length) {
		$(".custom-select-box")
			.selectmenu()
			.selectmenu("menuWidget")
			.addClass("overflow");
	}

	//Parallax Scene for Icons
	if ($(".parallax-scene-1").length) {
		var scene = $(".parallax-scene-1").get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($(".parallax-scene-2").length) {
		var scene = $(".parallax-scene-2").get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($(".parallax-scene-3").length) {
		var scene = $(".parallax-scene-3").get(0);
		var parallaxInstance = new Parallax(scene);
	}
	if ($(".parallax-scene-4").length) {
		var scene = $(".parallax-scene-4").get(0);
		var parallaxInstance = new Parallax(scene);
	}

	if ($(".paroller").length) {
		$(".paroller").paroller({
			factor: 0.2, // multiplier for scrolling speed and offset, +- values for direction control
			factorLg: 0.4, // multiplier for scrolling speed and offset if window width is less than 1200px, +- values for direction control
			type: "foreground", // background, foreground
			direction: "horizontal", // vertical, horizontal
		});
	}

	//Accordion Box
	if ($(".accordion-box").length) {
		$(".accordion-box").on("click", ".acc-btn", function () {
			var outerBox = $(this).parents(".accordion-box");
			var target = $(this).parents(".accordion");

			if ($(this).hasClass("active") !== true) {
				$(outerBox).find(".accordion .acc-btn").removeClass("active");
			}

			if ($(this).next(".acc-content").is(":visible")) {
				return false;
			} else {
				$(this).addClass("active");
				$(outerBox).children(".accordion").removeClass("active-block");
				$(outerBox)
					.find(".accordion")
					.children(".acc-content")
					.slideUp(300);
				target.addClass("active-block");
				$(this).next(".acc-content").slideDown(300);
			}
		});
	}

	//LightBox / Fancybox
	if ($(".lightbox-image").length) {
		$(".lightbox-image").fancybox({
			openEffect: "fade",
			closeEffect: "fade",
			helpers: {
				media: {},
			},
		});
	}

	//Contact Form Validation
	if ($("#contact-form").length) {
		$("#contact-form").validate({
			rules: {
				username: {
					required: true,
				},
				email: {
					required: true,
					email: true,
				},
				phone: {
					required: true,
				},
				subject: {
					required: true,
				},
				message: {
					required: true,
				},
			},
		});
	}

	// Scroll to a Specific Div
	if ($(".scroll-to-target").length) {
		$(".scroll-to-target").on("click", function () {
			var target = $(this).attr("data-target");
			// animate
			$("html, body").animate(
				{
					scrollTop: $(target).offset().top,
				},
				1500
			);
		});
	}

	// Activate lightcase
	$("a[data-rel^=lightcase]").lightcase();

	// Elements Animation
	if ($(".wow").length) {
		var wow = new WOW({
			boxClass: "wow", // animated element css class (default is wow)
			animateClass: "animated", // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true, // act on asynchronously loaded content (default is true)
		});
		wow.init();
	}

	// mobile menu start
	$('#mobile-menu-active').metisMenu();

	$('#mobile-menu-active .dropdown > a').on('click', function (e) {
		e.preventDefault();
	});

	$(".hamburger_menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").toggleClass("show");
		$("body").addClass("on-side");
		$('.body-overlay').addClass('active');
		$(this).addClass('active');
	});

	$(".close-mobile-menu > a").on("click", function (e) {
		e.preventDefault();
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.body-overlay').removeClass('active');
		$('.hamburger_menu > a').removeClass('active');
	});

	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".slide-bar").removeClass("show");
		$("body").removeClass("on-side");
		$('.hamburger-menu > a').removeClass('active');
	});
	// mobile menu end


	$('.popup-video').magnificPopup({
		type: 'iframe'
	});
	//  magnificPopup end


	//data background
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ") ")
	})

	// data bg color
	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));

	});

	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on("scroll", function () {
		headerStyle();
	});

	/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on("load", function () {
		handlePreloader();
	});
})(window.jQuery);
