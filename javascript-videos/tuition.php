<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tuition Costs over 10 years</title>
    <style>
        table {
            border-collapse: collapse;
            width: 50%; 
            margin: 20px; auto; 
            text-align: center;
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
    <h2 style="text-align: center;">University Tuition for next 10 years</h2>

    <table>
        <thead>
            <tr>
                <th>Year</th>
                <th>Tuition Cost</th>
            </tr>
        </thead>
        <tbody>
            <?php 
                $tuition = 30000;
                $year = 1; 
                $increase_rate = 0.05;

                do {
                    echo "<tr><td>Year $year</td><td>$" . number_format($tuition, 2) . "</td></tr>";
                    $tuition += $tuition * $increase_rate; 
                    $year++;
                } while ($year <= 10);
            ?>
        </tbody>
    </table>
</body>
</html>