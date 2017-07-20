var num = $(".options-inner").children(".options").length;
var optionsInnerWidth = $(".options").width()*num;
var screenWidth = $(window).width();

if(optionsInnerWidth > screenWidth){
	$(".options-inner").css({width:optionsInnerWidth+10*(num+2)+'px'})
}else{
	$(".options-inner").css({width:screenWidth})
}
