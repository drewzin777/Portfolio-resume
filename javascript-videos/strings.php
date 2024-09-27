<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings PHP</title>
</head>
<body>
    <?php 
        //String Initialization
        $name = 'Brooke'; 
        $title = "Princess"; 

        //Several arguments within single quotes
        echo '<h2>', $name, ' is the ', $title, ' of an enchanted fairy land.</h2>';

        //Variable included within single quotes . It does'nt work.
        echo '<h2> $name is the $title of an enchanted fairly land.</h2>';

        echo 'Mark Twain once said "The report of my death was an exaggeration".<br>'; 

        echo "Mark Twain once said 'The report of my death was an exaggeration'.<br>";
        //Single quotes to escape \ and '
        echo 'Arnold said \'I\'ll be back\'.<br>';
        echo 'The file path is C:\\myfile.php<br>';
        //Double quotes to escape all other special characters
        echo 'The book cost \$20.00<br>'; 
        echo "The book cost \$20.00<br>";

        //String concatenation
        $subject = "I"; 
        $verb = "like"; 
        $object = "PHP";

        //Put it together 
        $sentence = $subject . ' ' . $verb . ' ' . $object;
        echo $sentence;
    ?>
    
</body>
</html>