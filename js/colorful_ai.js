$(function() {
	var colorfulaiList = $(".colorfulai-list-item");
	if(!window.location.hash.match('fromapp') && (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
		colorfulaiList.on("click", function() {
			var thisPop = $(this).find(".QR-popbox")
			popupDiv(thisPop);
		});
	} else {
		colorfulaiList.hover(
			function() {
				$(this).find(".QR-code").fadeIn(100);
			},
			function() {
				$(this).find(".QR-code").fadeOut(100);
			}
		);
	}
});