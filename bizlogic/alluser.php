<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE"); 

    include("./conn.php");

   $con = mysqli_connect("localhost","root","","omobio");

    $query=mysqli_query($con,'select * from users');
$json_array=array();
while($rows=mysqli_fetch_assoc($query)){
    $json_array[]=$rows;
 }
 echo json_encode($json_array);                      
                                    
                                     

                                       
   
    
        


?>