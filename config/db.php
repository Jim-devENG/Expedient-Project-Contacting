<?php
$host = 'localhost';  // Database host
$db   = 'expedient_project_contracting';  // Database name
$user = 'root';  // Database username
$pass = '';  // Database password

try {
    // Create a PDO instance
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
