<?php
// Include the database connection
require '../config/db.php';

// Fetch pages and contact submissions from the database
$pagesStmt = $pdo->query("SELECT * FROM pages");
$contactStmt = $pdo->query("SELECT * FROM contact_submissions");

$pages = $pagesStmt->fetchAll(PDO::FETCH_ASSOC);
$contacts = $contactStmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
</head>
<body>
    <h1>Admin Dashboard</h1>
    
    <h2>Pages</h2>
    <ul>
        <?php foreach ($pages as $page): ?>
            <li><?php echo htmlspecialchars($page['title']); ?> <a href="edit_page.php?id=<?php echo $page['id']; ?>">Edit</a></li>
        <?php endforeach; ?>
    </ul>
    
    <h2>Contact Submissions</h2>
    <ul>
        <?php foreach ($contacts as $contact): ?>
            <li><?php echo htmlspecialchars($contact['name']); ?> (<?php echo htmlspecialchars($contact['email']); ?>)</li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
