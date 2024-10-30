<?php 
session_start();

// Check if user is logged in and has admin privileges
if (!isset($_SESSION['user_id']) || $_SESSION['role'] !== 'admin') {
    header("Location: login.php");     // Redirect to login 
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

<!-- Header section with title and logout button -->
<header class="bg-dark text-white py-3">
    <div class="container d-flex justify-content-between align-items-center">
        <h1 class="h3">Admin Dashboard</h1>
        <a href="logout.php" class="btn btn-danger">Logout</a>
    </div>
</header>

<!-- Main content container -->
<div class="container mt-4">
    <!-- Total job postings count -->
    <?php
    $totalJobs = $pdo->query("SELECT COUNT(*) FROM jobs")->fetchColumn(); 
    ?>
    <p><strong>Total Job Postings:</strong> <?php echo $totalJobs; ?></p>

    <!-- Add new job button -->
    <a href="add_job.php" class="btn btn-success mb-3">Add New Job</a>

    <!-- Job listings table -->
    <div class="table-responsive">
        <table class="table table-bordered table-striped">
            <thead class="thead-dark">
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
                           <a href='delete_job.php?id=" . $job['id'] . "' class='btn btn-danger btn-sm' onclick='return confirm(\"Are you sure you want to delete this job?\");'>Delete</a>
                        </td>
                    </tr>";
                }
                ?>
            </tbody>
        </table>
    </div>
</div>

</body>
</html>

            
