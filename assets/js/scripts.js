$(document).ready(function(){
	// Mobile Menu
	$('.mobile-bars button').click(function(){
		$('.sidebar').css('left','0');
		$('.overlay-menu').show();

		return false
	});
	$('.overlay-menu').click(function(){
		$('.sidebar').css('left','-100%');
		$('.overlay-menu').hide();

		return false
	});

	// Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// });





});