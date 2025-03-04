<?php
	header("Cache-Control: no-cache, no-store, must-revalidate");
	header("Pragma: no-cache");
	header("Expires: 0");
    header("Content-Type: application/json; charset=utf-8");

    // Set headers to allow cross-origin requests
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

	error_reporting(E_ALL & ~E_NOTICE);
	ini_set('display_errors', 1);
	
    require("../mysql_database_connection_bo.php");

    try {
        $handler = (new MysqlDatabaseConnectionBo())->getConnection();

        $query_string = "/* __CLASS__ __FUNCTION__ __FILE__ __LINE__ */
            SELECT
                MAIN.id AS id,
                MAIN.type AS type,
                MAIN.location_latitude AS location_latitude,
                MAIN.location_longitude AS location_longitude,
                MAIN.description AS description,
                MAIN.requester_name AS requester_name,
                MAIN.requester_contact_phone AS requester_contact_phone,
                MAIN.is_active AS is_active,
                MAIN.created_at AS created_at,
                MAIN.updated_at AS updated_at
            FROM
                requests MAIN
            WHERE
                MAIN.is_active = 1
        ;";
        $statement = $handler->prepare($query_string);
        $statement->execute();
        
        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        //print_r($result);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    } catch (PDOException $e) {
        http_response_code(500);
        echo json_encode(array("error" => "Database error: " . $e->getMessage()));
    }
	
?>
