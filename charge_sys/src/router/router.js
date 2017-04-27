import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../App.vue'
//yw
import login from '../components/login/loginComponent.vue';
import goods from '../components/goods/goodsComponent.vue';
import userlist from '../components/userlist/userlist.vue';
import buyer from '../components/buyer/buy.vue';
Vue.use(VueRouter)
var router = new VueRouter({
	routes: [{
		path: '/home/:id',
		name:"home",
		component: App,
		children: [
		     {
				path:'/',
				component:goods
			},
			{
				path:'/goods',
				component:goods
			},
			{
				path:'/userlist',
				component:userlist
			},
			{
		        path:'/buyer',
		        component:buyer
	        },
		]
	},{
	path:'/',
	component: login
	}]

})

export default router