<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // if using Composer
// OR if using manual download:
// require 'src/PHPMailer.php';
// require 'src/SMTP.php';
// require 'src/Exception.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Use your email provider's SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'mail2vefx@gmail.com';     // Your Gmail address
        $mail->Password = '@$Vinod5@$';       // Gmail App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Sender and recipient
        $mail->setFrom('mail2vefx@gmail.com', 'Real Estate Form');
        $mail->addAddress('mail2vefx@gmail.com'); // Your receiving email

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Property Inquiry';

        // Sanitize form data
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $phone = htmlspecialchars($_POST['phone']);
        $property_type = htmlspecialchars($_POST['property_type']);
        $bhk = htmlspecialchars($_POST['bhk']);
        $budget = htmlspecialchars($_POST['budget']);

        // Email body
        $body = "
            <h3>New Inquiry Details</h3>
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Property Type:</strong> $property_type</p>
            <p><strong>BHK:</strong> $bhk</p>
            <p><strong>Budget:</strong> $budget</p>
        ";

        $mail->Body = $body;

        $mail->send();
        echo 'Message sent successfully!';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
