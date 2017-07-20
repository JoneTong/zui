
$(function(){
	$("#btn").click(function(){
		if($("#user").val()==""||$("#pass").val()==""){
			$(".hint").text("用户名和密码不能为空")
		}else{
			var username=$("#user").val();
			var password=$("#pass").val();
			$.ajax({
				type:"GET",
				url:serviceUrl+"api/user/Login",
				dataType:"jsonp",
				data:{username:username,pwd:password},
				jsonp:"callback",
				success:function(json){
					if(json=="user is not exist!"){
						$(".hint").text("用户名和密码不对");
					}else{
						localStorage.setItem("MCODE",json["MCODE"]);
						localStorage.setItem("ENAME",json["ENAME"]);
						localStorage.setItem("LOGINID",json["LOGINID"]);
						localStorage.setItem("DEPTCODE",json["DEPTCODE"]);
						localStorage.setItem("DEPT",json["DEPT"]);
						localStorage.setItem("POSITION",json["POSITION"]);
						window.location.href="home.html";
					}
				},
				error:function(){
					
				}
			})
		}
	})
})
