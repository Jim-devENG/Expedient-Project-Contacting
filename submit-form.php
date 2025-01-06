<?php
// Database connection
$servername = "localhost"; // Replace with your server name
$username = "nehoidxa_consultations"; // Replace with your database username
$password = "Expedient100%"; // Replace with your database password
$dbname = "nehoidxa_consultations"; // Replace with your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Form data
$first_name = $_POST['first-name'];
$last_name = $_POST['last-name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$city = $_POST['city'];
$services = $_POST['services'];
$msg = $_POST['msg'];

// File upload handling
$file_upload = '';
if ($_FILES['file-upload']['error'] == 0) {
    $target_dir = "/uploads"; // Make sure this directory exists
    $target_file = $target_dir . basename($_FILES['file-upload']['name']);
    if (move_uploaded_file($_FILES['file-upload']['tmp_name'], $target_file)) {
        $file_upload = $target_file;
    }
}

// Prepare and bind the SQL query
$stmt = $conn->prepare("INSERT INTO form_submissions (first_name, last_name, phone, email, city, services, file_upload, msg) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssss", $first_name, $last_name, $phone, $email, $city, $services, $file_upload, $msg);

// Execute the query and check if the insertion was successful
if ($stmt->execute()) {
    // Email sending
    $to = "inquiries@expedientprojectcontracting.com"; // Replace with your email
    $subject = "New Form Submission";
    $body = "You have received a new form submission:\n\n";
    $body .= "First Name: $first_name\n";
    $body .= "Last Name: $last_name\n";
    $body .= "Phone: $phone\n";
    $body .= "Email: $email\n";
    $body .= "City: $city\n";
    $body .= "Services: $services\n";
    $body .= "Message: $msg\n";
    if ($file_upload) {
        $body .= "File Uploaded: $file_upload\n";
    }

    $headers = "From: inquiries@expedientprojectcontracting.com"; // Replace with a valid sender email

    if (mail($to, $subject, $body, $headers)) {
        echo "Form submitted successfully, and email sent!";
    } else {
        echo "Form submitted successfully, but email sending failed.";
    }
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
