<?php
include_once('class/sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['name']) && empty($_POST['email']) && empty($_POST['phone']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage
        ]
    ); 
    exit();
}

if ($_POST){
    //@important: Please change this before using
    http_response_code(200);
    $subject = 'Contact from website: ' . $_POST['name'];
    $from = $_POST['email'];
    $message = 'Tel: '.$_POST['phone'].PHP_EOL.$_POST['message'];       
    //Actual sending email
    $sendEmail = new Sender($adminEmail, $from, $subject, $message);
    if($sendEmail->send()){
        echo json_encode(array("sent" => true, "message" => "Gracias por escribir 😊"));
    } else {
        echo json_encode(array("sent" => false, "message" => "Error al enviar correo"));
    }
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}