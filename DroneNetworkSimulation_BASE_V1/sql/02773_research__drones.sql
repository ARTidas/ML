CREATE TABLE drones (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    model VARCHAR(100) NOT NULL,
    manufacturer VARCHAR(100) NOT NULL,
    weight DECIMAL(10, 2) NOT NULL, /* Kg */
    max_speed DECIMAL(10, 2) NOT NULL, /* Km/h */
    is_active TINYINT NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
);

INSERT INTO drones (model, manufacturer, weight, max_speed, is_active, created_at, updated_at)
VALUES
    ('Phantom 4 Pro', 'DJI', 1.38, 20, 1, NOW(), NOW()),
    ('Mavic Air 2', 'DJI', 0.57, 19, 1, NOW(), NOW()),
    ('Inspire 2', 'DJI', 4.25, 58, 1, NOW(), NOW()),
    ('Anafi', 'Parrot', 0.31, 15, 1, NOW(), NOW()),
    ('Mavic Mini', 'DJI', 0.25, 13, 1, NOW(), NOW()),
    ('Skydio 2', 'Skydio', 1.3, 36, 1, NOW(), NOW()),
    ('Mavic 2 Pro', 'DJI', 0.91, 20, 1, NOW(), NOW()),
    ('Autel EVO II', 'Autel Robotics', 1.1, 20, 1, NOW(), NOW()),
    ('Mavic Air', 'DJI', 0.43, 17, 1, NOW(), NOW()),
    ('Typhoon H Pro', 'Yuneec', 1.98, 22, 1, NOW(), NOW()),
    ('Phantom 3 Standard', 'DJI', 1.22, 16, 0, NOW(), NOW()),
    ('Inspire 1', 'DJI', 3.44, 49, 0, NOW(), NOW()),
    ('Mavic Pro', 'DJI', 0.73, 40, 0, NOW(), NOW()),
    ('Bebop 2', 'Parrot', 0.5, 16, 0, NOW(), NOW()),
    ('Spark', 'DJI', 0.3, 14, 0, NOW(), NOW()),
    ('Skydio R1', 'Skydio', 2.2, 25, 0, NOW(), NOW()),
    ('Typhoon Q500 4K', 'Yuneec', 1.85, 16, 0, NOW(), NOW()),
    ('Autel Robotics X-Star Premium', 'Autel Robotics', 1.2, 16, 0, NOW(), NOW()),
    ('Parrot AR.Drone 2.0', 'Parrot', 0.42, 11, 0, NOW(), NOW()),
    ('DJI Phantom 2 Vision+', 'DJI', 1.16, 15, 0, NOW(), NOW()),
    ('Xiaomi Mi Drone', 'Xiaomi', 0.95, 18, 0, NOW(), NOW()),
    ('DJI Mavic Air 2S', 'DJI', 0.6, 20, 1, NOW(), NOW()),
    ('DJI FPV Combo', 'DJI', 0.8, 140, 1, NOW(), NOW()),
    ('Skydio X2', 'Skydio', 1.4, 35, 1, NOW(), NOW()),
    ('Parrot Anafi USA', 'Parrot', 0.71, 32, 1, NOW(), NOW()),
    ('DJI Mini 2', 'DJI', 0.25, 16, 1, NOW(), NOW()),
    ('Autel Robotics EVO II Pro', 'Autel Robotics', 1.15, 45, 1, NOW(), NOW()),
    ('Yuneec Typhoon H3', 'Yuneec', 3.25, 50, 1, NOW(), NOW()),
    ('Skydio X2D', 'Skydio', 1.4, 45, 1, NOW(), NOW()),
    ('DJI Air 2S', 'DJI', 0.6, 19, 1, NOW(), NOW())
;