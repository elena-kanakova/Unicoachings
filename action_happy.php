<?php
$error = '';
if ($_POST) { // если передан массив POST
    $name_happy = htmlspecialchars($_POST["name_happy"]); // пишем данные в переменные и экранируем спецсимволы
    $phone_happy = htmlspecialchars($_POST["phone_happy"]);
    $email_happy = htmlspecialchars($_POST["email_happy"]);
}

if ($name_happy=='' or $phone_happy=='' or $email_happy=='') {    /* Проверка на пустые поля*/
    $error='Заполните необходимые поля';
}
else {
    $femail = 'seminar@unicoachings.com';
    $address = 'seminar@unicoachings.com';		/*Тут указіваем E-mail, куда будет отправляться письмо */

    $sub="Заявка с сайта";
    $mes = "
		<p>Имя: </p> $name_happy <hr>
		Телефон:  $phone_happy <hr>
		email:  $email_happy";

    $sub.=' Unicoachings';

    $sub = "=?utf-8?B?" . base64_encode($sub) . "?=";



    $verify = mail($address, $sub ,$mes, "Content-type:text/html; charset = utf-8\r\nFrom:$femail");

}

if ((strlen($error) == 0) && !$verify) {
    $error = 'Заявка не отправлена';
}
if(strlen($error)>0){
    $result = array('error' => $error);
} else {
    $result = array('result' => 1);
}
header("Content-type: application/json; charset=UTF-8");
header("Cache-Control: must-revalidate");
header("Pragma: no-cache");
header("Expires: -1");
print json_encode($result);
?>
