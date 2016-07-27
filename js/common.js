$(function() {
	var feedBack = $(".side-feedback");
	var slideLeft = $(".slide-left-box");
	var slideClose = $(".slide-close");
	var userMenu = $("#J_user_dropdownMenu");
	var userMenuList = $(".user-menu-list");
	var sideMenuBtn = $(".side-btn");
	var navbarList = $(".navbar-list");
	var toLogin = $("#J_to_login");
	var toRegister = $("#J_to_register");
	var loginPop = $(".user-login");
	var registerPop = $(".user-register");
	feedBack.on("click", function() {
		$(this).animate({
			right: "-28px"
		}, 200);
		slideLeft.animate({
			right: "30px"
		}, 400);
	});
	slideClose.on("click", function() {
		slideLeft.animate({
			right: "-334px"
		}, 400, function() {
			feedBack.animate({
				right: "0"
			}, 200);
		})
	});
	userMenu.on("click", function() {
		userMenuList.toggle();
	});
	sideMenuBtn.on("click", function() {
		navbarList.slideToggle();
	})
	toLogin.click(function(){
		popupDiv(loginPop);
	})
	toRegister.click(function(){
		popupDiv(registerPop);
	})
	loginPop.find(".login-closebtn").click(function(){
		hideDiv(loginPop);
	})
	registerPop.find(".login-closebtn").click(function(){
		hideDiv(registerPop);
	})
	Tab();
})

function popupDiv(div) {
	var $div_obj = div;
	var popupHeight = $div_obj.height();
	$("<div id='bg-modal'></div>").click(function() {
			hideDiv(div); 
		}).appendTo("body").fadeIn(200);
	$div_obj.css({
		"position": "fixed",
		"margin-top": -popupHeight / 2
	}).fadeIn("slow");
}
/*隐藏弹出DIV*/
function hideDiv(div) {
	$("#bg-modal").fadeOut(200).remove();
	div.fadeOut(200);
}

function Tab() {
	var tabBtn = $(".tab-bar-list li");
	tabBtn.on("click", function() {
		var caseActive = $(this).addClass("tab-active").siblings(".tab-active").removeClass("tab-active");
		var activeId = caseActive.find("a").attr("id").substring(2);
		var toactiveId = $(this).find("a").attr("id").substring(2);
		$("#" + activeId).removeClass("display-active");
		$("#" + toactiveId).addClass("display-active");
	})
}