$(function() {
	layui.use(['element', 'layer', 'laydate'], function() {
		var element = layui.element();
		var layer = layui.layer;
		var laydate = layui.laydate;
		var start = {
//			min: laydate.now(),
			max: '2099-06-16 23:59:59',
			istoday: false,
			choose: function(datas) {
				end.min = datas; //开始日选好后，重置结束日的最小日期
				end.start = datas //将结束日的初始值设定为开始日
			}
		};

		var end = {
//			min: laydate.now(),
			max: '2099-06-16 23:59:59',
			istoday: false,
			choose: function(datas) {
				start.max = datas; //结束日选好后，重置开始日的最大日期
			}
		};

		document.getElementById('sdate').onclick = function() {
			start.elem = this;
			laydate(start);
		}
		document.getElementById('edate').onclick = function() {
			end.elem = this
			laydate(end);
		}

		element.on('collapse(test)', function(data) {
			layer.msg('展开状态' + data.show)
		})
	})
})