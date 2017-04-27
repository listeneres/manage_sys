<template>
     <div id="DH-table">
    <div>
<!--    查询：<input type="" name=""><input type="button" name=""> -->

      <input type="button" name="" value="增加" @click='addBuy'>

      <input type="button" name="" value="删除">

      <input type="button" name="" value="修改">
    </div>

  <div class="bs-example" data-example-id="contextual-table">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th v-for="(value,key) in buydata[0]">{{key}}</th>
          </tr>
        </thead>
        <tbody>
            <tr class="active" v-for="(value,key) in buydata">
            <th>1</th>
            <td>{{value.user_id}}</td>
            <td>{{value.user_name}}</td>
            <td>{{value.goods_id}}</td>
            <td>{{value.buy_number}}</td>
            <td>{{value.buy_address}}</td>
            <td>{{value.buy_time}}</td>
            <td>{{value.goods_message}}</td>
          </tr>
        </tbody>
   <!--      <tfoot>
          <tr>
            <td>
                <div>
                    <ul>
                      <li>
                        <a></a>
                      </li>
                    </ul>
                  </div>
            </td>
          </tr>
        </tfoot> -->
      </table>
    </div>
  </div>
</template>
 <style type="text/css">
  @import url(./buy.css)
</style>

<script type="text/javascript">
  import {mapGetters, mapActions} from "vuex";
  export default {
    data: function(){
      return{
        num:null
      }
    },
    computed: mapGetters(['buydata']),
    methods:{
      ...mapActions(["addBuy"]),
     addBuy () {
        try {
         this.$store.dispatch("addBuy")
       }catch(error) {
         alert(error)
       }
     }
   },
    created(){
    if(location.hash=="#/buyer"){
        try {
         this.$store.dispatch("buyupdata",location.hash)
       }catch(error) {
         alert(error)
       }
    }
   }

}
</script>










