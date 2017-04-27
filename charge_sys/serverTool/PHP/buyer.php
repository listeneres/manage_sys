<?php
	include "./Global.php";
	$sql = new sql();
    class Buyer{
        public $user_id;
        public $user_name;
        public $goods_id;
        public $buy_number;
        public $buy_address;
        public $buy_time;
        public $goods_message;
    }
    $con = new mysqli($sql->host,$sql->user,$sql->password,$sql->table);
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = 'SELECT * FROM ralation,goods,user WHERE ralation.goods_id=goods.goods_id and ralation.user_id=user.user_id';
    $res = $con->query($sql);
    $arr = array();
    if($res->num_rows > 0){

        while($row = $res->fetch_assoc()){
            $buyer = new  Buyer();
            $buyer->user_id = $row["user_id"];
            $buyer->user_name = $row["user_name"];
            $buyer->goods_id= $row["goods_id"];
            $buyer->buy_number= $row["buy_number"];
            $buyer->buy_address = $row["buy_address"];
            $buyer->buy_time= $row["buy_time"];
            $buyer->goods_message= $row["goods_message"];
            array_push($arr, $buyer);
        }

        //返回json字符串
    }else {
        array_push($arr, "没有商品");
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
         print_r($str);

    }

 ?>
