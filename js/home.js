//	//样式
//var top = $(".hint-box").height();

$(function() {


	
	//获取顶层设备
	$.ajax({
		type: "GET",
		dataType: "jsonp",
		url: serviceUrl + "api/device/topnode",
		jsonp: "callback",
		success: function(json) {
			//			console.log(json)
			if(json == "no data!") {
				alert("设备数据缺失，请联系管理员");
				window.location.href = "login.html";
			} else {
				if(json.length == 1) {
					localStorage.setItem("taguuid", json[0]["UUID"]);
					setTimeout(function() {
						setSysImg(json[0]["UUID"]);
					}, 100);
				} else {
					window.location.href = "xttu.html?uuid=" + json[0]["UUID"];
				}
			}
		},
		error: function() {
			alert("服务器请求错误，请刷新页面")
		}
	});
	//获取设备或者系统的详细信息
function setSysImg(sysuuid) {
	$.ajax({
		type: "GET",
		data: {
			uuid: sysuuid
		},
		dataType: "jsonp",
		url: serviceUrl + "api/device/devices",
		jsonp: "callback",
		success: function(json) {
			if(json == "no data!") {
				alert("设备数据缺失，请联系管理员");
				window.location.href = "login.html";
			} else {
				imgFile(json["TagPicture"])
			}
		},
		error: function() {

		}
	})
}
//获取关联示意图
function imgFile(filenames) {
	if(filenames !== null && filenames !== "") {
		filenames = filenames.replace("..", ".");
		var fileArr = new Array();
		fileArr = filenames.split(",");
		localStorage.setItem("tagfilename", fileArr[0]);
		$("#sysimg").attr("src", serviceUrl + "DeviceImg/" + fileArr[0]);
		$("#sm-sysimg").attr("src", serviceUrl + "DeviceImg/" + fileArr[0])
//		AddTagdiv();
	} else {
		alert("没有设置示意图关联，请联系管理员！");
	}
}
})