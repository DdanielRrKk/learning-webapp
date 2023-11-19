<?php
    $serverName = "DESKTOP-F6N9F54";
    $connectionOptions = array( "Database" => "PrimeCode" );
    // Establishes the connection
    $conn = sqlsrv_connect($serverName, $connectionOptions);
    if( $conn === false ) {
        echo "Connection could not be established.<br />";
        die( print_r( sqlsrv_errors(), true));
   }
?>
