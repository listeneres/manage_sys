   import * as types from '../mutations_types/mutations_type.js';
   import $ from 'jquery'
   export default  {
        [types.RANDER](state,value){
          console.log(value)
           var url = 'http://localhost/dola-e-dream/charge_sys/serverTool/PHP/tw.php';  
          $.ajax(url, {  
            type:'GET', 
            async:false,
//          dataType:"jsonp",
//          jsonpCallback:'a',
            success:function(data){
              if(value){
                console.log(value)
                   var row= 10;
                 var start = (value-1)*row
                 var end = (value-1)*row + 9;
                   var data =JSON.parse(data)
                   var datas = data.slice(start,end)
                   state.datas=datas
                   var length = Math.ceil(data.length/row);
                   var pages = data.slice(0,length)
                   state.pages=pages;
              }else{
                   var row= 10;
                   var data =JSON.parse(data)
                   var datas = data.slice(0,9)
                   state.datas=datas
                   var length = Math.ceil(data.length/row);
                   var pages = data.slice(0,length)
                   state.pages=pages;
              }
            }
           })
        },
        [types.ADDGOODS](state){
          // console.log($('.model')[0])
          $('.model')[0].style.display="block";
          var url = 'http://localhost/dola-e-dream/charge_sys/serverTool/PHP/getMessage.php';  
          $.ajax(url, {  
            type:'post', 
            async:false,
//          dataType:"jsonp",
//          jsonpCallback:'a',
            success:function(data) { 
                 var data =JSON.parse(data)
                 state.Mdata=data;
                 location.onload();
            }
           })

        },
        [types.SAVE](state){
            
            var data='';
            
            for(var i=0;i<= $('.input-group').length-1;i++) {
              data = data +'"'+$('.input-group').eq(i).find('input').val()+'"'+','
            }
            data ='('+ data+')'
            data = data.replace(',"",)',')')
           
           var r= confirm('是否确定添加以下数据')
           if(r){
             $.ajax({
            type:"post",
            url:types.baseUrl + '/dola-e-dream/charge_sys/serverTool/PHP/insert.php',
            dataType:"json",
            async:false,
            data:{'data':data},
            success:function(response){ 
           } 
        });
            
              location.reload() 
            
           }else{
            
           }


        },
        [types.DOSEARCH](state,value){
            var url = 'http://localhost/dola-e-dream/charge_sys/serverTool/PHP/tw.php';  
          $.ajax(url, {  
            type:'GET', 
            async:false,
            data:value,
//          dataType:"jsonp",
//          jsonpCallback:'a',
            success:function(data) { 
                 var data =JSON.parse(data)
                 state.datas=data
            }
           })
        },
   }