<?php
		header("Access-Control-Allow-Origin: http://localhost:8080");
        include "./DBHelper.php";	
	    $sql = "select * from goods";   
	    $array = query($sql);
	    if(count($array) > 0){	
	        echo json_encode($array, true);
	    }else{
	        echo '123';
	    }
?>