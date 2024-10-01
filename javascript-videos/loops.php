<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loops</title>
</head>
<body>
    <h2>The For Loop</h2>
    <?php 
       for ($x = 0; $x < 10; $x++) {
        echo $x . "<br>";
       }
    ?>
    <h2>The While Loop</h2>
    <?php
    $y = 0; 
    $msg = ''; 

    while ($y < 10) {
        $msg = $msg . ' ' .$y. ' |';
        $y++;
    }
    echo $msg . "<br>";
    ?>

    <h2>The Do While Loop</h2>
    <?php 
        $z = 9; 

        do {
            echo $z . "<br>"; 
            $z--; 
        } while ($z > 0); 
 s   ?>


    <h2>Lab Exercise 1</h2>
    <?php 
        $sum = 0; 
        $number = 4;

        for ($i = 1; $i <= $number; $i++) {
            $sum += $i;
        }

        echo $sum;
    ?>
</body>
</html>