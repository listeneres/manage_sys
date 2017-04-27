import Vue from 'vue'
import Vuex from 'vuex'
import $ from 'jquery'
import actions from '../actions/action.js'
import mutations from '../mutations/lis-mutations.js'
import getters from '../getters/lis-getters.js'
Vue.use(Vuex)
console.log(mutations)
const state = {
	random:'',
	phoneNum:'',
	psw:'',
	datas:'',
    Mdata:'',
	loginData:'',
	buyerdata:[],
};
export default new Vuex.Store({
	state,
    mutations,
	actions,
	getters
})
