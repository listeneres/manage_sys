<?php
   
    header("Access-Control-Allow-Origin: http://localhost:8080");
    include "./Global.php";
    $sql = new sql();
    
    if($_POST['data']){
         $data = $_POST['data'];
     }else{
        $data='';
     }
    $con = new mysqli($sql->host,$sql->user,$sql->password,$sql->table);
    $con->query("set names utf8"); //设置编码为utf8 显示中文
     
     $sql = ' update goods set '.$data;
     $res = $con->query($sql);
     $con->close(); //关闭数据库

 ?>
