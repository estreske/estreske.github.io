<?php 

$email = $_GET['email'];
$name = $_GET['name'];
$subject = $_GET['subject'];
$body = $_GET['body'];

$to      = 'estreske@gmail.com';
$subject = 'New Contact Form Submission from Streske.com';
$message = "You have received a new contact submission from Streske.com containing the following info:<br><br>Email: " . $email . "<br><br>Name: " . $name . "<br><br>Subject: " . $subject . "<br><br>Body: " . $body;
$headers = 'From: contact@streske.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

$mail = mail($to, $subject, $message, $headers);

if (!$mail) {
  echo "Mail Could not be sent";
}


 ?>