CREATE TABLE stations (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location_latitude VARCHAR(255) NOT NULL,
    location_longitude VARCHAR(255) NOT NULL,
    drone_capacity INT NOT NULL,
    is_active TINYINT NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL
);

INSERT INTO stations (name, location_latitude, location_longitude, drone_capacity, is_active, created_at, updated_at)
VALUES
    ('Sárospatak Central Station', '48.3154', '21.5768', 10, 1, NOW(), NOW()),
    ('North Sárospatak Station', '48.3305', '21.5664', 8, 1, NOW(), NOW()),
    ('South Sárospatak Station', '48.2963', '21.5989', 6, 1, NOW(), NOW()),
    ('East Sárospatak Station', '48.3111', '21.6152', 12, 1, NOW(), NOW()),
    ('West Sárospatak Station', '48.3098', '21.5599', 15, 1, NOW(), NOW()),
    ('Sárospatak City Center Station', '48.3212', '21.5797', 20, 1, NOW(), NOW()),
    ('Sárospatak Industrial Zone Station', '48.3037', '21.5864', 18, 1, NOW(), NOW()),
    ('Sárospatak Airport Station', '48.3128', '21.6001', 5, 1, NOW(), NOW()),
    ('Sárospatak University Station', '48.3145', '21.5833', 10, 1, NOW(), NOW()),
    ('Sárospatak Suburb Station', '48.3269', '21.5689', 7, 1, NOW(), NOW()),
    ('Sárospatak East Hills Station', '48.3176', '21.6237', 9, 1, NOW(), NOW()),
    ('Sárospatak West Hills Station', '48.3042', '21.5506', 6, 1, NOW(), NOW()),
    ('Sárospatak Riverside Station', '48.3189', '21.5876', 8, 1, NOW(), NOW()),
    ('Sárospatak Lakeside Station', '48.3058', '21.5782', 12, 1, NOW(), NOW()),
    ('Sárospatak Central Park Station', '48.3275', '21.5774', 15, 1, NOW(), NOW()),
    ('Sárospatak Hilltop Station', '48.3104', '21.5912', 10, 1, NOW(), NOW()),
    ('Sárospatak Valley Station', '48.3197', '21.5729', 7, 1, NOW(), NOW()),
    ('Sárospatak Downtown Station', '48.3223', '21.5843', 20, 1, NOW(), NOW()),
    ('Sárospatak Historic Center Station', '48.3201', '21.5788', 8, 1, NOW(), NOW()),
    ('Sárospatak Railway Station', '48.3260', '21.5795', 12, 1, NOW(), NOW()),
    ('Sárospatak Bus Station', '48.3207', '21.5765', 10, 1, NOW(), NOW()),
    ('Sárospatak Shopping Mall Station', '48.3183', '21.5819', 15, 1, NOW(), NOW()),
    ('Sárospatak Sports Complex Station', '48.3288', '21.5902', 8, 1, NOW(), NOW()),
    ('Sárospatak Cultural Center Station', '48.3239', '21.5780', 10, 1, NOW(), NOW())
;
