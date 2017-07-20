var mysys_name = "国电常州电厂";
var serviceUrl = "http://192.168.100.110:99/";
//获取地址栏参数
function getUrlParam(name) {
	//构造一个含有目标参数的正则表达式对象  
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	//匹配目标参数  
	var r = window.location.search.substr(1).match(reg);
	//返回参数值  
	if(r != null) return unescape(r[2]);
	return null;
}

//	保留两位小数
function toDecimal(x) {
	var f = parseFloat(x);
	if(isNaN(f)) {
		return false;
	}
	var f = Math.round(x * 100) / 100;
	var s = f.toString();
	var rs = s.indexOf('.');
	if(rs < 0) {
		rs = s.length;
		s += '.';
	}
	while(s.length <= rs + 2) {
		s += '0';
	}
	return s;
}
$(function() {
	//导航和页面切换
	$(".menu-btn").click(function() {
		$(".content").css({
			left: 0
		});
		$(".cont").hide("slow");
	});
	$(".switc").click(function() {
		$(".cont").css({
			display: "block"
		});
		$(".content").css({
			left: "-100%"
		});
	});
	$(".back").click(function(){
		window.history.back();
	})
})