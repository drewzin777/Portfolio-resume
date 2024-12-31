<?php
// Enable error reporting
ini_set('display_errors', 1);            // Display errors
ini_set('display_startup_errors', 1);    // Display startup errors
error_reporting(E_ALL);                  // Report all types of errors
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Debugging Episode 4</title>
<style> body{margin: 30px;} </style>
</head>
<body>
<?php
echo "Episode 4 was 'All about Strings' and I liked it.<br>";
$msg = 'My best friend in the whole world is Hallie.';
echo $msg . '<br>';
echo 'I need $100 to buy groceries for the week.';
?>
</body>
</html>