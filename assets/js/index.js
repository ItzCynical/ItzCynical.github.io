$(document).ready(function(){
	$(".about-me").hide();

	$(".header-subtitle").on("click", function(){
		$(".about-me").slideToggle();
	});

	$('.jumbotron').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.carousel'
	});

	$(".carousel").slick({
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '60px',
		autoplay: true,
		autoplaySpeed: 2000,
		asNavFor: '.jumbotron',
	});
});