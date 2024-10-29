<?php 
session_start(); 
var_dump($_SESSION); //Debugging ...
exit();

//Check if user is logged and has admin privledges
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header("Location: login.php");     //Redirect to login 
    exit();
}

require '../includes/functions.php';
$pdo = connectDb();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>
<div class="container mt-5">
    <?php
    //Get total job postings
    $totalJobs = $pdo->query("SELECT COUNT(*) FROM jobs")->fetchColumn(); 
    ?>
    <div class="mb-4">
        <p><strong>Total Job Postings:</strong> <?php echo $totalJobs; ?></p>
    </div>

    <h2>Admin Dashboard</h2>
    <a href="add_job.php" class="btn btn-success mb-3">Add New Job</a>

    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Job Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>Salary</th>
                <th>Date Posted</th>
                <th>Actions</th>
            </tr>   
        </thead>
        <tbody>
            <?php
            $stmt = $pdo->query("SELECT * FROM jobs ORDER BY date_posted DESC"); 
            while ($job = $stmt->fetch()) {
                echo "<tr>
                    <td>" . htmlspecialchars($job['title']) . "</td>
                    <td>" . htmlspecialchars($job['company']) . "</td>
                    <td>" . htmlspecialchars($job['location']) . "</td>
                    <td>" . htmlspecialchars($job['salary_range']) . "</td>
                    <td>" . htmlspecialchars($job['date_posted']) . "</td>
                    <td>
                        <a href='edit_job.php?id=" . $job['id'] . "' class='btn btn-primary btn-sm'>Edit</a>
                        <a href='delete_job.php?id=" . $job['id'] . "' class='btn btn-danger btn-sm' onclick='return confirm(\"Are you sure?\");'>Delete</a>
                    </td>
                </tr>";
            }
            ?>
        </tbody>
    </table>
</div>
</body>
</html>
            
