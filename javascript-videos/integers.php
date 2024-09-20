<?php
            $hoursInYear = 8760;
            $minutesInYear = 525600;
            $secondsInYear = 31536000; 
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>
            PHP Data Types -- Integers
        </title>
    </head>
    <body>
        <?php
            echo "<p>There are $hoursInYear hours in a year </p>";
            echo "<p>There are $minutesInYear minutes in a year </p>";
            echo "<p>There are $secondsInYear seconds in a year </p>"; 
            //The following code shows the number of bytes for an integar type on 
            //your system, and the maximum and minimum sizes of an integar type.
            echo PHP_INT_SIZE; 
            echo "<br>"; 
            echo PHP_INT_MAX; 
            echo "<br>"; 
            echo PHP_INT_MIN; 

            //Interger overflow
            $myFortune = PHP_INT_MAX + 1; 
            echo $myFortune; 
            echo "<br>"; 
            var_dump($myFortune);
        ?>
        
        
    </body>
</html>