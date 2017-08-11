$(document).ready(function(){

	/* this will show and hide the nav menus at certain locations */
	$('.js--section-features').waypoint(function(direction) {
		if(direction == "down"){
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, { 
		offset: '60px;'
	});


	/* Button Scroll */
	$('.js--scroll-to-plan').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500);
	});

	$('.js--scroll-to-start').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1500);
	});


	/* Navigation Scroll */
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1500);
	        return false;
	      }
	    }
	  });
	});



	/* Animations on Scroll (using Animate.css) */
	$('.js--wp-1').waypoint(function(){
		$('.js--wp-1').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	$('.js--wp-2').waypoint(function(){
		$('.js--wp-2').addClass('animated fadeInUp');
	}, {
		offset: '50%'
	});

	$('.js--wp-3').waypoint(function(){
		$('.js--wp-3').addClass('animated fadeIn');
	}, {
		offset: '50%'
	});

	$('.js--wp-4').waypoint(function(){
		$('.js--wp-4').addClass('animated pulse');
	}, {
		offset: '50%'
	});



	/* Mobile Navigation (show/hide) */
	$('.js--nav-icon').click(function(){
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');

		nav.slideToggle(200);

		if(icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-close-round');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-close-round');
		}
	});



	/* Maps */
	new GMaps({
	  div: '.map',
	  lat: 44.955,
	  lng: -92.87,
	  zoom: 11
	});



});
