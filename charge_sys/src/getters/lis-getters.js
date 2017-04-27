export default {
    arrString: function (state) {
        return state.random
    },
    phoneNum:function(state){
    	return state.phoneNum
    },
    datas:function(state){
//  	var datas = JSON.parse(datas)
    	return state.datas
    },
    Mdata:function(state){
//      var datas = JSON.parse(datas)
        return state.Mdata
    },
    pages:function(state){
     return state.pages
   },
   checkLogin: function (state) {
        return state.loginData
    },
    buydata:function(state){
      return  state.buyerdata
    },
    dfg:function(state){
        return state.dfg
    },
    userdel:function(state){
        return state.userdel
    },
    useradd:function(state){
        return state.useradd
    }
}