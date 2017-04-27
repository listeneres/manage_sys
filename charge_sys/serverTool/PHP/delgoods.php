<?php
    //解决跨域问题
   
    header("Access-Control-Allow-Origin: http://localhost:8080");
    include "./Global.php";
    $sql = new sql();
    echo $_POST['goodsid'];
    if($_POST['goodsid']){
         $id = $_POST['goodsid'];
     }else{
        $id='';
     }
   
    $con = new mysqli($sql->host,$sql->user,$sql->password,$sql->table);
    // mysqli_query($con,"set names utf8");
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'delete from goods where goods_id in'.$id.'';
    $res = $con->query($sql);
   

 ?>
