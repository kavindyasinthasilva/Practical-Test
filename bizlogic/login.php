<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

    include("./conn.php");

    $Email = $_GET["email"];
    $Password = $_GET["password"];

            $Password=md5($Password);



    if(!isset($Email) || !isset($Password)) {
        echo json_encode(
            array(
                'message' => 'please enter both email and password.'
            )
        );
    } else {
        $query = "select * from users where email='$Email' AND password='$Password'";
        $result = mysqli_query($con, $query);
        $rows = mysqli_num_rows($result);
    
        if($rows == 1) {
            echo json_encode(
                array(
                    'message' => 'ok'
                )
            );
        } else {
            echo json_encode(
                array(
                    'message' => 'Invalid email or password.'
                )
            );
        }
    }
?>