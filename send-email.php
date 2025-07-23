<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitize and collect form data
    $name           = htmlspecialchars(trim($_POST['name']));
    $email          = htmlspecialchars(trim($_POST['email']));
    $phone          = htmlspecialchars(trim($_POST['phone']));
    $property_type  = htmlspecialchars(trim($_POST['property_type']));
    $bhk            = htmlspecialchars(trim($_POST['bhk']));
    $budget         = htmlspecialchars(trim($_POST['budget']));

    // To address
    $to = "mages.sbca@gmail.com"; // 🔁 Replace with your actual destination email

    // Email subject
    $subject = "New Property Inquiry from $name";

    // HTML email body
    $message = "
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          color: #333;
          background-color: #f9f9f9;
          padding: 20px;
        }
        .container {
          background-color: #ffffff;
          border: 1px solid #ddd;
          padding: 20px;
          border-radius: 8px;
          max-width: 600px;
          margin: auto;
        }
        h2 {
          color: #2c3e50;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        td {
          padding: 10px 0;
        }
        .label {
          font-weight: bold;
          color: #555;
        }
        .value {
          color: #333;
        }
      </style>
    </head>
    <body>
      <div class='container'>
        <h2>New Property Inquiry</h2>
        <table>
          <tr><td class='label'>Name:</td><td class='value'>$name</td></tr>
          <tr><td class='label'>Email:</td><td class='value'>$email</td></tr>
          <tr><td class='label'>Phone:</td><td class='value'>$phone</td></tr>
          <tr><td class='label'>Property Type:</td><td class='value'>$property_type</td></tr>
          <tr><td class='label'>BHK:</td><td class='value'>$bhk BHK</td></tr>
          <tr><td class='label'>Budget:</td><td class='value'>$budget</td></tr>
        </table>
        <p style='margin-top: 20px;'>Please reach out to the client for more details.</p>
      </div>
    </body>
    </html>
    ";

    // Headers
    $headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: sales@archierio.in\r\n"; // ✅ Recommended to use domain-based sender
    $headers .= "Reply-To: $email\r\n";

    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Success! Your inquiry has been sent.";
    } else {
        echo "Sorry, the message could not be sent.";
    }
} else {
    echo "Invalid form submission.";
}
?>
