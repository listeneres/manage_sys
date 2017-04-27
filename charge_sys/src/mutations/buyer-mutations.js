import * as types from '../mutations_types/mutations_type.js';
import buycount from '../components/buyer/DHcount.js';
import $ from 'jquery';
   export default  {
        [types.BUYERDATA](state,value){
          if((value.split('/')[value.split('/').length-1]).indexOf('VIP') > 0){
            $.ajax({
              url:'http://localhost/lastProject/dola-e-dream-v2.0/charge_sys/serverTool/PHP/buyer.php',
              dataType:'jsonp',
              jsonpCallback:'user',
              success:function(res){
                var  data=JSON.parse(res)
                console.log(1,data[0]);
                state.buyerdata=data;
                console.log(state.buyerdata);
              }
            })
          }
        },
         [types.ADDBUY](state){
          var self=this;
          var str=`
          <div class="model">
          <div class="shadow  clear">
          <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
          <h3 class="modal-title"><span class="" aria-hidden="true"></span>新增用户信息</h3>
          </div>
          <div class="mes clear">
          <div class="input-group" >
          <span class="input-group-addon">姓名</span>
          <input id="tbDescription" type="text" class="form-control">
          <span class="input-group-addon"><span class=""></span></span>
          </div>
          <div class="input-group" >
          <span class="input-group-addon">昵称</span>
          <input id="tbCategory" type="text" class="form-control">
          <span class="input-group-addon"><span class=""></span></span>
          </div>
          <div class="input-group" >
          <span class="input-group-addon">图像</span>
          <input id="tbSeries" type="text" class="form-control">
          <span class="input-group-addon"><span class=""></span></span>
          </div>
          <div class="input-group" >
          <span class="input-group-addon">邮箱</span>
          <input id="tbNumber" type="text" class="form-control">
          <span class="input-group-addon"><span class=""></span></span>
          </div>
          <div class="input-group" >
          <span class="input-group-addon">QQ&nbsp;</span>
          <input id="tbLocation" type="text" class="form-control">
          <span class="input-group-addon"><span class=""></span></span>
          </div>
          <div class="input-group" >
          <span class="input-group-addon">电话</span>
          <input id="tbBrand" type="text" class="form-control">
          <span class="input-group-addon"><span class=""></span></span>
          </div>
          <div class="input-group">
          <span class="input-group-addon">等级</span>
          <input id="tbCostPrice" type="text" class="form-control">
          <span class="input-group-addon"><span class=""></span></span>
          </div>
          <div class="input-group" id="tbQtyGroup">
          <span class="input-group-addon">状态</span>
          <input id="tbQty" type="text" class="form-control">
          <span class="input-group-addon"><span class=""></span></span>
          </div>
          </div>
          <div class="img">
          </div>
          <div class="modal-footer">
          <button id="saveGoods" type="button" class="btn btn-primary" ><span class="" aria-hidden="true"></span>保存提交</button>
          </div>
          </div>
         </div>`
          $("body").append(str);
          buycount.event(['#tbDescription','#tbCategory','#tbSeries','#tbNumber','#tbLocation','#tbBrand','#tbCostPrice','#tbQty']);
          $("#saveGoods").click(function(){
          buycount.send()
          })







  }

}
