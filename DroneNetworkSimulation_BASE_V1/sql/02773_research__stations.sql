CREATE TABLE `stations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `charge_type` varchar(255) NOT NULL,
  `location_latitude` varchar(255) NOT NULL,
  `location_longitude` varchar(255) NOT NULL,
  `drone_capacity` int(11) NOT NULL,
  `is_medical` tinyint(4) DEFAULT NULL,
  `is_maintenance` tinyint(4) DEFAULT NULL,
  `is_parcel_pickup` tinyint(4) DEFAULT NULL,
  `is_parking_allowed` tinyint(4) DEFAULT NULL,
  `weather_proof` tinyint(4) DEFAULT NULL,
  `is_active` tinyint(4) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO stations (name, charge_type, location_latitude, location_longitude, drone_capacity, is_medical, is_maintenance, is_parcel_pickup, is_parking_allowed, weather_proof, is_active, created_at, updated_at)
VALUES
    ('Sarospatak Central Station', 'Grid', '48.3154', '21.5768', 10, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('North Sarospatak Station', 'Solar', '48.3305', '21.5664', 8, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('South Sarospatak Station', 'Grid', '48.2963', '21.5989', 6, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('East Sarospatak Station', 'Solar_Wind', '48.3111', '21.6152', 12, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('West Sarospatak Station', 'Grid', '48.3098', '21.5599', 15, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak City Center Station', 'Solar', '48.3212', '21.5797', 20, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Industrial Zone Station', 'Grid', '48.3037', '21.5864', 18, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Airport Station', 'Solar', '48.3128', '21.6001', 5, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak University Station', 'Grid', '48.3145', '21.5833', 10, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Suburb Station', 'Solar', '48.3269', '21.5689', 7, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak East Hills Station', 'Grid', '48.3176', '21.6237', 9, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak West Hills Station', 'Solar', '48.3042', '21.5506', 6, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Riverside Station', 'Grid', '48.3189', '21.5876', 8, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Lakeside Station', 'Solar', '48.3058', '21.5782', 12, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Central Park Station', 'Grid', '48.3275', '21.5774', 15, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Hilltop Station', 'Solar', '48.3104', '21.5912', 10, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Valley Station', 'Grid_Solar_Hydro', '48.3197', '21.5729', 7, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Downtown Station', 'Solar', '48.3223', '21.5843', 20, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Historic Center Station', 'Grid', '48.3201', '21.5788', 8, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Railway Station', 'Solar', '48.3260', '21.5795', 12, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Bus Station', 'Grid', '48.3207', '21.5765', 10, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Shopping Mall Station', 'Solar', '48.3183', '21.5819', 15, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Sports Complex Station', 'Grid', '48.3288', '21.5902', 8, 1, 0, 1, 1, 1, 1, NOW(), NOW()),
    ('Sarospatak Cultural Center Station', 'Solar', '48.3239', '21.5780', 10, 1, 0, 1, 1, 1, 1, NOW(), NOW())
;

