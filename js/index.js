$(function() {
	var indexBanner = $("#J_indexBanner");
	$('#J_indexDownBtn').on('click', function() {
		$('html, body').animate({
			scrollTop: indexBanner.outerHeight()
		});
	});
	isScrollDown();
	$(window).scroll(isScrollDown);
})

function isScrollDown() {
	var topNavBar = $(".top-navbar");
	if($(window).scrollTop() >= 20) {
		topNavBar.addClass('top-navbar-black');
	} else {
		topNavBar.removeClass('top-navbar-black');
	}
}