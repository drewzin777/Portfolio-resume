<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays in PHP</title>
</head>
<body>
    <?php
        $squares = []; 
        $cubes = []; 

        for ($i = 1; $i <= 20; $i++) {
            $squares[$i] = $i * $i; 
            $cubes[$i] = $i * $i * $i; 
        }

        // create table in HTML
        echo "<table border='1', cellpadding='10', cellspacing='0', style='width: 50%'; margin: 20px auto; text-align: center;'>"; 
        echo "<tr><th>Number</th><th>Square</th><th>Cube</th></tr>"; 

        //use a foreach loop to display values
        foreach ($squares as $number => $square) {
            echo "<tr>"; 
            echo "<td>" . $number . "</td>"; 
            echo "<td>" . $square . "</td>";
            echo "<td>" . $cubes[$number] . "</td>";
            echo "<tr>";
        }

        echo "</table>";
    ?>
    <br><br><br>

    <?php
        //Track counts for integers 1 - 10 
        $counts = array_fill(1, 10, 0); //creates an array with keys 1-10, all intialized to 0

        //use a for loop to generate 500 random integers between 1 and 10
        for ($i = 0; $i < 500; $i++) {
            $randomNumber = rand(1, 10); //generate a number between 1 and 10
            $counts[$randomNumber]++; //Increment count fo r that number
        }
        //create table in HTML 
        echo "<table border='1' cellpadding='10' cellspacing='0' style='width: 50%; margin: 20px auto; text-align: center;'>";
        echo "<tr><th>Number</th><th>Times Generate</th></tr>";

        //use a foreach loop to display the numbers
        foreach ($counts as $number => $count) {
            echo "<tr>";
            echo "<td>" . $number . "</td>"; 
            echo "<td>" . $count . "</td>"; 
            echo "</tr>"; 
        }
        echo "</table"; 
    ?>

    <br><br><br>

    <?php
        $people = [];
        
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            //loop throught input fields and store names and ages in associative array
            for ($i = 1; $i <= 5; $i++) {
                $name = htmlspecialchars($_POST["name" . $i]);
                $age = htmlspecialchars ($_POST["age" . $i]);

                if (!empty($name) && !empty($age)) {
                    $people[$name] = $age; 
                }
            }
        //display associative array as table in HTML
            if (!empty($people)) {
                echo "<h2>Submitted Data</h2>"; 
                echo "<table border='1' cellpadding='10' cellspacing='0' style='width: 50%; margin: 20px auto; text-align: center;'>";
                echo "<tr><th>Name</th><th>Age</th></tr>";

                foreach ($people as $name => $age) {
                    echo "<tr>"; 
                    echo "<td>" . $name . "</td>"; 
                    echo "<td>" . $age . "</td>"; 
                    echo "</tr>"; 
                }

                echo "</table>"; 
            } else {
                echo "<p>Please fill in all the fields.</p>";
            }
        }
    ?>

    <!-- Form with name and age fields -->
     <form method ="post" action="">
        <h2>Enter Names and Ages</h2>
        <table>
            <?php for ($i = 1; $i <= 5; $i++) { ?>
                <tr>
                    <td>
                        <label for="name<?php echo $i; ?>">Name <?php echo $i; ?>:</label>
                        <input type ="text" name="name<?php echo $i; ?>" id="name<?php echo $i; ?>">
                    </td>
                    <td>
                        <label for="age<?php echo $i; ?>">Age <?php echo $i; ?>:</label>
                        <input type="number" name="age<?php echo $i; ?>" id="age<?php echo $i; ?>">
                    </td>
                </tr>
            <?php } ?>
        </table>
        <br>
        <input type="submit" value="Submit">
    </form>
</body>     
</html>