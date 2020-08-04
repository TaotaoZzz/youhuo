<?php
header('content-type:text/html;charset=utf-8');

define('HOST','localhost');
define('USERNAME','root');
define('PASSWORD','root');
define('DBNAME','youhuobuy');

$conn = @new mysqli(HOST,USERNAME,PASSWORD,DBNAME);

if($conn->connect_error){
    die('数据连接失败'.$conn->connect_error);
}



$result = $conn->query("select * from youhuo");

$arr = array();
for($i=0;$i<$result->num_rows;$i++){
    $arr[$i] = $result->fetch_assoc();
}
echo json_encode($arr);