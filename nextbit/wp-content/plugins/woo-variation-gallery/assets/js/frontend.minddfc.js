!function () { var i, t = { 938: function () { function i(t) { return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (i) { return typeof i } : function (i) { return i && "function" == typeof Symbol && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i }, i(t) } function t(i, t) { for (var e = 0; e < t.length; e++) { var a = t[e]; a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(i, a.key, a) } } !function (e) { "use strict"; var a, n = (a = jQuery, function () { function i(t, e, n) { var o, r, l; !function (i, t) { if (!(i instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), l = {}, (r = "defaults") in (o = this) ? Object.defineProperty(o, r, { value: l, enumerable: !0, configurable: !0, writable: !0 }) : o[r] = l, this.name = n, this.element = t, this.$element = a(t), this.settings = a.extend(!0, {}, this.defaults, e), this.$wrapper = this.$element.closest(".product"), this.$variations_form = this.$wrapper.find(".variations_form"), this.$attributeFields = this.$variations_form.find(".variations select"), this.$target = this.$element.parent(), this.$slider = a(".woo-variation-gallery-slider", this.$element), this.$thumbnail = a(".woo-variation-gallery-thumbnail-slider", this.$element), this.thumbnail_columns = this.$element.data("thumbnail_columns"), this.product_id = this.$variations_form.data("product_id"), this.is_variation_product = this.$variations_form.length > 0, this.initial_load = !0, this.is_vertical = !!woo_variation_gallery_options.is_vertical, this.$element.addClass("wvg-loaded"), this.defaultDimension(), this.defaultGallery(), woo_variation_gallery_options.enable_gallery_preload && this.initVariationImagePreload(), this.initEvents(), this.initVariationGallery(), this.is_variation_product || this.imagesLoaded(), this.is_variation_product && (this.initSlick(), this.initZoom(), this.initPhotoswipe()), a(document).trigger("woo_variation_gallery_loaded", [this]) } var n, o, r; return n = i, (o = [{ key: "init", value: function () { var i = this; return _.debounce((function () { i.initSlick(), i.initZoom(), i.initPhotoswipe() }), 500) } }, { key: "getChosenAttributes", value: function () { var i = {}, t = 0, e = 0; return this.$attributeFields.each((function () { var n = a(this).data("attribute_name") || a(this).attr("name"), o = a(this).val() || ""; o.length > 0 && e++, t++, i[n] = o })), { count: t, chosenCount: e, data: i } } }, { key: "defaultDimension", value: function () { var i = this; this.$element.css("min-height", this.$element.height()).css("min-width", this.$element.width()), a(e).on("resize.wvg", _.debounce((function (t) { t.originalEvent && i.$element.css("min-height", i.$element.height()).css("min-width", i.$element.width()) }), 300)), a(e).on("resize.wvg", _.debounce((function (t) { t.originalEvent && i.$element.css("min-height", "").css("min-width", "") }), 100, { leading: !0, trailing: !1 })) } }, { key: "dimension", value: function () { } }, { key: "initEvents", value: function () { var i = this; this.$element.on("woo_variation_gallery_slider_slick_init", (function (t, n) { if (woo_variation_gallery_options.is_vertical && (a(e).on("resize", i.enableThumbnailPositionDebounce()), i.$slider.on("setPosition", i.thumbnailHeightDebounce()), i.$slider.on("afterChange", (function () { i.thumbnailHeight() }))), woo_variation_gallery_options.enable_thumbnail_slide) { var o = i.$thumbnail.find(".wvg-gallery-thumbnail-image").length; parseInt(woo_variation_gallery_options.gallery_thumbnails_columns) < o ? (i.$thumbnail.find(".wvg-gallery-thumbnail-image").removeClass("current-thumbnail"), i.initThumbnailSlick()) : i.$slider.slick("slickSetOption", "asNavFor", null, !1) } })), this.$element.on("woo_variation_gallery_slick_destroy", (function (t, e) { i.$thumbnail.hasClass("slick-initialized") && i.$thumbnail.slick("unslick") })), this.$element.on("woo_variation_gallery_image_loaded", this.init()) } }, { key: "initSlick", value: function () { var i = this; this.$slider.is(".slick-initialized") && this.$slider.slick("unslick"), this.$slider.off("init"), this.$slider.off("beforeChange"), this.$slider.off("afterChange"), this.$element.trigger("woo_variation_gallery_before_init", [this]), this.$slider.on("init", (function (t) { i.initial_load && (i.initial_load = !1) })).on("beforeChange", (function (t, e, a, n) { i.$thumbnail.find(".wvg-gallery-thumbnail-image").not(".slick-slide").removeClass("current-thumbnail"), i.$thumbnail.find(".wvg-gallery-thumbnail-image").not(".slick-slide").eq(n).addClass("current-thumbnail") })).on("afterChange", (function (t, e, a) { i.stopVideo(i.$slider), i.initZoomForTarget(a) })).slick(), this.$thumbnail.find(".wvg-gallery-thumbnail-image").not(".slick-slide").first().addClass("current-thumbnail"), this.$thumbnail.find(".wvg-gallery-thumbnail-image").not(".slick-slide").each((function (t, e) { a(e).find("div, img").on("click", (function (e) { e.preventDefault(), e.stopPropagation(), i.$slider.slick("slickGoTo", t) })) })), _.delay((function () { i.$element.trigger("woo_variation_gallery_slider_slick_init", [i]) }), 1), _.delay((function () { i.removeLoadingClass() }), 100) } }, { key: "initZoomForTarget", value: function (i) { if (woo_variation_gallery_options.enable_gallery_zoom) { var t = parseInt(this.$target.width()), e = !1, n = this.$slider.slick("getSlick").$slides.eq(i); if (a(n).each((function (i, n) { var o = a(n).find("img"); if (parseInt(o.data("large_image_width")) > t) return e = !0, !1 })), a().zoom && e) { var o = a.extend({ touch: !1 }, wc_single_product_params.zoom_options); "ontouchstart" in document.documentElement && (o.on = "click"), n.trigger("zoom.destroy"), n.zoom(o) } } } }, { key: "initZoom", value: function () { var i = this.$slider.slick("slickCurrentSlide"); this.initZoomForTarget(i) } }, { key: "initPhotoswipe", value: function () { var i = this; woo_variation_gallery_options.enable_gallery_lightbox && (this.$element.off("click", ".woo-variation-gallery-trigger"), this.$element.off("click", ".wvg-gallery-image a"), this.$element.on("click", ".woo-variation-gallery-trigger", (function (t) { i.openPhotoswipe(t) })), this.$element.on("click", ".wvg-gallery-image a", (function (t) { i.openPhotoswipe(t) }))) } }, { key: "openPhotoswipe", value: function (i) { var t = this; if (i.preventDefault(), "undefined" == typeof PhotoSwipe) return !1; var e = a(".pswp")[0], n = this.getGalleryItems(), o = a.extend({ index: this.$slider.slick("slickCurrentSlide") }, wc_single_product_params.photoswipe_options), r = new PhotoSwipe(e, PhotoSwipeUI_Default, n, o); r.listen("close", (function () { t.stopVideo(e) })), r.listen("afterChange", (function () { t.stopVideo(e) })), r.init() } }, { key: "stopVideo", value: function (i) { a(i).find("iframe, video").each((function () { var i = a(this).prop("tagName").toLowerCase(); "iframe" === i && a(this).attr("src"), "video" === i && a(this)[0].pause() })) } }, { key: "addLoadingClass", value: function () { if (woo_variation_gallery_options.preloader_disable) return !0; this.$element.addClass("loading-gallery") } }, { key: "removeLoadingClass", value: function () { this.$element.removeClass("loading-gallery") } }, { key: "getGalleryItems", value: function () { var i = this.$slider.slick("getSlick").$slides, t = []; return i.length > 0 && i.each((function (i, e) { var n, o, r = a(e).find("img, iframe, video"); switch (a(r).prop("tagName").toLowerCase()) { case "img": o = { src: r.attr("data-large_image"), w: r.attr("data-large_image_width"), h: r.attr("data-large_image_height"), title: r.attr("data-caption") ? r.attr("data-caption") : r.attr("title") }; break; case "iframe": n = r.attr("src"), o = { html: '<iframe class="wvg-lightbox-iframe" src="'.concat(n, '" style="width: 100%; height: 100%; margin: 0;padding: 0; background-color: #000000" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>') }; break; case "video": n = r.attr("src"), o = { html: '<video preload="auto" class="wvg-lightbox-video" disablePictureInPicture controls controlsList="nodownload" src="'.concat(n, '" style="width: 100%; height: 100%; margin: 0;padding: 0; background-color: #000000"></video>') } }t.push(o) })), t } }, { key: "destroySlick", value: function () { this.$slider.html(""), this.$thumbnail.html(""), this.$slider.is(".slick-initialized") && this.$slider.slick("unslick"), this.$element.trigger("woo_variation_gallery_slick_destroy", [this]) } }, { key: "defaultGallery", value: function () { var i = this; this.is_variation_product && (this.$element.defaultXHR && this.$element.defaultXHR.abort(), this.$element.defaultXHR = a.ajax({ global: !1, url: wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_default_gallery"), method: "POST", data: { product_id: this.product_id }, success: function (t) { t ? (i.$element.data("woo_variation_gallery_default", t), i.$element.trigger("woo_variation_default_gallery_loaded", [i, t])) : (i.$element.data("woo_variation_gallery_default", []), i.$element.trigger("woo_variation_default_gallery_loaded", [i, []]), console.error("Variation Gallery not available on variation id ".concat(i.product_id, "."))) } })) } }, { key: "initVariationImagePreload", value: function () { var i = this; this.is_variation_product && (this.$element.imagesXHR && this.$element.imagesXHR.abort(), this.$element.defaultXHR = a.ajax({ global: !1, url: wc_add_to_cart_variation_params.wc_ajax_url.toString().replace("%%endpoint%%", "get_variation_gallery"), method: "POST", data: { product_id: this.product_id }, success: function (t) { t ? (t.length > 1 && i.imagePreload(t), i.$element.data("woo_variation_gallery_variation_images", t), i.$element.trigger("woo_variation_gallery_variation_images", [i, t])) : (i.$element.data("woo_variation_gallery_variation_images", []), console.error("Variation Gallery variations images not available on variation id ".concat(i.product_id, "."))) } })) } }, { key: "imagePreload", value: function (i) { for (var t = 0; t < i.length; t++)try { var e = new Image, n = new Image, o = new Image, r = new Image; e.src = i[t].src, i[t].srcset && (e.srcset = i[t].srcset), n.src = i[t].gallery_thumbnail_src, o.src = i[t].full_src, r.src = i[t].archive_src; var l = a.trim(i[t].video_link); if (l && "video" === i[t].video_embed_type) { var s = new XMLHttpRequest; s.open("GET", l, !0), s.responseType = "blob", s.onload = function () { if (200 === this.status) { var i = this.response; URL.createObjectURL(i) } }, s.onerror = function () { }, s.send() } } catch (i) { console.error(i) } } }, { key: "showVariationImage", value: function (i) { i && (this.addLoadingClass(), this.galleryInit(i.variation_gallery_images || [])) } }, { key: "resetVariationImage", value: function () { this.$element.is(".loading-gallery") || (this.addLoadingClass(), this.galleryReset()) } }, { key: "initVariationGallery", value: function () { var i = this; this.$variations_form.off("reset_image.wvg"), this.$variations_form.off("click.wvg", ".reset_variations"), this.$variations_form.off("show_variation.wvg"), this.$variations_form.off("hide_variation.wvg"), this.$variations_form.on("show_variation.wvg", (function (t, e) { i.showVariationImage(e) })), woo_variation_gallery_options.gallery_reset_on_variation_change ? this.$variations_form.on("hide_variation.wvg", (function () { i.resetVariationImage() })) : this.$variations_form.on("click.wvg", ".reset_variations", (function () { i.resetVariationImage() })) } }, { key: "galleryReset", value: function () { var i = this, t = this.$element.data("woo_variation_gallery_default"); t && t.length > 0 ? this.galleryInit(t) : _.delay((function () { i.removeLoadingClass() }), 100) } }, { key: "galleryInit", value: function (i) { var t = this, e = i.length > 1; this.$element.trigger("before_woo_variation_gallery_init", [this, i]), this.destroySlick(); var a = i.map((function (i) { return wp.template("woo-variation-gallery-slider-template")(i) })).join(""), n = i.map((function (i) { return wp.template("woo-variation-gallery-thumbnail-template")(i) })).join(""); e ? (this.$target.addClass("woo-variation-gallery-has-product-thumbnail"), this.$target.removeClass("woo-variation-gallery-no-product-thumbnail")) : (this.$target.addClass("woo-variation-gallery-no-product-thumbnail"), this.$target.removeClass("woo-variation-gallery-has-product-thumbnail")), this.$slider.html(a), e ? this.$thumbnail.html(n) : this.$thumbnail.html(""), _.delay((function () { t.imagesLoaded() }), 1) } }, { key: "imagesLoaded", value: function () { var i = this; if (!a().imagesLoaded.done) return this.$element.trigger("woo_variation_gallery_image_loading", [this]), void this.$element.trigger("woo_variation_gallery_image_loaded", [this]); this.$element.imagesLoaded().progress((function (t, e) { i.$element.trigger("woo_variation_gallery_image_loading", [i]) })).done((function (t) { i.$element.trigger("woo_variation_gallery_image_loaded", [i]) })) } }, { key: "initThumbnailSlick", value: function () { var i = this; this.$thumbnail.hasClass("slick-initialized") && this.$thumbnail.slick("unslick"), this.$thumbnail.off("init"), this.$thumbnail.on("init", (function () { })).slick(), _.delay((function () { i.$element.trigger("woo_variation_gallery_thumbnail_slick_init", [i]) }), 1) } }, { key: "thumbnailHeight", value: function () { this.is_vertical ? this.$slider.slick("getSlick").$slides.length > 1 ? this.$thumbnail.height(this.$slider.height()) : this.$thumbnail.height(0) : this.$thumbnail.height("auto"), this.$thumbnail.hasClass("slick-initialized") && this.$thumbnail.slick("setPosition") } }, { key: "thumbnailHeightDebounce", value: function (i) { var t = this; return _.debounce((function () { t.thumbnailHeight() }), 401) } }, { key: "enableThumbnailPosition", value: function () { woo_variation_gallery_options.is_mobile, woo_variation_gallery_options.is_vertical && (e.matchMedia("(max-width: 768px)").matches || e.matchMedia("(max-width: 480px)").matches ? (this.is_vertical = !1, this.$element.removeClass("".concat(woo_variation_gallery_options.thumbnail_position_class_prefix, "left ").concat(woo_variation_gallery_options.thumbnail_position_class_prefix, "right ").concat(woo_variation_gallery_options.thumbnail_position_class_prefix, "bottom")), this.$element.addClass("".concat(woo_variation_gallery_options.thumbnail_position_class_prefix, "bottom")), this.$slider.slick("setPosition")) : (this.is_vertical = !0, this.$element.removeClass("".concat(woo_variation_gallery_options.thumbnail_position_class_prefix, "left ").concat(woo_variation_gallery_options.thumbnail_position_class_prefix, "right ").concat(woo_variation_gallery_options.thumbnail_position_class_prefix, "bottom")), this.$element.addClass("".concat(woo_variation_gallery_options.thumbnail_position_class_prefix).concat(woo_variation_gallery_options.thumbnail_position)), this.$slider.slick("setPosition"))) } }, { key: "enableThumbnailPositionDebounce", value: function (i) { var t = this; return _.debounce((function () { t.enableThumbnailPosition() }), 400) } }, { key: "destroy", value: function () { this.$element.removeData(this.name) } }]) && t(n.prototype, o), r && t(n, r), Object.defineProperty(n, "prototype", { writable: !1 }), i }()), o = function (t) { return function (e, a) { t.fn[e] = function (n) { for (var o = this, r = arguments.length, l = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)l[s - 1] = arguments[s]; return this.each((function (r, s) { var c = t(s), u = c.data(e); if (u || (u = new a(c, t.extend({}, n), e), c.data(e, u)), "string" == typeof n) { if ("object" === i(u[n])) return u[n]; var h; if ("function" == typeof u[n]) return (h = u)[n].apply(h, l) } return o })) }, t.fn[e].Constructor = a, t[e] = function (i) { for (var a, n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)o[r - 1] = arguments[r]; return (a = t({}))[e].apply(a, [i].concat(o)) }, t.fn[e].noConflict = function () { return t.fn[e] } } }(jQuery); o("WooVariationGallery", n) }(window) }, 242: function () { jQuery((function (i) { try { i(document).on("woo_variation_gallery_init", (function () { i(".woo-variation-gallery-wrapper:not(.wvg-loaded)").WooVariationGallery() })).trigger("woo_variation_gallery_init") } catch (i) { window.console.log(i) } i(document).on("wc_variation_form", ".variations_form", (function () { i(document).trigger("woo_variation_gallery_init") })), i(document).on("qv_loader_stop", (function () { i(".woo-variation-gallery-wrapper:not(.woo-variation-gallery-product-type-variable):not(.wvg-loaded)").WooVariationGallery() })), window.elementorFrontend && window.elementorFrontend.hooks && elementorFrontend.hooks.addAction("frontend/element_ready/woocommerce-product-images.default", (function (t) { i(document).trigger("woo_variation_gallery_init") })) })) }, 580: function () { }, 125: function () { }, 187: function () { } }, e = {}; function a(i) { var n = e[i]; if (void 0 !== n) return n.exports; var o = e[i] = { exports: {} }; return t[i](o, o.exports, a), o.exports } a.m = t, i = [], a.O = function (t, e, n, o) { if (!e) { var r = 1 / 0; for (u = 0; u < i.length; u++) { e = i[u][0], n = i[u][1], o = i[u][2]; for (var l = !0, s = 0; s < e.length; s++)(!1 & o || r >= o) && Object.keys(a.O).every((function (i) { return a.O[i](e[s]) })) ? e.splice(s--, 1) : (l = !1, o < r && (r = o)); if (l) { i.splice(u--, 1); var c = n(); void 0 !== c && (t = c) } } return t } o = o || 0; for (var u = i.length; u > 0 && i[u - 1][2] > o; u--)i[u] = i[u - 1]; i[u] = [e, n, o] }, a.o = function (i, t) { return Object.prototype.hasOwnProperty.call(i, t) }, function () { var i = { 664: 0, 438: 0, 60: 0, 706: 0 }; a.O.j = function (t) { return 0 === i[t] }; var t = function (t, e) { var n, o, r = e[0], l = e[1], s = e[2], c = 0; if (r.some((function (t) { return 0 !== i[t] }))) { for (n in l) a.o(l, n) && (a.m[n] = l[n]); if (s) var u = s(a) } for (t && t(e); c < r.length; c++)o = r[c], a.o(i, o) && i[o] && i[o][0](), i[o] = 0; return a.O(u) }, e = self.webpackChunkwoo_variation_gallery = self.webpackChunkwoo_variation_gallery || []; e.forEach(t.bind(null, 0)), e.push = t.bind(null, e.push.bind(e)) }(), a.O(void 0, [438, 60, 706], (function () { return a(938) })), a.O(void 0, [438, 60, 706], (function () { return a(242) })), a.O(void 0, [438, 60, 706], (function () { return a(580) })), a.O(void 0, [438, 60, 706], (function () { return a(125) })); var n = a.O(void 0, [438, 60, 706], (function () { return a(187) })); n = a.O(n) }();