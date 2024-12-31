<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    $celsius = ''; 
    $fahrenheit = '';

    //Check if the form has been submitted and get the input
    if(isset($_GET['celsius'])) {
        $celsius = htmlspecialchars($_GET['celsius']);

        if(is_numeric($celsius)) {
            $fahrenheit = ($celsius * 9/5) + 32;
        } else {
            $fahrenheit = "Invalid input. Please enter a valid number.";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Convert Celsius to Fahrenheit</title>
    <style>
        body {
            margin: 30px; 
            font-family: Arial, sans-serif;
        }
        h2 {
            color: navy; 
        }
        .result{
            margin-top: 20px; 
            color: green; 
        }
    </style>
</head>
<body>
    <main>
        <h2>Celsius to Fahrenheit Converter</h2>
        <!-- Form to input temp -->
        <form action="temperature.php" method="get">
            <label for="celsius">Temperature in Celsius:</label>
            <input type="text" id="celsius" name="celsius" value="<?php echo $celsius; ?>" required><br>
            <input type="submit" value="convert">
        </form>

        <!-- Display the result -->
        <div class="result">
            <p><?php echo $celsius; ?>°C is equal to <?php echo $fahrenheit; ?>°F.</p>
        </div>
    </main>
</body>
</html>