<?php 
$name = stripslashes(htmlspecialchars($_POST['name']));
$phone = stripslashes(htmlspecialchars($_POST['phone']));

if(empty($name) || empty($phone)){
echo '<h1 style="color:red;">Пожалуйста заполните все поля</h1>';
echo '<meta http-equiv="refresh" content="2; url=http://'.$_SERVER['SERVER_NAME'].'">';
}
else{
    $subject = 'Заказать дзвонок - Polarius';
    $addressat = "prickly4528@gmail.com";
    $success_url = 'index.html';
    $message = "Имя: {$name}\nКонтактный телефон: {$phone}\n{$button} ";
    $verify = mail($addressat,$subject,$message,"Content-type:text/plain;charset=utf-8\r\n");
    if ($verify == 'true'){
        header('Location: '.$success_url);
        exit;
    } else 
        {
        echo '<h1 style="color:red;">Произошла ошибка!</h1>';
        }
}
?>