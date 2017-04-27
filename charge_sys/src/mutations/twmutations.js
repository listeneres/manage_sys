import * as types from '../mutations_types/mutations_type.js';
import $ from 'jquery';
export default {
    [types.DELGOODS](state){
        var goodsid='';
     for(var i=0;i<= $('tbody').find("input:checkbox:checked").closest('tr').length-1;i++) {
       var goodsId = goodsId +','+ $('tbody').find("input:checkbox:checked").closest('tr').eq(i).find('td').eq(1).find('input').val();
        
     } 
     goodsId ='('+ goodsId.replace('undefined,','')+')'
        console.log( goodsId)
        
        var r= confirm('是否确定删除以下数据')
           if(r){
              $.ajax({
            type:"post",
            url:types.baseUrl + '/dola-e-dream/charge_sys/serverTool/PHP/delgoods.php',
            dataType:"json",
            async:false,
            data:{'goodsid':goodsId},
            success:function(response){ 
           } 
        });
            // alert("你删除以下数据成功!")
              location.reload() 
            
           }else{
            // alert("你取消了删除以下数据")
           }

    },    
    [types.CHANGEGOODS](state){
      console.log(111);
     
      var td=$('tbody').find("input:checkbox:checked").closest('tr').find('td')
      // var data={};
      // data.goodsId = td.eq(1).find('input').val()
      // data.typeId = td.eq(2).find('input').val()
      // data.brandId = td.eq(3).find('input').val()
      // data.goodsName = td.eq(4).find('input').val()
      // data.marks = td.eq(5).find('input').val()
      // data.goodsPrice = td.eq(6).find('input').val()
      // data.goodsOldPrice = td.eq(7).find('input').val()
      // data.goodsDis = td.eq(8).find('input').val()
      // data.goodsMes= td.eq(9).find('input').val()
      var data = "  " +"type_id = '"+td.eq(2).find('input').val()+"', brand_id = '"+td.eq(3).find('input').val()+"', goods_name = '"+td.eq(4).find('input').val()+"', mark ='"+td.eq(5).find('input').val()+"', goods_new_price = '"+td.eq(6).find('input').val()+"', goods_old_price ='"+td.eq(7).find('input').val()+"', goods_discount = '"+td.eq(8).find('input').val()+"', goods_message = '"+td.eq(9).find('input').val()+"' WHERE goods_id = '"+td.eq(1).find('input').val()+"'"
      console.log( data)
      var r= confirm('是否确定跟新以下这一条数据')
           if(r){
              $.ajax({
            type:"post",
            url:"http://localhost/dola-e-dream/charge_sys/serverTool/PHP/changGoods.php",
            dataType:"json",
            async:false,
            data:{"data":data},
            success:function(response){ 
           } 
        });
            // alert("你删除以下数据成功!")
              
            
           }else{
            // alert("你取消了删除以下数据")
           }

    },
    [types.ALL](state){
        if($( event.target).is(':checked')  ){
            $('tbody').find("input:checkbox").prop("checked",true);
        }else{
            $('tbody').find("input:checkbox").prop("checked",false);
        }

    }
}    