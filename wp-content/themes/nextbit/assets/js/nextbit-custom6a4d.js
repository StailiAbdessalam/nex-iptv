(function ($) {
	"use strict";

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	// Sponsors Item Carousel
	if ($(".blog-gallery").length) {
		$(".blog-gallery").owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [
				'<span class="far fa-angle-left"></span>',
				'<span class="far fa-angle-right"></span>',
			],
		});
	}

	// cart-plus-minus
    $(".cart-plus-minus").append('<div class="qtybutton minus"><i class="far fa-minus"></i></div><div class="qtybutton plus"><i class="far fa-plus"></i></div>');

    $(".cart-plus-minus").on("click", ".qtybutton.plus, .qtybutton.minus", function () {
        // Get current quantity values
        var qty = $(this).closest(".cart-plus-minus").find(".qty");
        var val = parseFloat(qty.val());
        var max = parseFloat(qty.attr("max"));
        var min = parseFloat(qty.attr("min"));
        var step = parseFloat(qty.attr("step"));

        // Change the value if plus or minus
        if ($(this).is(".plus")) {
            if (max && max <= val) {
                qty.val(max);
            }
            else {
                qty.val(val + step).trigger("change");
            }
        }
        else {
            if (min && min >= val) {
                qty.val(min);
            }
            else if (val > 1) {
                qty.val(val - step).trigger("change");
            }
        }
    });

    

})(window.jQuery);
