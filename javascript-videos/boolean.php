<?php 
    $isValid = TRUE;
    $isLocal = FALSE; 
    $isOver = TRUE;
    $isRed = FALSE;
?>


<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>
            PHP Data Types -- Boolean
        </title>
    </head>
    <body>
        <?php 
            var_dump($isValid); 
            echo "<br>"; 
            var_dump($isLocal); 
            echo "<br>";
            var_dump($isOver); 
            echo "<br>"; 
            var_dump($isRed); 
            echo "<br>"; 

            // converting Integer values to boolean:
            $boolInt1 = (bool) 0; 
            var_dump($boolInt1); 
            echo "<br>";
            $boolInt2 = (bool) -1; 
            var_dump($boolInt2); 
            echo "<br>";
            $boolInt3 = (bool) 4; 
            var_dump($boolInt3); 
            echo "<br>";

            // converting Float values to boolean:
            $boolFloat1 = (bool) 0.0; 
            var_dump($boolFloat1); 
            echo "<br>";
            $boolFloat2 = (bool) -1.2; 
            var_dump($boolFloat2); 
            echo "<br>";
            $boolFloat3 = (bool) 4.5; 
            var_dump($boolFloat3);
        ?>
    </body>     
</html>
