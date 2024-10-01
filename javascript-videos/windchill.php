<?php
$temperature = ''; 
$wind_speed = ''; 
$wind_chill = ''; 

//Check if the form is submitted and retrieve user input 
if (isset($_GET['temperature']) && isset($_GET['wind_speed'])) {
    $temperature = htmlspecialchars($_GET['temperature']); 
    $wind_speed = htmlspecialchars($_GET['wind_speed']);

    //Calculate wind-chill temp if both inputs are numeric
    if (is_numeric($temperature) && is_numeric($wind_speed) && $wind_speed > 0) {
        $wind_chill = 35.74 + (0.625 * $temperature) - (35.75 * pow($wind_speed, 0.16)) + (0.4275 * $temperature * pow($wind_speed, 0.16));
    } else {
        $wind_chill = "Invalid input. Please enter valid numbers for temperature and wind speed.";
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Windchill</title>
    <style>
        body {
            margin: 30px;
        }
        h2 {
            color: navy; 
        }
        .result {
            margin-top: 20px; 
            color: green;
        }
        .error {
            color: red; 
        }
    </style>
</head>
<body>
    <main>
        <h2>Wind-Chill Temperature Calculator</h2>
        <!-- Form to input temp and wind speed -->
        <form action="windchill.php" method="get">
            <label for="temperature">Temperature(°F):</label>
            <input type="text" id="temperature" name="temperature" value="<?php echo $temperature; ?>" required><br><br>

            <label for="wind_speed">Wind Speed (mph):</label> 
            <input type="text" id="wind_speed" name="wind_speed" value="<?php echo $wind_speed; ?>" required><br><br>

            <input type="submit" value="Calculate Wind-Chill">
        </form>

        <!-- Display reult -->
        <div class="result">
            <?php if ($wind_chill !== '' && is_numeric($wind_chill)): ?>
                <p>The wind-chill temperature is: <?php echo round($wind_chill, 2); ?>°F.</p>
            <?php elseif ($wind_chill !== ''): ?>
                <p class="error"><?php echo $wind_chill; ?></p>
            <?php endif; ?>
        </div>
    </main>
</body>
</html>