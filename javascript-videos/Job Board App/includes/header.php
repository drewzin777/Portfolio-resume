<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Board</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <!-- Inline CSS -->
    <style>
        /* Reset and basic styling */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            color: #333;
        }

        /* Container styling */
        .job-details-container {
            max-width: 600px;
            margin: 40px auto;
            padding: 20px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center; 
        }

        /* Job title style */
        .job-title {
            font-size: 24px; 
            font-weight: bold;
            color: #333; 
            margin: 10px; 
        }

        /* Company, Location, Salary */
        .job-company, .job-location, .job-salary, .job-date {
            font-size: 16px; 
            color: #555; 
            margin: 5px 0; 
        }

        .job-description {
            font-size: 15px; 
            color: #666; 
            line-height: 1.6; 
            margin: 15px 0;
            padding: 10px; 
            background-color: #f7f7f7; 
            border-left: 3px solid #007bff;
            border-radius: 4px; 
        }

        .btn-back {
            display: inline-block; 
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 1rem;
            font-weight: bold;
            color: #fff;
            background-color: #007bff; /* Bootstrap Primary */
            border-radius: 4px;
            transition: background-color 0.3s;
        }

        .btn-back:hover {
            background-color: #0056b3; 
        }

        /* Header and footer */
        header, footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 1em 0;
        }

        footer p {
            margin: 0.5em;
        }

        /* Typography */
        h1, h2, h3 {
            color: #333;
        }

        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
        }

        h2 {
            font-size: 1.5rem;
            margin: 1.5rem 0 1rem;
        }

        /* Form and button styling */
        form div {
            margin-bottom: 15px;
        }

        label {
            display: block;
            font-weight: bold;
            margin-bottom: 5px;
            color: #333;
        }

        input[type="text"], textarea {
            width: 100%;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
        }

        button {
            background-color: #3498db;
            color: #fff;
            padding: 10px 15px;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        button:hover {
            background-color: #2980b9;
        }

        /* Job listing cards */
        .job-listing {
            padding: 1em;
            margin-bottom: 1em;
            border: 1px solid #ddd;
            border-radius: 5px;
            background-color: #fafafa;
        }
    </style>
</head>
<body>
<header class="bg-dark text-white text-center py-3">
    <h1 class="text-white">Job Board</h1>
</header>
<div class="container">
    <!-- Main content area -->
   
