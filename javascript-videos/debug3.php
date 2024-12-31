<?php
    //phpinfo();
    ob_end_flush(); // Disable output buffering if it's active
    error_reporting(E_ALL);
    ini_set('display_errors', 1);


    $firstName = "John"; 
    $lastName = "Smith"; 
    $age = 18; 
    $schoolName = "University of New Haven"; 
    $major = "Computer Science"; 
    $gradYear = 2022; 
    define ("DATE_OF_BIRTH", "2/29/1999"); 
    define ("SSN", "123456789");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Debugging Code Ch.3</title>
    <style>
        body {
            margin: 30px; 
        }

        table, th, td {
            border: 1px solid navy; 
            border-collapse: collapse;
        }

        th, td {
            padding: .5em;
        }

        caption {
            font-weight: bold; 
            font-size: 1.2rem; 
        }
    </style>
</head>
<body>
    <table>
    <caption>Student Information</caption>
        <tr>
            <th>First Name</th>
            <td><?php echo $firstName; ?></td>
        </tr>
        <tr>
            <th>Last Name</th>
            <td><?php echo $lastName; ?></td>
        </tr>
        <tr>
            <th>Age</th>
            <td><?php echo $age; ?></td>
        </tr>
        <tr>
            <th>College</th>
            <td><?php echo $schoolName; ?></td>
        </tr>
        <tr>
            <th>Major</th>
            <td><?php echo $major; ?></td>
        </tr>
        <tr>
            <th>Graduation Year</th>
            <td><?php echo $gradYear; ?></td>
        </tr>
        <tr>
            <th>Date of Birth</th>
            <td><?php echo DATE_OF_BIRTH; ?></td>
        </tr>
        <tr>
            <th>SSN</th>
            <td><?php echo SSN; ?></td>
        </tr>
        </table>
</body>
</html>