<?php
	//解决跨域问题
//	 header("Access-Control-Allow-Origin: http://localhost:8080");
    include "../Global/Global.php";
    $name = $_GET["names"];
    $psw = $_GET["psw"];
    $sql = new sql();
    class manager{
        public $manager_id;
        public $manager_name;
        public $manager_type;
        public $manager_psw;
        public $manager_mark;
    }
    $con = new mysqli($sql->host,$sql->user,$sql->password,$sql->table);
    $con->query("set names utf8"); //设置编码为utf8 显示中文
    $sql = "select * from manager where manager_name='$name' && manager_psw='$psw'";
    $res = $con->query($sql);
    $arr = array();
    if($res->num_rows > 0){
        while($row = $res->fetch_assoc()){
            $manager = new manager();
            $manager->manager_id = $row["manager_id"];
            $manager->manager_name = $row["manager_name"];
            $manager->manager_type = $row["manager_type"];
            $manager->manager_psw = $row["manager_psw"];
            $manager->manager_mark = $row["manager_mark"];
            array_push($arr, $manager);
        }

        //返回json字符串
    }else {
        array_push($arr, false);
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
    $con->close(); //关闭数据库
 ?>
