$(function(){
	$(".key1").click(function(){
		$(this).addClass("key1-show").siblings().removeClass("key1-show");
		var x = $(this).index();
		$(".key1-data").eq(x).css({zIndex:1}).siblings().css({zIndex:0})
	})
	$(".key2").click(function(){
		$(this).addClass("key2-show").siblings().removeClass("key2-show");
		var x = $(this).index();
		if(x == 0){
			$(".SS-data").css({zIndex:1});
			$(".LX-data").css({zIndex:0});	
		}else if(x == 1){
			$(".SS-data").css({zIndex:0});
			$(".LX-data").css({zIndex:1});	
		}
	})
})
