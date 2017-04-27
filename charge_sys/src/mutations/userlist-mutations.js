import $ from 'jquery';
import * as types from '../mutations_types/mutations_type.js';
export default {
	[types.ADDGOODS](state) {
		console.log(111)
	},
	[types.USERDATA](state) {
		console.log(22);
		$.ajax({
			type: "GET",
			url: 'http://localhost/dola-e-dream/charge_sys/serverTool/userlist/userlist.php',
			dataType: "jsonp",
			async: 'false',
			success: function(res) {
				return state.dfg = JSON.parse(res);
			}
		});
	},
	[types.USERDEL](state) {
		var leng = $('.userdb').length;
		var arr = [];
		var selid;
		console.log($('.userdb').find(':checkbox').prop('checked'))
		$('.userdb').find(':checkbox').each(function(index, val) {
			if($(this).prop('checked')) {
//				console.log( $(this).parent().next().html());
//				arr.push($(this).parent().next().html());
				selid = $(this).parent().next().html();
				console.log(selid);
			} else {
				console.log('false')
			}
		})
		$.ajax({
			type: "GET",
			url: 'http://localhost/dola-e-dream/charge_sys/serverTool/userlist/deluserlist.php',
			dataType: "jsonp",
			async: 'false',
			data:{"selid":selid},
			success: function(res) {
				alert("删除数据成功");
				self.location = 'http://localhost:8080/#/userlist';
				return state.userdel = JSON.parse(res);
			}
		});
	},
	[types.USERADD](state,value) {
		console.log(value);
		var user1 = value.useradd1;
		var user2 = value.useradd2;
		var user3 = value.useradd3;
		var user4 = value.useradd4;
		var user5 = value.useradd5;
		var user6 = value.useradd6;
		var user7 = value.useradd7;
		var user8 = value.useradd8;
		var user9 = value.useradd9;
		if (user1=="") {
			alert("用户ID不能为空,插入数据失败");
			return;
		}
		$.ajax({
			type: "GET",
			url: 'http://localhost/dola-e-dream/charge_sys/serverTool/userlist/adduserlist.php',
			dataType: "jsonp",
			async: 'false',
			data:{'user1':user1,'user2':user2,'user3':user3,'user3':user3,'user4':user4,'user5':user5,'user6':user6,'user7':user7,'user8':user8,'user9':user9},
			success: function(res) {
				
//				self.location = 'http://localhost:8080/#/userlist';
				location.reload(true);
				alert("插入数据成功");
				return state.useradd = JSON.parse(res);
				
			}
		});
	}

}