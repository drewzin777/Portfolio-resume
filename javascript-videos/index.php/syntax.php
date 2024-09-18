<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>
            PHP Syntax
        </title>
    </head>
    <body>
        <?php
        //The next three statements will create three seperate variables
        $car = "Toyota Camry"; 
        $CAR = "Toyota Rav4"; 
        $Car = "Toyota Sienna"; 

        //If They were the same variable they would all print "Toyota Sienna", 
        //since that was the last assignment. 
        echo $car; 
        echo "<br>"; 
        echo $CAR;
        echo "<br>"; 
        echo $Car; 
        echo "<br>";

        //In the PHP language there is only one echo statement.
        echo "<h3>I am not case sensitive</h3>"; 
        Echo "<h3>This is also valid code.</h3>"; 
        ECHO "<h3>Yet another way to use echo.</h3>"; 
        ?>
    </body>
</html>