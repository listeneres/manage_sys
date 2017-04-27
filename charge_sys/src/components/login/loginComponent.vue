<template>
		<div id="zm_login" >
		<!--v-if="!checkLogin[0] ? true : checkLogin[0] == false ? true : false"-->
			<div class="wrap">
				<div class="secL">
					<h2>企业通讯与销售管理平台</h2>
					<p>
						融合呼叫中心、CRM、OA办公、企业微信等多<br> 种应用，基于云计算SaaS平台架构，随时随地只<br> 要有网络的地方都可使用，超过20万家企业见证<br> 其安全稳定可靠，值得信赖。
					</p>
				</div>
				<div class="secR">
					<form method="post" name="frmLogin" id="loginForm">
						<div class="form">
							<h1>登录平台</h1>
							<p :style="{color:checkLogin[0] == false ?'red':''}">{{checkLogin[0] == false ? '请输入正确的用户名和密码' :'欢迎使用XXX后台管理系统'}}</p>
							<div class="item clearfix">
								<label for="userNameIpt"></label>
								<input type="text" tabindex="1" id="userNameIpt" name="dtoUserName" placeholder="请输入用户名" v-model.trim="userName">
							</div>
							<div class="item itempass clearfix">
								<label for="password"></label>
								<input type="password" tabindex="2" id="password" name="password" autocomplete="true" placeholder="请输入密码" v-model.trim="psw">
							</div>
							<div class="item validatepic clearfix">
								<img id="Code" src="../../../images/12.png" width="75" height="30" style="display: inline; float: left;" />
								<input id="pwdInput" name="dtoUserCode" tabindex="3" class="ipt ipt-y f_l" type="text" style="margin-right: 5px; display: inline;" v-model.trim="code" />
								<a tabindex="4" class="changepic" id="forGetPassword" href="#">换一张?</a>
							</div>
							<div class="item itemRadio clearfix">
								<input type="checkbox" style="float: left;width:13px;height: 25px" id="radioPass" onclick="checkbox();">&nbsp;记住密码
								<a href="" style="float: right;">忘记密码?</a>
							</div>

							<div class="item" id="btnSubmit">
								<button type="button" tabindex="5" id="btnSubmit" @click="loginBtn">登&nbsp;&nbsp;录</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import login from "../../js/login.js"
	import $ from 'jquery'
	import {mapGetters, mapActions} from "vuex";
	import router from "../../router/router.js"
	export default {
		data: function() {
			return {
				isLogin: true,
				userName: '',
				psw: '',
				code: ''
//				aa:''
			}
		},
		methods: {
			...mapActions(["loginBtn"]),
			loginBtn: function() {
				this.isLogin = false;
				var obj = {
					userName: this.userName,
					psw: this.psw,
					code: this.code
				}
				this.$store.dispatch("checkLogin",obj)
				
				console.log(this.aa)
			}
		},
		computed: mapGetters(["checkLogin"])
	}
</script>

<style lang="css">
	@import url("../../../css/login.css");
</style>