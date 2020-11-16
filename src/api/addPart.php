<?php
header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

foreach($_POST as $row){
   $name=$row["name"]; 
   echo $name;
}


?>