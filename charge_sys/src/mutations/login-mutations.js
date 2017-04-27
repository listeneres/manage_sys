import * as types from '../mutations_types/mutations_type.js';
import $ from 'jquery';
import {baseUrl} from '../js/baseURL.js'
import router from "../router/router.js"
   export default {
   	    [types.CHECKLOGIN](state,value){
   	    	console.log(value)
            $.ajax({
            	type:'GET',
            	url:baseUrl+"/dola-e-dream/charge_sys/serverTool/Login/Login.php",
            	async:true,
            	dataType:"jsonp",
            	jsonpcallback:'callback',
            	data:{"names":value.userName,"psw":value.psw},
            	success:function(res){
            		if(res==null){
            			console.log("空")
            			state.loginData = false
            			return state
            		}else{
            			state.loginData= JSON.parse(res);
            			console.log(state.loginData[0])
            			if(value.userName == state.loginData[0].manager_name && value.psw ==state.loginData[0].manager_psw){
            				if(state.loginData[0].manager_mark=='admin'){
            					router.push({name:"home",params: {id:'VIP'+state.loginData[0].manager_id}})
            				}else{
            					router.push({name:"home",params: {id:state.loginData[0].manager_id}})
            				}
            			}
            			return state
            			}
					
            	}
            });
        }
  }    
