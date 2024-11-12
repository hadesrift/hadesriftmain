<?php
include 'db_config.php';

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $type = $_POST['type'];
    $content = $_POST['content'];

    $sql = "INSERT INTO content (type, content) VALUES ('$type', '$content')";
    if ($conn->query($sql) === TRUE) {
        echo "Content added successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Control Panel</title>
</head>
<body>
    <h1>Admin Control Panel</h1>
    <form method="POST">
        <label>Type:</label>
        <select name="type">
            <option value="text">Text</option>
            <option value="image">Image URL</option>
            <option value="url">External URL</option>
        </select><br><br>
        
        <label>Content:</label><br>
        <textarea name="content" rows="4" cols="50"></textarea><br><br>
        
        <button type="submit">Add Content</button>
    </form>
</body>
</html>
