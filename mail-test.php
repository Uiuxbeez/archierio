<?php
$to = "mages.sbca@gmail.com"; // your email to receive test
$subject = "Test Email from GoDaddy Server";
$message = "If you received this, PHP mail() is working.";
$headers = "From: sales@archierio.in";

if (mail($to, $subject, $message, $headers)) {
    echo "Success! Mail sent.";
} else {
    echo "Error: Mail failed.";
}
?>
