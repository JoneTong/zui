window.onload = function() {
	var img = document.getElementsByClassName("img")[0];
	img.addEventListener("touchstart", touchStart);
	img.addEventListener("touchmove", touchMove);
	img.addEventListener("touchend", touchEnd);
	var sX, sY, mX, mY, X, Y, oX, oY, w, h1, cx, cy;

	function touchStart(e) {
		var e = e || window.event;
		e.stopPropagation();
		sX = e.touches[0].clientX - img.offsetLeft;
		sY = e.touches[0].clientY - img.offsetTop;

	}

	function touchMove(e) {
		var e = e || window.event;
		
		e.stopPropagation();
		mX = e.touches[0].clientX;
		mY = e.touches[0].clientY;
		X = mX - sX;
		Y = mY - sY;
		w = $(".img").width() - $(".img-box").width();
		h1 = $(".img").height() - $(".img-box").height() - parseInt($(".img-box").css("top"));
		if(X > 0) {
			X = 0;
		}
		if(X < -w) {
			X = -w;
		}
		if(Y > 0) {
			Y = 0;
		}
		if(Y < -h1) {
			Y = -h1;
		}
		$(".img").css({
			left: X,
			top: Y
		});
		$(".mask").css({
			left: -X / 10,
			top: -Y / 10
		})
	}

	function touchEnd() {

	}
}
//$(function() {
//	var mask = document.getElementsByClassName("mask")[0];
//	mask.addEventListener("touchstart", touchStart);
//	mask.addEventListener("touchmove", touchMove);
//	mask.addEventListener("touchend", touchEnd);
//	var sX, sY, mX, mY, X, Y, w, h1;
//
//	function touchStart(e) {
//		var e = e || window.event;
//		e.stopPropagation();
//		sX = e.touches[0].clientX - mask.offsetLeft;
//		sY = e.touches[0].clientY - mask.offsetTop;
//
//	}
//
//	function touchMove(e) {
//		var e = e || window.event;
//		e.stopPropagation();
//		mX = e.touches[0].clientX;
//		mY = e.touches[0].clientY;
//		X = mX - sX;
//		Y = mY - sY;
//		w = $(".mask").width() - $(".screenshot").width();
//		h1 = $(".mask").height() - $(".screenshot").height();
//		if(X < 0) {
//			X = 0;
//		}
//		if(X > -w) {
//			X = -w;
//		}
//		if(Y < 0) {
//			Y = 0;
//		}
//		if(Y > -h1) {
//			Y = -h1;
//		}
//		$(".img").css({
//			left: -X * 10,
//			top: -Y * 10
//		});
//		$(".mask").css({
//			left: X,
//			top: Y
//		})
//	}
//
//	function touchEnd() {
//
//	}
//})