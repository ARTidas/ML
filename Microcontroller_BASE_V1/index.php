<?php

    /*** SQL ***/
    /* --------------------------------
    CREATE TABLE `16153_theapp`.`iot_messages` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `message` VARCHAR(255) NOT NULL,
    `is_active` TINYINT NOT NULL,
    `created_at` DATETIME NOT NULL,
    `updated_at` DATETIME NOT NULL,
    PRIMARY KEY (`id`));
    -------------------------------- */

    $log_messages = [];

    if (isset($_POST["send_message"]) && $_POST["send_message"] == "Send") {
        $log_messages[] = "INFO: Form submitted...";

        if (isset($_POST["message"]) && !empty($_POST["message"])) {
            $log_messages[] = "INFO: With message: \"" . $_POST["message"] . "\"";

            $server_name   = "mariadb11.viacomkft.hu";
            $database_name = "16153_theapp";
            $user_name     = "16153_theapp";
            $password      = "LyOOiFoEM7giE";

            try {
                $connection = new PDO("mysql:host=$server_name;dbname=$database_name", $user_name, $password);
                $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $log_messages[] = "INFO: Successfully connected to database...";

                $sql_string = "
                    INSERT INTO `16153_theapp`.`iot_messages`
                        (`message`, `is_active`, `created_at`, `updated_at`)
                        VALUES
                        (:message, 1, NOW(), NOW())
                    ;
                ";
                $sql_statement = $connection->prepare($sql_string);
                $sql_statement->bindParam(":message", $_POST["message"]);

                $sql_statement->execute();

                if ($sql_statement->rowCount() == 1) {
                    $log_messages[] = "INFO: Message sucessfully saved to database...";
                }
                else {
                    $log_messages[] = "ERROR: Message was not saved!";
                }
            }
            catch(PDOException $e) {
                $log_messages[] = "ERROR: " . $e->getMessage();
            }

            $connection = null;
        }
        else {
            $log_messages[] = "WARNING: Message not sent, message was empty!";
        }
    }
    else {
        $log_messages[] = "INFO: Please write a message and submit it...";
    }
?>

<!doctype html>
<html lang="en-US">
<head>
    <title>ML</title>

    <meta charset="UTF-8" />
    <meta http-equiv="content-type" content="text/html" />
    <meta name="description" content="ML" />
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="pragma" content="no-cache" />

    <link rel="stylesheet" href="../Common_BASE_V1/css/index.css" type="text/css" />
</head>
<body>

    <h1>Sending data to a Arduino R4 microcontroller throgugh ethernet (IOT)</h1>

    <form action="" method="post">
        <input type="text" name="message" value="<?php echo(
            isset($_POST["message"]) && !empty($_POST["message"]) ? 
                $_POST["message"] :
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        ); ?>" />
        <input type="submit" name="send_message" value="Send" />
    </form>

</body>
</html>

<?php
    foreach($log_messages as $log_message) {
        echo("<p>" . $log_message . "</p>");
    }
?>