<?php
//	header("Access-Control-Allow-Origin: http://localhost:8080");
    include "../Global/Global.php";
    $sql = new sql();
    $user1 = $_GET['user1'];
    $user2 = $_GET['user2'];
    $user3 = $_GET['user3'];
    $user4 = $_GET['user4'];
    $user5 = $_GET['user5'];
    $user6 = $_GET['user6'];
    $user7 = $_GET['user7'];
    $user8 = $_GET['user8'];
    $user9 = $_GET['user9'];
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
    $sql = "insert into user(user_id,user_name,user_nickname,user_img,user_phone,user_email,user_qq,user_star,user_status)value('$user1','$user2','$user3','$user4','$user5','$user6','$user7','$user8','$user9')";
    // echo $res;
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