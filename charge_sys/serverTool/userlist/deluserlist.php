<?php
//	header("Access-Control-Allow-Origin: http://localhost:8080");
    include "../Global/Global.php";
    $sql = new sql();
    $selid = $_GET["selid"];
    class Userd{
        public $userId;
        public $userName;
        public $nickName;
        public $userImg;
        public $userPhone;
        public $userEmail;
        public $userQq;
        public $userStar;
        public $userStatus;
    }
    $con = new mysqli($sql->host,$sql->user,$sql->password,$sql->table);
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = "delete from user where user_id='$selid'";
//  $res = $con->query($sql);
    // echo $res;
//  $arr = array();
//  if($res->num_rows > 0){
//
//      while($row = $res->fetch_assoc()){
//          $userd = new Userd();
//          $userd->userId = $row["user_id"];
//          $userd->userName = $row["user_name"];
//          $userd->nickName = $row["user_nickname"];
//          $userd->userImg = $row["user_img"];
//          $userd->userPhone = $row["user_phone"];
//          $userd->userEmail = $row["user_email"];
//          $userd->userQq = $row["user_qq"];
//          $userd->userStar = $row["user_star"];
//          $userd->userStatus = $row["user_status"];
//          array_push($arr, $userd);
//      }
//
//      //返回json字符串
//  }else {
//      array_push($arr, "没有商品");
//  }

		$arr = array();
		if(mysqli_query($con,$sql)){
			array_push($arr, "ture");
		}else{
			array_push($arr, "false");
		}
    //判断是否是jsonp的请求
    //isset(var) 判断变量是否被定义
    if(isset($_REQUEST['callback'])){
        // 表示是一个jsonp的请求
        //找到callback 的函数名称
        $callback = $_REQUEST['callback'];
        //调用callback的函数
        $str = json_encode($arr);
        print_r( $callback."('$str')");
    }else{
        $str = json_encode($arr);
        // echo json_encode($arr);
         // print_r( $str );
         print_r( $str);

    }

  //  print_r($str)

 ?>
