<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Files</title>
</head>
<body>
    <?php
        function displayPoemWithFormatting($filename) {
            if (file_exists ($filename)) {
               $lines = file($filename, FILE_IGNORE_NEW_LINES); 
            
               $poemStarted = false; 

               foreach ($lines as $line) {
                    $trimmedLine = trim($line); //removes whitespace 

                    if (strpos($trimmedLine, "Robert Frost") !== false) {
                        echo $trimmedLine . "<br>"; //Print authors name
                        echo "<br>"; 
                    } elseif ($trimmedLine === "") {
                        if ($poemStarted) {
                            echo "<br>"; 
                        }
                        $poemStarted = true;
                    } else {
                        echo $trimmedLine . "<br>";
                    }
                }
            } else {
                echo "Error: File '$filename' not found.";
            }
        }

        displayPoemWithFormatting('The_Road_Not_Taken.txt');
    ?>
</body>
</html>