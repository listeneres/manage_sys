<template>
	<div>
		<div class="app" >
			<div class="model">
				<div class="shadow  clear">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true" @click="closeWin">×</button>
						<h3 class="modal-title"><span class="" aria-hidden="true"></span>新增/修改货品</h3>
					</div>
					<div class="mes clear">
						<div class="input-group" v-for='(value,key,index) in Mdata[0]'>
							<span class="input-group-addon addS" :id="'tbutton'+index">{{key}}</span>
							<input :id="'tbDescription'+index" type="text" class="form-control" :value="''">
							<span class="input-group-addon"><span class=""></span></span>
						</div>
					</div>
					<div class="img">
						<img src="../images/aa.jpg" alt="">
					</div>
					<div class="modal-footer">
						<span id="indexGoods" style="color:red">请确认商品信息</span>
						<button id="saveGoods" type="button" class="btn btn-primary"  @click="save()"><span class="" aria-hidden="true"></span>保存提交</button>

					</div>
				</div>
			</div>
			<div id="content-top">
				<div>
					<span class="guan">后台管理系统</span>
					<button type="button" class="btn btn-link text" style="color: #323f4c" aria-label="Left Align" id="btnNavigation">

						<span class="" aria-hidden="true"></span>
						隐藏导航栏
					</button>
				</div>
				<div class="container-fluid">
					<div id="settings">
						<button class="btn btn-link"><span id="admin">您好：{{managerName}}用户 </span></button>
						<!--<span :style="{color: aa}">您好：{{checkLogin[0]?checkLogin[0].manager_name:"请登录"}}（{{checkLogin[0]?checkLogin[0].manager_id:""}}）</span>-->
						<button type="button" class="btn btn-link"><i class=""></i> 注销</button>
						<ul class="dropdown-menu" id="setting-select-shop">
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div id="sidebar">
			<ul>
				<li class="">
					<router-link to="/xiao">
						<b class="c1"></b>
						<span class="icon_bar made"><i class="icons-siderbar "></i> </span>
						<a href="" target="rightBottomFrame">
							<span>   销售汇总</span>
						</a>
					</router-link>
				</li>

				<li class="listactive">
					<router-link to="/goods">
						<b class="c2" style="width: 40px;"></b>
						<span class="icon_bar made active"><i class="icons-siderbar"></i></span>
						<a href="" target="rightBottomFrame">
							<span>存货列表</span>
						</a>
					</router-link>

				</li>

				<li>
					<router-link to="/buyer">
						<b class="c3"></b>
						<span class="icon_bar made"><i class="icons-siderbar "></i></span>
						<a href="" target="rightBottomFrame">
							<span>订单列表</span>
						</a>
					</router-link>
				</li>

				<li class="">
					<router-link to="/userlist">
						<b class="c4"></b>
						<span class="icon_bar made"><i class="icons-siderbar "></i></span>
						<a href="" target="rightBottomFrame">
							<span>客户列表</span>
						</a>
					</router-link>
				</li>

				<li class="">
					<router-link to="/">
						<b class="c8"></b>
						<span class="icon_bar made"><i class="icons-siderbar "></i></span>
						<a href="" target="rightBottomFrame">
							<span>我的店铺</span>
						</a>
					</router-link>
				</li>
			</ul>
		</div>
		<div id="content">
			<router-view></router-view>
		</div>

	</div>
</div>
</template>
<script type="text/javascript">
	import login from "./js/login.js"
	import $ from 'jquery'
	import {mapGetters, mapActions} from "vuex";
	export default {
		data: function() {
			return {
				
				userName: '',
				psw: '',
				code: '',
				managerName:''
			}
		},
		methods: {
			...mapActions(["save"]),
			save(){
				var arr=JSON.stringify(this.datas[0]).replace('{','').replace('}','').split(',')

				this.$store.dispatch("save",arr)
			},
			closeWin(){
				try {
					$('.model').hide()
				}catch(error) {
					alert(error)
				}
			}		
		},
		computed: mapGetters(['datas','Mdata','checkLogin']),
		created(){
			if(location.hash.split("/")[location.hash.split("/").length-2]=="home"){
				this.managerName = location.hash.split("/")[location.hash.split("/").length-1]
			}else{
				location.href="http://localhost:8080"
			}
		}
	}
</script>

<style lang="css">
	@import url("../css/login.css");
	@import url("../css/strage.css");
</style>