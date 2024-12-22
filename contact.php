<?php
require 'config/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Insert into the database
    $stmt = $pdo->prepare("INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)");
    $stmt->execute([$name, $email, $message]);

    echo "Thank you for contacting us, we will get back to you shortly!";
}
?>

<!-- Simple Contact Form -->
<form action="contact.php" method="POST">
    <label for="name">Name:</label>
    <input type="text" name="name" id="name" required>
    
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" required>
    
    <label for="message">Message:</label>
    <textarea name="message" id="message" required></textarea>
    
    <button type="submit">Submit</button>
</form>
