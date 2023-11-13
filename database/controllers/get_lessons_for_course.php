<?php
    header("Access-Control-Allow-Origin: *");
    include('../db_connection.php');

    require_once('../models/Lesson.php');

    $valueFromGet = $_GET['id'];
    echo 'value: ' . $valueFromGet;
    // Query the database
    $sql = "SELECT * FROM Lessons WHERE CourseId = " . intval($_GET['id']);
    $stmt = sqlsrv_query($conn, $sql);

    if ($stmt === false) die(print_r(sqlsrv_errors(), true));

    // Fetch the data from the query result
    $data = array();
    while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        $lesson = new Lesson($row['Id'], $row['OrderNumber'], $row['Title'], $row['IsSeparator'], $row['CourseId']);
        $data[] = $lesson->__toJSON();
    }

    echo print_r($data, true);

    // Check if data is retrieved
    if (empty($data)) die('No data found');

    // Convert the data to JSON and return it
    // header('Content-Type: application/json');
    echo json_encode($data);
?>