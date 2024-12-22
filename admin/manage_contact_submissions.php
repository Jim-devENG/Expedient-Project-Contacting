<?php
require '../config/db.php';

$contactStmt = $pdo->query("SELECT * FROM contact_submissions");
$contacts = $contactStmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Contact Submissions</title>
</head>
<body>
    <h1>Contact Submissions</h1>
    
    <ul>
        <?php foreach ($contacts as $contact): ?>
            <li>
                <?php echo htmlspecialchars($contact['name']); ?> (<?php echo htmlspecialchars($contact['email']); ?>) - 
                <?php echo nl2br(htmlspecialchars($contact['message'])); ?>
            </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>
