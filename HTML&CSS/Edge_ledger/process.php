<?php
  if (isset($_POST['email'])) {
    $admin_email = "bradedgeledger.net";
    $name = $_POST['name'];
    $email  =  $_POST ['phone'];
    $message  = $_POST['message'];


    //send email
    mail($admin_email, "New Form Submission", $message .'-' . $phone, "From" . $email);

    header('Location:http://edgeledger.net/success.html');
  }