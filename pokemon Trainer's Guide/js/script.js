/*!
 * Generated using the Bootstrap Customizer (<none>)
 * Config saved to config.json and <none>
 */

 (function($) {

	"use strict";

	// ------------------------------------------------------------------------------ //
	// Overlay Menu Navigation
	// ------------------------------------------------------------------------------ //
	// 判断是否存在 .nav-overlay 类名的元素，如果不存在则返回 false
	var overlayMenu = function () {

		if(!$('.nav-overlay').length) {
		  return false;
		}
		// 定义局部变量 body、menu、menuItems
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
		  body = document.querySelector('body');
		  menu = document.querySelector('.menu-btn');
		  menuItems = document.querySelectorAll('.nav__list-item');
		  applyListeners();
		};
		var applyListeners = function applyListeners() {
		  menu.addEventListener('click', function () {
		    return toggleClass(body, 'nav-active');
		  });
		};
		var toggleClass = function toggleClass(element, stringClass) {
		  if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init(); // 调用 init 函数，完成初始化操作
	}
 
	// 初始化 jarallax 插件，创建动态的 parallax 效果
	  var initJarallax = function() {
	    jarallax(document.querySelectorAll(".jarallax"));

	    jarallax(document.querySelectorAll(".jarallax-keep-img"), {
	      keepImg: true,
	    });
	  }


	// 初始化 Chocolat 图片库
	var initChocolat = function() {
	Chocolat(document.querySelectorAll('.image-link'), {
	    imageSize: 'contain',
	    loop: true,
		})
	}
	// 在文档加载后立即执行以下操作
	$(document).ready(function () {

		overlayMenu();
		initChocolat();
		initJarallax();
		 // 初始化 AOS 动画库
		AOS.init({
			duration: 1200,
			once: true,
		})

		// 启用滑动显示效果
		$('.testimonial-slider').slick({
		    arrows: true,
		    infinite: true,
		    speed: 500,
		    fade: true,
		    cssEase: 'none'
		});
	});
 
	// 预载动画效果
	$(window).load(function() {
		$("#overlayer").fadeOut("slow");
		$('body').addClass('loaded');
	})

})(jQuery);