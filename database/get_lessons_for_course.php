<?php
    include('db_connection.php');

    // Query the database
    $sql = "SELECT * FROM Lessons WHERE CourseId = " . intval($_POST['id']);
    $stmt = sqlsrv_query($conn, $sql);
    if ($stmt === false) die(print_r(sqlsrv_errors(), true));

    // Fetch the data from the query result
    $data = array();
    while ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) $data[] = $row;

    // Convert the data to JSON and return it
    header('Content-Type: application/json');
    echo json_encode($data);
?>