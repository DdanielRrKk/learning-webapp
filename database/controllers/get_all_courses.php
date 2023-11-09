<?php
    header("Access-Control-Allow-Origin: *");
    include('../db_connection.php');

    require_once('../models/Course.php');

    // Query the database
    $sql = "SELECT * FROM Courses";
    $stmt = sqlsrv_query($conn, $sql);

    if ($stmt === false) die(print_r(sqlsrv_errors(), true));

    // Fetch the data from the query result
    $data = array();
    while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        $data[] = new Course($row['Id'], $row['Title'], bin2hex($row['Image']));
    }

    // Check if data is retrieved
    if (empty($data)) die('No data found');

    // $json = json_encode($data);

    // echo 'JSON: ' . print_r($json, true) . '<br><br> Data: ' . print_r($data, true);

    // Convert the data to JSON and return it
    // header('Content-Type: application/json');
    echo json_encode($data);
?>