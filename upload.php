<?php
require 'config/db.php';

if ($_FILES['file']) {
    $fileName = $_FILES['file']['name'];
    $fileTmpName = $_FILES['file']['tmp_name'];
    $destination = 'uploads/' . $fileName;

    if (move_uploaded_file($fileTmpName, $destination)) {
        $stmt = $pdo->prepare("INSERT INTO uploads (file_path) VALUES (?)");
        $stmt->execute([$destination]);

        echo "File uploaded successfully!";
    } else {
        echo "File upload failed.";
    }
}
?>

<!-- Simple File Upload Form -->
<form action="upload.php" method="POST" enctype="multipart/form-data">
    <label for="file">Choose file:</label>
    <input type="file" name="file" id="file" required>
    
    <button type="submit">Upload</button>
</form>
