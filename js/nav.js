$(function() {

	$('.clue').click(function() {
		var num = $(this).index();
		$(this).addClass("clue-show").siblings().removeClass("clue-show");
		$(".menu-right-piece").eq(num).fadeIn('fast').siblings().fadeOut('fast');
	})
	var height = $(".menu-body-right").height() - $(".select-box").innerHeight() - 80;
	$(".nav").css({
		maxHeight: height
	});

	$('.home').on('click', function() {
		window.location.href = 'home.html'
	});
	//	获取最顶层设备
	function initmenu() {
		$.ajax({
			type: "get",
			url:serviceUrl + "api/device/topnode",
			async: true,
			dataType:'jsonp',
			jsonp:'callback',
			success:function(json){
				if(json !== 'no data!'){
					localStorage.setItem("device",json[0]["DeviceName"])
					var strHtml = "";
					for(var i = 0;i <json.length;i++){
						var childHtml = "";
						childHtml += "<li class='nav-list clear' id='"+json[i]["UUID"]+"_list'><i class='nav-icon fl'></i><span class='fl'>"+json[i]["DeviceName"]+"</span><a href='home.html?uuid="+json[i]["UUID"]+"' class='go fr'></a></li>";
						strHtml+=childHtml;
					}
					$(".nav-box").html(strHtml)
				}else{
					alert("设备数据缺少，请联系管理员")
				}
			},
			error:function(){
				
			}
		});
	}
	initmenu();
	function getmenuchild(uuid){
		$.ajax({
			type:"get",
			url:serviceUrl+"api/device/childnode",
			async:true,
			data:{
				uuid:uuid
			},
			dataType:'jsonp',
			jsonp:'callback',
			success:function(json){
				if(json !== "no data!"){
					var strHtml = "";
					for(var i = 0;i <json.length;i++){
						var childHtml = "";
						if(json[i]["HasChild"] == true){
							childHtml += "<li class='nav-list clear' id='"+json[i]["UUID"]+"_list'><i class='nav-icon fl'></i><span class='fl DeviceName'>"+json[i]["DeviceName"]+"</span><a href='xitong.html?uuid="+json[i]["UUID"]+"' class='go fr'></a></li>";
						}else{
							childHtml += "<li class='nav-list clear' id='"+json[i]["UUID"]+"_list'><i class='nav-icon fl'></i><span class='fl DeviceName'>"+json[i]["DeviceName"]+"</span><a href='equipment.html?uuid="+json[i]["UUID"]+"' class='go fr'></a></li>";
						}
						strHtml+=childHtml;
					}
					$(".nav-box").html(strHtml)
				}else{
					
				}
			},
			error:function(){
				
			}
		});
	}
	function getBread(uuid){
		$.ajax({
			type:"get",
			url: serviceUrl+"api/device/pathnode",
			async:true,
			data:{
				uuid:uuid,
			},
			dataType:'jsonp',
			jsonp:'callback',
			success:function(json){
				var DeviceName = localStorage.getItem("device");
				if(json !== 'no data!'){
					$(".breadtext").remove();
					var breadHtml = "";
					for(var i = 0;i<json.length;i++){
						breadHtml += "<span id='"+json[i]["UUID"]+"_bread' class='breadtext bread-text'>"+json[i]["DeviceName"]+"/</span>";
					}
					$(breadHtml).appendTo($(".select"));
				}else{
					var breadHtml = "<span id='"+uuid+"_bread' class='bread-text'>"+DeviceName+"/</span>";
					$(".select").html(breadHtml)
				}
			},
			error:function(){
				
			}
		});
	}
	$(".nav-box").on('click','.nav-list',function(){
		var uuid = $(this).attr("id").split('_')[0];
		getmenuchild(uuid);
		getBread(uuid);
	});
	$(".select-box").on('click','.bread-text',function(){
		var uuid = $(this).attr("id").split("_")[0];
		getmenuchild(uuid);
		getBread(uuid);
	})
})
