CREATE TABLE station_drones (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    drone_id INT NOT NULL,
    station_id INT NOT NULL,
    is_active TINYINT NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    FOREIGN KEY (drone_id) REFERENCES drones(id),
    FOREIGN KEY (station_id) REFERENCES stations(id)
);

-- Randomly assign drones to stations
INSERT INTO station_drones (drone_id, station_id, is_active, created_at, updated_at)
SELECT
    drones.id AS drone_id,
    stations.id AS station_id,
    1 AS is_active,
    NOW() AS created_at,
    NOW() AS updated_at
FROM
    drones
CROSS JOIN
    stations
ORDER BY
    RAND() -- Randomly assign drones to stations
LIMIT
    25; -- Number of records to insert