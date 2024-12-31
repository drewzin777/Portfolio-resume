<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strings Exercise 4.3</title>
</head>
<body>
    <?php 
        $quote = "Well done is better than well said.<br>";
        $length = strlen(strip_tags($quote)); 

        echo $quote; 
        echo "The length of the quote is: " . $length . "<br>";

        $quote2 = "Tell me and I forget. Teach me and I remember. Involve me and I learn.<br>";
        $word_count = str_word_count(strip_tags($quote2)); 

        echo $quote2; 
        echo "The word count is: " . $word_count . "<br>"; 

        $quote3 = "An investment in knowledge pays the best interest.<br>"; 
        $reverse = strrev(strip_tags($quote3)); 
        
        echo $quote3; 
        echo "The reversed string is: " . $reverse . "<br>";

        $quote4 = "I didn't fail the test, I just found 100 ways to do it wrong."; 
        $strpos = strpos($quote4, "test"); 

        echo $strpos;
        
    ?>
</body>
</html>