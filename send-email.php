<?php
// === CONFIGURATION === //
$to = "mages.sbca@gmail.com"; // 📩 Change to your receiving email
$from = "sales@archierio.in"; // 💼 Your domain email (not user input)

$db_host = "localhost";
$db_name = "newarchierio"; // ⚙️ Replace with your DB name
$db_user = "vefxin";     // 👤 Replace with your DB username
$db_pass = "newarchierio$5"; // 🔐 Replace with your DB password

// === FORM VALIDATION === //
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // Sanitize input
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $property_type = htmlspecialchars(trim($_POST['property_type']));
    $bhk = htmlspecialchars(trim($_POST['bhk']));
    $budget = htmlspecialchars(trim($_POST['budget']));

    // === SAVE TO DATABASE === //
    try {
        $pdo = new PDO("mysql:host=$db_host;dbname=$db_name", $db_user, $db_pass);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->prepare("INSERT INTO inquiries (name, email, phone, property_type, bhk, budget, created_at)
                               VALUES (?, ?, ?, ?, ?, ?, NOW())");
        $stmt->execute([$name, $email, $phone, $property_type, $bhk, $budget]);
    } catch (PDOException $e) {
        die("Database error: " . $e->getMessage());
    }

    // === COMPOSE EMAIL === //
    $subject = "New Property Inquiry from $name";

    $message = "
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333; }
        .container { background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #ddd; max-width: 600px; margin: auto; }
        h2 { color: #2c3e50; }
        table { width: 100%; }
        td { padding: 6px 0; }
        .label { font-weight: bold; color: #555; }
        .value { color: #111; }
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
          <tr><td class='label'>BHK:</td><td class='value'>$bhk</td></tr>
          <tr><td class='label'>Budget:</td><td class='value'>$budget</td></tr>
        </table>
        <p style='margin-top: 20px;'>Please follow up with the client for more details.</p>
      </div>
    </body>
    </html>";

    // === EMAIL HEADERS === //
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: $from\r\n";
    $headers .= "Reply-To: $email\r\n";

    // === SEND EMAIL === //
    if (mail($to, $subject, $message, $headers)) {
        // ✅ REDIRECT ON SUCCESS
        header("Location: thank-you.html");
        exit();
    } else {
        echo "Sorry, email sending failed.";
    }
} else {
    echo "Invalid submission.";
}
?>
