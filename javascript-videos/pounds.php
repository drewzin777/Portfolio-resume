<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pounds to Kilograms</title>
    <style>
        table {
            border-collapse: collapse; 
            width: 50%; 
            margin: 20px auto; 
        }
        th, td {
            border: 1px solid #000;
            padding: 8px;
            text-align: center; 
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>    
<body>
<h2 style="text-align: center;">Pounds to Kilograms Conversion Table</h2>

        <table>
            <thead>
                <tr>
                    <th>Pounds</th>
                    <th>Kilograms</th>
                </tr>
            </thead>
            <tbody>
                <?php 
                    $pounds = 1; 
                    $conversionRate = 0.4539; 

                    while ($pounds <= 10) {
                        $kilograms = $pounds * $conversionRate; 
                        echo "<tr><td>$pounds</td><td>" . number_format($kilograms, 4) . "</td></tr>";
                        $pounds++;
                    }
                ?>
            </tbody>
        </table>

</body>
</html>