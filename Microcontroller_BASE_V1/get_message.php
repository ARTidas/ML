<?php
    $log_messages = [];

    $server_name   = "mariadb11.viacomkft.hu";
    $database_name = "16153_theapp";
    $user_name     = "16153_theapp";
    $password      = "LyOOiFoEM7giE";

    try {
        $connection = new PDO("mysql:host=$server_name;dbname=$database_name", $user_name, $password);
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $log_messages[] = "INFO: Successfully connected to database...";

        $sql_string = "
            SELECT
                message AS 'message'
            FROM
                16153_theapp.iot_messages
            ORDER BY
                created_at DESC
            LIMIT
                1
            ;
        ";
        $sql_statement = $connection->query($sql_string);

        while ($result = $sql_statement->fetch()) {
            echo($result['message']);
        }
    }
    catch(PDOException $e) {
        $log_messages[] = "ERROR: " . $e->getMessage();
    }

    foreach($log_messages as $log_message) {
        //echo("<p>" . $log_message . "</p>");
    }
?>