<?php
$error = '';
if ($_POST) { // если передан массив POST
    $name_about = htmlspecialchars($_POST["name_about"]); // пишем данные в переменные и экранируем спецсимволы
    $phone_about = htmlspecialchars($_POST["phone_about"]);
    $email_about = htmlspecialchars($_POST["email_about"]);
}

if ($name_about=='' or $phone_about=='' or $email_about=='') {    /* Проверка на пустые поля*/
    $error='Заполните необходимые поля';
}
else {
    $femail = 'elena.for.job.2015@yandex.ru';
    $address = 'elena.for.job.2015@yandex.ru';		/*Тут указіваем E-mail, куда будет отправляться письмо */

    $sub="Заявка с сайта";
    $mes = "
		<p>Имя: </p> $name_about <hr>
		Телефон:  $phone_about <hr>
		email:  $email_about";

    $sub.=' mydomain';

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
