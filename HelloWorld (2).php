<?php include 'db_config.php'; ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Hades Rift Gaming Website</title>
    <style>
        body { font-family: Arial, sans-serif; background-color: #1b1b1b; color: #fff; }
        .content { padding: 20px; border-bottom: 1px solid #333; }
        .content img { max-width: 100%; }
        a { color: #0af; text-decoration: none; }
        a:hover { text-decoration: underline; }
    </style>
</head>
<body>
    <h1>Welcome to Hades Rift</h1>
    <div class="container">
        <?php
        $sql = "SELECT * FROM content ORDER BY created_at DESC";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo '<div class="content">';
                if ($row['type'] == 'text') {
                    echo '<p>' . $row['content'] . '</p>';
                } elseif ($row['type'] == 'image') {
                    echo '<img src="' . $row['content'] . '" alt="Image Content">';
                } elseif ($row['type'] == 'url') {
                    echo '<a href="' . $row['content'] . '" target="_blank">' . $row['content'] . '</a>';
                }
                echo '</div>';
            }
        } else {
            echo '<p>No content available.</p>';
        }
        ?>
    </div>
</body>
</html>
