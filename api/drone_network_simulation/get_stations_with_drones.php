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
                STATION.id AS station_id,
                STATION.name AS station_name,
                STATION.location_latitude AS station_location_latitude,
                STATION.location_longitude AS station_location_longitude,
                STATION.drone_capacity AS station_drone_capacity,
                DRONE.id AS drone_id,
                DRONE.model AS drone_model,
                DRONE.manufacturer AS drone_manufacturer,
                DRONE.weight_kg AS drone_weight_kg,
                DRONE.max_speed_kmh AS drone_max_speed_kmh,
                DRONE.payload_weight_kg AS drone_payload_weight_kg,
                DRONE.range_km AS drone_range_km
            FROM
                station_drones STATION_DRONE
                INNER JOIN stations STATION
                    ON STATION_DRONE.station_id = STATION.id
                INNER JOIN drones DRONE
                    ON STATION_DRONE.drone_id = DRONE.id
            WHERE
                STATION_DRONE.is_active = 1 AND
                STATION.is_active = 1 AND
                DRONE.is_active = 1
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
