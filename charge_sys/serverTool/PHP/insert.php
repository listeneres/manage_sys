<?php
	// header("Access-Control-Allow-Origin: http://localhost:8080");
 //    include "../../Global/Global.php";
 //     $phone = $_GET["phone"];
 //     $code = $_GET["code"];
	//  $psw = $_GET["psw"];
	//  $check = $_GET["check"];
	//  $num = $_GET["num"];
	//  $db = new MySQLi("localhost","root","","fruit");
	//  !mysqli_connect_error() or die("连接失败！");
	// $sql = "insert into user values('{$phone}','{$code}','{$psw}','{$check}','{$num}')";
	// $result = $db->query($sql);
	// echo $phone;
    header("Access-Control-Allow-Origin: http://localhost:8080");
    include "./Global.php";
    $sql = new sql();
    
    if($_POST['data']){
         $data = $_POST['data'];
     }else{
        $data='';
     }
   
    $con = new mysqli($sql->host,$sql->user,$sql->password,$sql->table);
    // mysqli_query($con,"set names utf8");
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'insert into goods (goods_id,type_id,brand_id,goods_name,goods_new_price,goods_old_price,goods_discount,goods_small_img,goods_message,goods_big_img,goods_count,goods_size,goods_color,goods_collection,goods_star,mark) values'.$data;
    $res = $con->query($sql);

 ?>
 