<?php
require '../config/db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = htmlspecialchars($_POST['title']);
    $slug = htmlspecialchars($_POST['slug']);
    $content = htmlspecialchars($_POST['content']);
    $meta_description = htmlspecialchars($_POST['meta_description']);
    
    // Insert into the database
    $stmt = $pdo->prepare("INSERT INTO pages (title, slug, content, meta_description) VALUES (?, ?, ?, ?)");
    $stmt->execute([$title, $slug, $content, $meta_description]);
    
    echo "Page created successfully!";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Create Page</title>
</head>
<body>
    <h1>Create a New Page</h1>
    
    <form action="create_page.php" method="POST">
        <label for="title">Title:</label>
        <input type="text" name="title" id="title" required><br>
        
        <label for="slug">Slug (URL):</label>
        <input type="text" name="slug" id="slug" required><br>
        
        <label for="content">Content:</label>
        <textarea name="content" id="content" required></textarea><br>
        
        <label for="meta_description">Meta Description:</label>
        <textarea name="meta_description" id="meta_description"></textarea><br>
        
        <button type="submit">Create Page</button>
    </form>
</body>
</html>
