//自己的算法
import $ from 'jquery'
function Create(){
  this.event=function(arr){
    for (var i = 0; i < arr.length; i++){
      $(arr[i]).change(function(){
        var str=$("#"+this.getAttribute('id')).val()
        if(this.getAttribute('id')=="tbNumber"){
          if(str.indexOf("@") < 0 & str.indexOf(".com") < 0 ){
            alert('邮箱格式必须含有@和.com');
          }
          else{
           var str=$("#"+this.getAttribute('id')).val()
           console.log(str);
         }
       }
     })
    }
  }

  this.data=function(arr){
       var obj={},arr1=[];
       for (var j = 0; j < arr.length; j++) {
         obj[arr[j].split('#')[1]]=$(arr[j]).val();
         arr1.push(obj)
       }
       return arr1
    }
    this.send=function(){
    var obj=this.data(['#tbDescription','#tbCategory','#tbSeries','#tbNumber','#tbLocation','#tbBrand','#tbCostPrice','#tbQty']);
    console.log(obj[0]);

     $.ajax({
      url:'http://localhost/lastProject/dola-e-dream/charge_sys/src/components/buyer/send.php',
      type:'get',
      async:true,
      dataType:'jsonp',
      jsonpCallback:'callback',
      data:{"user_name":obj[0].tbDescription,"user_nickname":obj[0].tbCategory,"user_img":obj[0].tbSeries,"user_phone":obj[0].tbNumber,"user_email":obj[0].tbLocation,"user_qq":obj[0].tbBrand,"user_star":obj[0].tbCostPrice,"user_status":obj[0].tbQty},
      success:function(res){

      }
    })









  }











}


export default new Create()
