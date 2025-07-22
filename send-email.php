<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to = "mail2vefx@gmail.com"; // Change to your email
    $subject = "New Property Inquiry";

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $property_type = htmlspecialchars($_POST['property_type']);
    $bhk = htmlspecialchars($_POST['bhk']);
    $budget = htmlspecialchars($_POST['budget']);

    $message = "
    You have a new inquiry:\n\n
    Name: $name\n
    Email: $email\n
    Phone: $phone\n
    Property Type: $property_type\n
    BHK: $bhk\n
    Budget: $budget
    ";

    $headers = "From: $email\r\nReply-To: $email\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your inquiry has been sent.";
    } else {
        echo "Sorry, there was an error sending your message.";
    }
} else {
    echo "Invalid request.";
}
?>
