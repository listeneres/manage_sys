<template>
	<div id="userlist">

		<div class="userPop">
			<div class="popHeader">
				<h3 class="modal-title">新增/修改货品</h3>
			</div>
			<div class="pop-content">
				<tr>
					<td class="setting">
						<div class="input-group" style="width: 100%">
							<span class="input-group-addon">用户ID</span>
							<input id="useradd1" type="text" class="form-control">
						</div>
						<div class="input-group" style="display: ">
							<span class="input-group-addon">用户名称</span>
							<input id="useradd2" type="text" class="form-control">
						</div>
						<div class="input-group" style="display: ">
							<span class="input-group-addon">用户昵称</span>
							<input id="useradd3" type="text" class="form-control">
						</div>
						<div class="input-group">
							<span class="input-group-addon">头像</span>
							<input id="useradd4" type="text" class="form-control">
						</div>
						<div class="input-group" id="tbQtyGroup">
							<span class="input-group-addon">电话</span>
							<input id="useradd5" type="text" class="form-control" title="">
						</div>
						<div class="input-group" id="tbQtyGroup">
							<span class="input-group-addon">邮箱</span>
							<input id="useradd6" type="text" class="form-control" title="">
						</div>
						<div class="input-group" id="tbQtyGroup">
							<span class="input-group-addon">QQ号</span>
							<input id="useradd7" type="text" class="form-control" title="">
						</div>
						<div class="input-group" id="tbQtyGroup">
							<span class="input-group-addon">用户等级</span>
							<input id="useradd8" type="text" class="form-control" title="">
						</div>
						<div class="input-group" id="tbQtyGroup">
							<span class="input-group-addon">登录状态</span>
							<input id="useradd9" type="text" class="form-control" title="">
						</div>
					</td>
				</tr>
				<button id="saveGoods" type="button" class="btn btn-primary" @click="useradd()">保存提交</button>
			</div>
			<!--pop-content-->

		</div>

		<td class="goods-content-top">
			<div class="btn-group" role="group">
				<button id="btnAdd" type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="新增" @click="usershadow()" aria-label="Left Align">
									<span class="" aria-hidden="true"></span> 新增
								</button>

				<button id="btnDeletd" type="button" class="btn btn-default btn-sm" data-toggle="tooltip" title="删除" @click="userdel()" aria-label="Left Align">
									<span class="" aria-hidden="true"></span> 删除
								</button>
			</div>
		</td>
		<tr>
			<th><input type="checkbox" /></th>
			<th>用户ID</th>
			<th>用户名称</th>
			<th>用户昵称</th>
			<th>头像</th>
			<th>电话</th>
			<th>邮箱</th>
			<th>QQ号</th>
			<th>用户等级</th>
			<th>登录状态</th>
		</tr>
		<tr class="userdb" v-for="(item,val) in list.dfg">
			<td><input type="checkbox" name="" id="" value="" /></td>
			<td>{{item.userId}}</td>
			<td>{{item.userName}}</td>
			<td>{{item.nickName}}</td>
			<td>{{item.userImg}}</td>
			<td>{{item.userPhone}}</td>
			<td>{{item.userEmail}}</td>
			<td>{{item.userQq}}</td>
			<td>{{item.userStar}}</td>
			<td>{{item.userStatus}}</td>
		</tr>
	</div>
</template>

<script type="text/javascript">
	import $ from 'jquery';
	import {
		mapGetters,
		mapActions
	} from "vuex";
	//	import effect from '../../js/usereffect.js';
	export default {
		data: function() {
			return {
				value: 1,
				list: []
			}
		},
		//  computed: mapGetters(["findDetailData"]),
		methods: {
			...mapActions(["useradd"], ["userdel"]),
			//增
			useradd() {

				var message = {
					'useradd1': $('#useradd1').val(),
					'useradd2': $('#useradd2').val(),
					'useradd3': $('#useradd3').val(),
					'useradd4': $('#useradd4').val(),
					'useradd5': $('#useradd5').val(),
					'useradd6': $('#useradd6').val(),
					'useradd7': $('#useradd7').val(),
					'useradd8': $('#useradd8').val(),
					'useradd9': $('#useradd9').val(),
				}
				this.$store.dispatch("useradd", message);
			},
			//删
			userdel() {
				this.$store.dispatch("userdel")
			},
			//查
			//  	    checkGoods(){}
			//改
			//  	    changeGoods(){}
			usershadow() {
				$('.userPop').css('display', 'block').find('#saveGoods').click(function() {
					$('.userPop').css('display', 'none');
				});
			}
		},
		beforeMount: function() {
			this.$store.dispatch('userData');
			this.list = this.$store.state;
			console.log(this.list);
		},
		updated: function() {
			$('.userdb').click(function() {
				$(this).find(':checkbox').prop('checked', !$(this).find(':checkbox').prop('checked'));
			}).find(':checkbox').click(function() {
				$(this).prop('checked', !$(this).prop('checked'));
			})
		}

	}
</script>

<style lang="css">
	@import url("./userlist.css");
</style>