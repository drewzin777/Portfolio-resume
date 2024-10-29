<?php 
    require 'includes/functions.php'; 
    include 'includes/header.php'; 

    //Set limit of jobs per page
    $limit = 5;

    //Get current page or set default of 1
    $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
    $offset = ($page -1) * $limit;

    //Initializize jobs as an empty array
    $jobs = []; 

    //Check if action is set (view, edit, delete)
    $action = $_GET['action'] ?? 'view';

    //Handle add job form
    if ($_SERVER['REQUEST_METHOD'] === 'POST' && $action === 'add') {
        // Retrieve form data from POST request
        $title = $_POST['job_title'];
        $description = $_POST['job_description'];
        $company = $_POST['company'];
        $location = $_POST['location'];
        $salary_range = $_POST['salary_range'];
    
        // Call addJob function to insert data into the database
        addJob($title, $description, $company, $location, $salary_range);
        header("Location: index.php");  // Redirect to main page after adding job
        exit();
    }    

    //Display form or Delete job Based on Action
    if ($action === 'add' || $action === 'edit') {
        include 'includes/job_board_clean.php';  //Form is in <job_board php
    } elseif ($action === 'delete') {
        $jobId = $_GET['id']; 
        deleteJob($jobId);        //Funtion in functions.php
        header("Location: index.php");  //Redirect to main list
        exit();   //Stop code after redirect
    } else {
        $jobs = getJobs($limit, $offset);          //Retrieve jobs for listing
    }   
    ?>
    
<!-- Display job listings only when not adding or editing -->
<?php if($action === 'view'): ?>
    <h2>Job Listings</h2>
    <a href="index.php?action=add">Add Job</a>
    <ul>
        <?php foreach ($jobs as $job): ?>
            <li>
                <h3><?php echo htmlspecialchars($job['title']); ?></h3>
                <p><?php echo htmlspecialchars($job['company']); ?></p>
                <a href="job_details.php?id=<?php echo $job['id']; ?>">View Details</a>  <!-- New Link to View Details -->
                <a href="index.php?action=edit&id=<?php echo $job['id']; ?>">Edit</a>
                <a href="index.php?action=delete&id=<?php echo $job['id']; ?>">Delete</a>
            </li>
        <?php endforeach; ?>
    </ul>
<?php
//Fetch total nuber of jobs to dermine number of pages
$pdo = connectDb();     //pdo defined
$total_jobs = $pdo->query("SELECT COUNT(*) FROM jobs")->fetchColumn();
$total_pages = ceil($total_jobs / $limit);
?>

<!-- Pagination Links --> 
<div class="pagination">
    <?php if ($page > 1): ?>
        <a href="index.php?page=<?php echo $page - 1; ?>">Previous</a>
    <?php endif; ?>

    <?php if ($page < $total_pages): ?>
        <a href="index.php?page=<?php echo $page + 1; ?>">Next</a>
    <?php endif; ?>
</div>
<?php endif; ?>

<?php
     //Close the else statement
    include 'includes/footer.php'; 
?>
    
