<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$token = "905971144:AAF6rH5dUd2RdfDsSQxpH2hk9oYpOq96ehY";
$chat_id = "-329645177";
 
	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $name,
        'email' => $email,
    	'message' => $message
    ); 
echo json_encode($result);


    $txt = "";
foreach($result as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

?>