<?php
$a = 4; 
$b = -3; 
$c = 2;
$discriminant = $b* $b - 4 * $a *$c;

    //Use if statement to check value of discriminant
    if ($discriminant > 0) {
        //Two roots
        $root1 = (-$b + sqrt($discriminant)) / (2 * $a);
        $root2 = (-$b - sqrt($discriminant)) / (2 * $a);
        echo "The equation has two real roots: Root 1 = $root1, Root 2 = $root2\n";
    } elseif ($discriminant == 0) {
        //One real root
        $root = -$b / (2 * $a);
        echo "The equation has one real root: Root = $root\n";
    } else {
        //No real roots
        echo "The equation has no real roots. \n";
    }
?>