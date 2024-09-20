<?php 
    //common way to write floating poing numbers. 
    $monthlyRent = 1234.56; 
    $bookPrice = 19.99; 
    $concertTicketPrice = 119.99; 
    $pi = 3.14159; 

    //Floating point for Scientific Notation.
    $avogadroNumber = 6.022e23;
    $lightKmSecond = 3E5; 
?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>
            PHP Data Types -- Floats
        </title>
    </head>
    <body>
        <?php 
        echo "<p>Last month my rent was $monthlyRent. I had some money left " . 
             "to buy a book for $bookPrice. But I didn't have enough to " .
             "buy the $concertTicketPrice ticket to go to a concert. This " . 
             "will change when I become a PHP developer.</p>"; 
        echo "<p>Pi is equal to $pi. It is used in math.</p>"; 
        echo "<p>Avogadro's number is $avogadroNumber. It is used in chemistry.</p>"; 
        echo "<p>Light travels $lightKmSecond kilometers per second. This is used in astronomy.</p>";
        ?>
    </body>     
</html>