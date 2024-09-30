<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Expressions</title>
</head>
<body>
<?php 
    $int1 = 9.5; 
    $int2 = 4.5;
    $int3 = 2.5;
    $int4 = 3;
    $int5 = 45.5; 
    $int6 = 3.5;
    //calculation
    $answer = $int1 * $int2 - $int3 * $int4;
    $anotherAnswer = $int5 - $int6; 
    //output results
    echo "Results of first calculation: " . $answer . "<br>";
    echo "Results of second calculation: " . $anotherAnswer . "<br>";
    //calculation for pi
    $pi = 4 * (1 - (1/3) + (1/5) - (1/7) + (1/9) - (1/11) + (1/13));
    echo "Approximate calculation for Pi: " . $pi . "<br>";

   
?>
     
</body>
</html>


