<?php 

$email = $_GET['email'];
$name = $_GET['name'];
$from_subject = $_GET['subject'];
$from_body = $_GET['body'];

$to      = 'estreske@harryfox.com';
$subject = 'New Contact Form Submission from Streske.com';
$message = "You have received a new contact submission from Streske.com containing the following info:
Email: " . $email . "
Name: " . $name . "
Subject: " . $from_subject . "
Body: " . $from_body;
$headers = 'From: contact@streske.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

$mail = mail($to, $subject, $message, $headers);

if (!$mail) {
  echo "Mail Could not be sent";
}


 ?>