<?php
$hostName = "localhost";
$dbUser = "root";
$dbPassword = "";
$dbName = "login-register";

// Establish connection
$conn = mysqli_connect($hostName, $dbUser, $dbPassword, $dbName);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connected successfully";
}

// Close connection (optional)
// mysqli_close($conn);
?>
