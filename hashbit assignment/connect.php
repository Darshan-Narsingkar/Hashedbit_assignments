<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Get form data
$Name = $_POST['Name'];
$Email = $_POST['Email'];
$Number = $_POST['Number'];
$Message = $_POST['Message'];

// Create connection
$conn = mysqli_connect('localhost', 'root', '', 'flowershopuserinfo');

// Check connection
if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO `contact-info` (Name, Email, Number, Message) VALUES (?, ?, ?, ?)");
if ($stmt === false) {
    die('Prepare failed: ' . htmlspecialchars($conn->error));
}

$bind = $stmt->bind_param("ssss", $Name, $Email, $Number, $Message);
if ($bind === false) {
    die('Bind param failed: ' . htmlspecialchars($stmt->error));
}

// Execute the statement
$exec = $stmt->execute();
if ($exec === false) {
    die('Execute failed: ' . htmlspecialchars($stmt->error));
} else {
    echo "New record created successfully";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
