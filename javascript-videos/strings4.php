<?php 
    // Enable error reporting
    ini_set('display_errors', 1);            // Display errors
    ini_set('display_startup_errors', 1);    // Display startup errors
    error_reporting(E_ALL);                  // Report all types of errors

    $name = "Robert"; 
    $question = "When are you going to see that movie?"; 
    $noun = "bike"; 
    $fam = "cousins"; 
    $amount = "$5"; 
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings Lab Exercise Ch. 4</title>
</head>
<body>
    <?php 
        echo "$name said, \"I studied hard for my physics test.\"<br>"; 
        echo "John asked \"$question\"<br>"; 
        echo "Matthew told his friend , \"Your $noun looks like mine.\"<br>"; 
        echo "Brooke told her $fam, \"You're invited to my party.\"<br>";
        echo "Eric told his brother, \"If you give me $amount I won't tell mom.\"<br>"; 
    ?>
</body>
</html>