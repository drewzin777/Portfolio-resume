<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Functions</title>
</head>
<body>
    <h2>Functions in PHP</h2>
    <?php 
        function displayInOrder($num1, $num2, $num3) {
            $numbers = [$num1, $num2, $num3]; 

            sort($numbers); 
            
            foreach ($numbers as $num) {
                echo $num . " ";
            }
        }
    echo "This function displays any three numbers in increasing order.<br>";
    displayInOrder(14, 7, 34);
    ?>
    <br><br>
    <h2>Lab Exercise 2</h2>
    <?php
        function displayTable ($header, $data1, $data2) {
            echo "<table border='1', cellspacing='0', cellpadding='5'>";

            //display table headers
            echo "<tr>"; 
            foreach ($header as $header) {
                echo "<th>" . htmlspecialchars($header) . "</th>";
            }
            echo "</tr>";

            //display first row of data
            echo "<tr>"; 
            foreach ($data1 as $value) {
                echo "<td>" . htmlspecialchars($value) . "</td>";
            }
            echo "</tr>";

            //display second row
            echo "<tr>"; 
            foreach ($data2 as $value) {
                echo "<td>" . htmlspecialchars($value) . "</td>";
            }
            echo "<tr>"; 

            echo "</table>";
        }

        $header = ["Name", "Age", "Occupation"]; 
        $data1 = ["Mary Jane", "23", "Plant Trimmer"]; 
        $data2 = ["John Smith", "25", "Web Designer"];

        displayTable($header, $data1, $data2);
    ?>
    <br><br>
    
    <?php
        //function to convert C to F
        function celsiusToFahrenheit($celsius) {
            return ($celsius * 9 / 5 + 32); 
        }

        //funtion to convert F to C
        function fahrenheitToCelsius($fahrenheit) {
            return ($fahrenheit - 32) * 5 / 9; 
        }

        //create table in HTML
        echo "<table border='1', cellpadding='10', cellspacing='0', style='width: 50%; margin: 20px auto; text-align: center;'>";
        echo "<tr><th>Fahrenheit</th><th>Celsius</th><th>Celsius</th><th>Fahrenheit</th></tr>";

        for ($f = -40; $f <= 120; $f += 10) {
            $celsius = fahrenheitToCelsius($f); 
            $c1 = $f - 5; 
            $fahrenheit = celsiusToFahrenheit($c1); 
            echo "<tr>"; 
            echo "<td>" . $f . "</td>"; 
            echo "<td>" . round($celsius, 2) . "</td>"; 
            echo "<td>" . $c1 . "</td>"; 
            echo "<td>" . round($fahrenheit, 2) . "</td>"; 
            echo "</tr>"; 
        }

        echo "</table>";
    ?>
</body>
</html>