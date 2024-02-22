<?php
  $name = $_POST['name'];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  if(!empty($email) && !empty($message)&& !empty($subject)&& !empty($name)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "mail@mail.com"; //E-mail aqui
        $subject = "De: $name <$email>";
        $body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage: $message\n\nRegards, \n$name";
        $sender = "Para: $email";
        if(mail($receiver, $subject, $body, $sender)){
            echo "Sua mensagem foi enviada.";

        }else{
            echo "Sua mensagem não foi enviada.";
        }

    }else{
        echo "Precisa de um e-mail válido.";
    }

  }else{
    echo "Todos os campos precisam ser preenchidos.";
  }


?>