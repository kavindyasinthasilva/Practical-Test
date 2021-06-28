<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Max-Age: 1000");
    header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
    header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

    include("./conn.php");

    $Email = $_GET["email"];
    $Password = $_GET["password"];
    $username = $_GET["username"];


    $Password=md5($Password); // encrypting passwords



   

    if(!isset($Email) || !isset($Password)) {
        echo json_encode(
            array(
                'message' => 'Enter Both email and password.'
            )
        );
    } else {
        $query = "INSERT INTO users(email,password,username) VALUES('$Email','$Password','$username')";
        $result = mysqli_query($con, $query);
      
    
        if($result) {
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