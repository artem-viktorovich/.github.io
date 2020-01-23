<?php

/* https://api.telegram.org/bot905971144:AAF6rH5dUd2RdfDsSQxpH2hk9oYpOq96ehY/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$massage = $_POST['user_massage'];
$token = "905971144:AAF6rH5dUd2RdfDsSQxpH2hk9oYpOq96ehY";
$chat_id = "-329645177";
$arr = array(
  'Имя: ' => $name,
  'Телефон: ' => $phone,
  'Сообщение: ' => $massage,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
}
?>