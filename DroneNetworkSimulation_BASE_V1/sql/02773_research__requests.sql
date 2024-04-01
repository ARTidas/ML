CREATE TABLE requests (
    id INT(11) NOT NULL AUTO_INCREMENT,
    type VARCHAR(50) NOT NULL,
    location_latitude FLOAT NOT NULL,
    location_longitude FLOAT NOT NULL,
    description TEXT,
    requester_name VARCHAR(100) NOT NULL,
    requester_contact_phone VARCHAR(100) NOT NULL,
    is_active TINYINT(1) NOT NULL DEFAULT 1,
    created_at DATETIME NOT NULL,
    updated_at DATETIME NOT NULL,
    PRIMARY KEY (id)
);

-- Update coordinate pairs with random number bwteen a SW and NE box coordinate
-- Sarospatak: [[48.29478001542118, 21.53903767111582], [48.35124764285087, 21.610895280734315]] -- SW[lat, lng], NE[lat, lng]
UPDATE requests
SET 
    location_latitude = 48.29478001542118 + (RAND() * (48.35124764285087 - 48.29478001542118)),
    location_longitude = 21.53903767111582 + (RAND() * (21.610895280734315 - 21.53903767111582))
;
UPDATE requests
SET 
    location_latitude = SW_latitude + (RAND() * (NE_latitude - SW_latitude)),
    location_longitude = SW_longitude + (RAND() * (NE_longitude - SW_longitude))
;

-- Medical emergency requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Medical Emergency', 48.3202, 21.5822, 'Patient with chest pain needs immediate medical attention.', 'John Doe', '+123456789', NOW(), NOW()),
    ('Medical Emergency', 48.3210, 21.5830, 'Patient with severe headache needs urgent medical attention.', 'Alice Smith', '+123456789', NOW(), NOW()),
    ('Medical Emergency', 48.3195, 21.5815, 'Elderly person with difficulty breathing needs immediate assistance.', 'Robert Johnson', '+987654321', NOW(), NOW()),
    ('Medical Emergency', 48.3225, 21.5800, 'Individual with a broken leg requires ambulance transport to the hospital.', 'Emily Brown', '+1122334455', NOW(), NOW()),
    ('Medical Emergency', 48.3180, 21.5845, 'Suspected heart attack patient needs emergency medical care.', 'Michael Wilson', '+9988776655', NOW(), NOW())
;

-- Photography requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Wedding Photography', 48.3202, 21.5822, 'Wedding ceremony at a beautiful location.', 'Emily Davis', '+1122334455', NOW(), NOW()),
    ('Wedding Photography', 48.3240, 21.5790, 'Wedding ceremony at a local vineyard.', 'Sophia Miller', '+123456789', NOW(), NOW()),
    ('Wedding Photography', 48.3190, 21.5820, 'Outdoor wedding reception in a picturesque garden.', 'Daniel Wilson', '+987654321', NOW(), NOW()),
    ('Event Photography', 48.3205, 21.5815, 'Birthday celebration at a restaurant.', 'Olivia Johnson', '+1122334455', NOW(), NOW()),
    ('Portrait Photography', 48.3215, 21.5805, 'Family portrait session in a scenic park.', 'William Brown', '+9988776655', NOW(), NOW()),
    ('Wedding Videography', 48.3250, 21.5800, 'Full coverage of wedding ceremony and reception.', 'Emily Davis', '+123456789', NOW(), NOW()),
    ('Event Videography', 48.3200, 21.5810, 'Recording of corporate event presentations.', 'Michael Brown', '+987654321', NOW(), NOW()),
    ('Documentary Videography', 48.3220, 21.5795, 'Filming a short documentary about local culture.', 'Sophia Wilson', '+1122334455', NOW(), NOW()),
    ('Promotional Videography', 48.3195, 21.5805, 'Creating a promotional video for a local business.', 'David Clark', '+9988776655', NOW(), NOW())
;

-- Delivery requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Food Delivery', 48.3202, 21.5822, 'Delivery of local cuisine to a residence.', 'David Clark', '+123456789', NOW(), NOW()),
    ('Parcel Delivery', 48.3190, 21.5805, 'Delivery of a package to a business address.', 'Mark Roberts', '+987654321', NOW(), NOW()),
    ('Parcel Delivery', 48.3230, 21.5790, 'Urgent delivery of documents to a law office.', 'Emma Davis', '+1122334455', NOW(), NOW()),
    ('Food Delivery', 48.3185, 21.5815, 'Delivery of lunch to an office.', 'John Smith', '+9988776655', NOW(), NOW()),
    ('Food Delivery', 48.3205, 21.5810, 'Delivery of local cuisine to a residence.', 'Sophia Wilson', '+123456789', NOW(), NOW()),
    ('Parcel Delivery', 48.3195, 21.5800, 'Delivery of a package to a business address.', 'David Clark', '+987654321', NOW(), NOW()),
    ('Parcel Delivery', 48.3220, 21.5795, 'Urgent delivery of documents to a law office.', 'Jennifer White', '+1122334455', NOW(), NOW()),
    ('Food Delivery', 48.3180, 21.5815, 'Delivery of lunch to an office.', 'Michael Brown', '+9988776655', NOW(), NOW()),
    ('Parcel Delivery', 48.3200, 21.5800, 'Delivery of a package to a residential address.', 'Emily Davis', '+1122334455', NOW(), NOW()),
    ('Food Delivery', 48.3190, 21.5805, 'Delivery of dinner to a hotel room.', 'Alice Johnson', '+1122334455', NOW(), NOW()),
    ('Parcel Delivery', 48.3210, 21.5790, 'Urgent delivery of legal documents to a law firm.', 'Bob Williams', '+9988776655', NOW(), NOW()),
    ('Food Delivery', 48.3185, 21.5810, 'Delivery of breakfast to a residential address.', 'Laura Taylor', '+123456789', NOW(), NOW()),
    ('Parcel Delivery', 48.3205, 21.5805, 'Delivery of a package to an office address.', 'John Doe', '+987654321', NOW(), NOW()),
    ('Food Delivery', 48.3195, 21.5815, 'Delivery of lunch to a construction site.', 'Jane Smith', '+1122334455', NOW(), NOW()),
    ('Parcel Delivery', 48.3215, 21.5795, 'Urgent delivery of medical supplies to a clinic.', 'Robert Johnson', '+9988776655', NOW(), NOW()),
    ('Food Delivery', 48.3180, 21.5800, 'Delivery of dinner to a residential address.', 'Susan Davis', '+1122334455', NOW(), NOW()),
    ('Parcel Delivery', 48.3200, 21.5810, 'Delivery of a package to a hotel room.', 'William Brown', '+9988776655', NOW(), NOW()),
    ('Food Delivery', 48.3190, 21.5795, 'Delivery of lunch to an office address.', 'Karen Wilson', '+123456789', NOW(), NOW()),
    ('Parcel Delivery', 48.3220, 21.5815, 'Urgent delivery of legal documents to a law office.', 'Ryan Taylor', '+987654321', NOW(), NOW()),
    ('Food Delivery', 48.3185, 21.5805, 'Delivery of breakfast to a residential address.', 'Jessica Johnson', '+1122334455', NOW(), NOW()),
    ('Parcel Delivery', 48.3205, 21.5810, 'Delivery of a package to a business address.', 'Kevin Smith', '+9988776655', NOW(), NOW()),
    ('Food Delivery', 48.3195, 21.5790, 'Delivery of dinner to a hotel room.', 'Amanda Davis', '+123456789', NOW(), NOW()),
    ('Parcel Delivery', 48.3215, 21.5810, 'Urgent delivery of medical supplies to a clinic.', 'Christopher Brown', '+987654321', NOW(), NOW()),
    ('Food Delivery', 48.3180, 21.5805, 'Delivery of lunch to a construction site.', 'Megan Wilson', '+1122334455', NOW(), NOW())
;

-- Survey requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Utility Survey', 48.3202, 21.5822, 'Surveying utility lines for construction planning.', 'Jennifer White', '+123456789', NOW(), NOW()),
    ('Utility Survey', 48.3220, 21.5795, 'Surveying utility lines for construction planning.', 'Jennifer White', '+123456789', NOW(), NOW()),
    ('Environmental Survey', 48.3190, 21.5815, 'Surveying wildlife habitat for conservation purposes.', 'Andrew Johnson', '+987654321', NOW(), NOW()),
    ('Agricultural Survey', 48.3205, 21.5800, 'Surveying crop conditions for agricultural management.', 'Emma Davis', '+1122334455', NOW(), NOW()),
    ('Utility Survey', 48.3210, 21.5790, 'Surveying utility lines for infrastructure development.', 'Michael Brown', '+9988776655', NOW(), NOW()),
    ('Environmental Survey', 48.3185, 21.5805, 'Surveying ecological impact for a development project.', 'Sophia Wilson', '+1122334455', NOW(), NOW()),
    ('Agricultural Survey', 48.3200, 21.5810, 'Surveying soil quality for farming purposes.', 'David Clark', '+9988776655', NOW(), NOW()),
    ('Utility Survey', 48.3195, 21.5795, 'Surveying underground pipelines for maintenance planning.', 'Laura Taylor', '+123456789', NOW(), NOW()),
    ('Environmental Survey', 48.3220, 21.5810, 'Surveying air quality for pollution monitoring.', 'Mark Roberts', '+987654321', NOW(), NOW()),
    ('Agricultural Survey', 48.3180, 21.5800, 'Surveying irrigation systems for efficiency analysis.', 'Emily Davis', '+1122334455', NOW(), NOW()),
    ('Utility Survey', 48.3205, 21.5815, 'Surveying electrical grid for infrastructure upgrade.', 'Alice Johnson', '+1122334455', NOW(), NOW()),
    ('Environmental Survey', 48.3190, 21.5790, 'Surveying water bodies for ecological assessment.', 'Bob Williams', '+9988776655', NOW(), NOW()),
    ('Agricultural Survey', 48.3215, 21.5810, 'Surveying pest infestation for crop protection measures.', 'Susan Davis', '+123456789', NOW(), NOW()),
    ('Utility Survey', 48.3185, 21.5805, 'Surveying telecommunications network for expansion planning.', 'William Brown', '+987654321', NOW(), NOW()),
    ('Environmental Survey', 48.3200, 21.5810, 'Surveying noise pollution levels for mitigation strategies.', 'Karen Wilson', '+1122334455', NOW(), NOW()),
    ('Agricultural Survey', 48.3195, 21.5790, 'Surveying land erosion for soil conservation efforts.', 'Ryan Taylor', '+9988776655', NOW(), NOW())
;

-- Policing and law enforcement requests for drone services
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Drone Surveillance', 48.3205, 21.5815, 'Surveillance of public event for crowd control.', 'Officer Smith', '+123456789', NOW(), NOW()),
    ('Drone Search and Rescue', 48.3190, 21.5790, 'Search operation for missing person in wooded area.', 'Officer Johnson', '+987654321', NOW(), NOW()),
    ('Drone Reconnaissance', 48.3210, 21.5790, 'Reconnaissance of high-risk area before police operation.', 'Officer Brown', '+1122334455', NOW(), NOW()),
    ('Drone Traffic Monitoring', 48.3185, 21.5805, 'Traffic monitoring for accident prevention and management.', 'Officer Davis', '+9988776655', NOW(), NOW()),
    ('Drone Crime Scene Investigation', 48.3200, 21.5810, 'Investigation of crime scene for evidence collection.', 'Officer Wilson', '+1122334455', NOW(), NOW()),
    ('Drone Disaster Response', 48.3180, 21.5800, 'Assessment of disaster-affected area for rescue operations.', 'Officer Clark', '+9988776655', NOW(), NOW()),
    ('Drone Perimeter Security', 48.3220, 21.5810, 'Security patrol for protection of sensitive sites.', 'Officer Taylor', '+123456789', NOW(), NOW()),
    ('Drone Incident Management', 48.3195, 21.5795, 'Management of public safety incident from aerial perspective.', 'Officer Roberts', '+987654321', NOW(), NOW()),
    ('Drone Law Enforcement Support', 48.3185, 21.5805, 'Assistance in law enforcement operations from the air.', 'Officer White', '+1122334455', NOW(), NOW()),
    ('Drone Emergency Response', 48.3215, 21.5810, 'Immediate response to emergency situations using drones.', 'Officer Williams', '+9988776655', NOW(), NOW())
;

-- Drone service requests for educational and research applications
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Drone Mapping', 48.3205, 21.5815, 'Mapping archaeological site for research purposes.', 'Professor Smith', '+123456789', NOW(), NOW()),
    ('Drone Environmental Monitoring', 48.3190, 21.5790, 'Monitoring forest ecosystem for ecological study.', 'Researcher Johnson', '+987654321', NOW(), NOW()),
    ('Drone Agricultural Research', 48.3210, 21.5790, 'Studying crop growth patterns and disease detection.', 'Dr. Brown', '+1122334455', NOW(), NOW()),
    ('Drone Wildlife Observation', 48.3185, 21.5805, 'Observing bird migration patterns in natural reserves.', 'Biologist Davis', '+9988776655', NOW(), NOW()),
    ('Drone Geographical Survey', 48.3200, 21.5810, 'Surveying geographical features for geographical research.', 'Geographer Wilson', '+1122334455', NOW(), NOW()),
    ('Drone Atmospheric Research', 48.3180, 21.5800, 'Collecting atmospheric data for climate change research.', 'Climate Scientist Clark', '+9988776655', NOW(), NOW()),
    ('Drone Oceanographic Research', 48.3220, 21.5810, 'Studying ocean currents and marine life distribution.', 'Oceanographer Taylor', '+123456789', NOW(), NOW()),
    ('Drone Archaeological Survey', 48.3195, 21.5795, 'Surveying ancient ruins and historical sites.', 'Archaeologist Roberts', '+987654321', NOW(), NOW()),
    ('Drone Urban Planning', 48.3185, 21.5805, 'Assessing urban development and infrastructure planning.', 'Urban Planner White', '+1122334455', NOW(), NOW()),
    ('Drone Meteorological Research', 48.3215, 21.5810, 'Researching weather patterns and atmospheric phenomena.', 'Meteorologist Williams', '+9988776655', NOW(), NOW())
;

-- Drone search and rescue operations
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Search and Rescue - Missing Person', 48.3250, 21.5770, 'Search operation for a missing hiker in mountainous terrain.', 'Mountain Rescue Team', '+123456789', NOW(), NOW()),
    ('Search and Rescue - Lost Child', 48.3220, 21.5805, 'Search operation for a lost child in a forested area.', 'Local Police Department', '+987654321', NOW(), NOW()),
    ('Search and Rescue - Elderly Individual', 48.3195, 21.5795, 'Search operation for an elderly person with dementia.', 'Community Volunteer Group', '+1122334455', NOW(), NOW()),
    ('Search and Rescue - Animal', 48.3205, 21.5815, 'Rescue operation for a stranded dog on a cliff.', 'Animal Rescue Organization', '+9988776655', NOW(), NOW()),
    ('Search and Rescue - Flood Victim', 48.3185, 21.5805, 'Search operation for a person stranded in a flooded area.', 'Emergency Response Team', '+1122334455', NOW(), NOW()),
    ('Search and Rescue - Avalanche Victim', 48.3210, 21.5790, 'Search operation for a skier buried in an avalanche.', 'Mountain Rescue Team', '+9988776655', NOW(), NOW()),
    ('Search and Rescue - Boat Capsized', 48.3190, 21.5790, 'Search operation for individuals after a boat capsized.', 'Coast Guard', '+123456789', NOW(), NOW()),
    ('Search and Rescue - Climbing Accident', 48.3200, 21.5810, 'Search operation for a climber injured on a rock face.', 'Mountain Rescue Team', '+987654321', NOW(), NOW()),
    ('Search and Rescue - Vehicle Accident', 48.3225, 21.5795, 'Search operation for individuals trapped in a vehicle accident.', 'Emergency Medical Services', '+1122334455', NOW(), NOW()),
    ('Search and Rescue - Wilderness Expedition', 48.3180, 21.5800, 'Search operation for a group of lost hikers in a wilderness area.', 'National Park Rangers', '+9988776655', NOW(), NOW())
;

-- Security and surveillance requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Security Patrol - Residential Area', 48.3200, 21.5800, 'Patrol requested to monitor residential area for suspicious activity.', 'Neighborhood Watch Committee', '+123456789', NOW(), NOW()),
    ('Security Patrol - Commercial District', 48.3220, 21.5795, 'Patrol requested to monitor commercial district for potential theft.', 'Local Business Association', '+987654321', NOW(), NOW()),
    ('Security Patrol - Industrial Zone', 48.3195, 21.5785, 'Patrol requested to monitor industrial zone for unauthorized access.', 'Industrial Park Security Office', '+1122334455', NOW(), NOW()),
    ('Security Patrol - Event Venue', 48.3185, 21.5815, 'Patrol requested to monitor event venue for crowd control and safety.', 'Event Management Company', '+9988776655', NOW(), NOW()),
    ('Surveillance - Parking Lot', 48.3210, 21.5780, 'Surveillance requested to monitor parking lot for vandalism.', 'Parking Lot Management', '+1122334455', NOW(), NOW()),
    ('Surveillance - Public Park', 48.3180, 21.5790, 'Surveillance requested to monitor public park for illegal activities.', 'City Parks Department', '+9988776655', NOW(), NOW()),
    ('Surveillance - Traffic Intersection', 48.3205, 21.5805, 'Surveillance requested to monitor traffic intersection for traffic violations.', 'City Traffic Control', '+123456789', NOW(), NOW()),
    ('Surveillance - Public Transportation Hub', 48.3225, 21.5795, 'Surveillance requested to monitor public transportation hub for suspicious behavior.', 'Transportation Authority', '+987654321', NOW(), NOW()),
    ('Surveillance - Border Crossing', 48.3190, 21.5800, 'Surveillance requested to monitor border crossing for illegal immigration.', 'Border Security Agency', '+1122334455', NOW(), NOW()),
    ('Surveillance - Critical Infrastructure', 48.3200, 21.5820, 'Surveillance requested to monitor critical infrastructure for potential threats.', 'Infrastructure Security Agency', '+9988776655', NOW(), NOW())
;

-- Public Safety and Health requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Public Health Inspection - Restaurant', 48.3200, 21.5800, 'Health inspection requested for a restaurant following reports of food poisoning.', 'Local Health Department', '+123456789', NOW(), NOW()),
    ('Public Health Inspection - Swimming Pool', 48.3220, 21.5795, 'Health inspection requested for a swimming pool due to concerns about water quality.', 'Recreation Center Management', '+987654321', NOW(), NOW()),
    ('Public Health Inspection - Food Market', 48.3195, 21.5785, 'Health inspection requested for a food market to ensure compliance with hygiene standards.', 'Market Owners Association', '+1122334455', NOW(), NOW()),
    ('Public Health Awareness Campaign', 48.3185, 21.5815, 'Awareness campaign requested to educate the community about vaccination.', 'Public Health Advocacy Group', '+9988776655', NOW(), NOW()),
    ('Safety Inspection - School', 48.3210, 21.5780, 'Safety inspection requested for a school to identify potential hazards.', 'School Administration', '+1122334455', NOW(), NOW()),
    ('Safety Inspection - Playground', 48.3180, 21.5790, 'Safety inspection requested for a playground to ensure equipment safety.', 'City Parks Department', '+9988776655', NOW(), NOW()),
    ('Emergency Response - Hazardous Material Spill', 48.3205, 21.5805, 'Emergency response requested for a hazardous material spill.', 'Environmental Protection Agency', '+123456789', NOW(), NOW()),
    ('Emergency Medical Service - Public Event', 48.3225, 21.5795, 'Emergency medical service requested for a public event.', 'Event Organizer', '+987654321', NOW(), NOW()),
    ('Emergency Medical Service - Residential Area', 48.3190, 21.5800, 'Emergency medical service requested for a residential area.', 'Resident Association', '+1122334455', NOW(), NOW()),
    ('Public Safety Campaign - Fire Prevention', 48.3200, 21.5820, 'Public safety campaign requested to raise awareness about fire prevention measures.', 'Fire Department', '+9988776655', NOW(), NOW())
;

-- Agricultural / Urban Green Space Monitoring requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Crop Monitoring', 48.3150, 21.5790, 'Monitoring crop health and growth for agricultural management.', 'Local Farming Cooperative', '+123456789', NOW(), NOW()),
    ('Soil Quality Assessment', 48.3180, 21.5800, 'Assessment of soil quality for urban green space management.', 'City Parks Department', '+987654321', NOW(), NOW()),
    ('Water Usage Monitoring', 48.3190, 21.5810, 'Monitoring water usage for irrigation purposes in agricultural areas.', 'Water Management Authority', '+1122334455', NOW(), NOW()),
    ('Pest Infestation Detection', 48.3200, 21.5820, 'Detection of pest infestation in urban green spaces and agricultural fields.', 'Department of Agriculture', '+9988776655', NOW(), NOW()),
    ('Urban Green Space Mapping', 48.3210, 21.5830, 'Mapping of urban green spaces for better city planning and management.', 'Urban Planning Department', '+1122334455', NOW(), NOW()),
    ('Agricultural Research Plot Monitoring', 48.3220, 21.5840, 'Monitoring agricultural research plots for experimental purposes.', 'Research Institute for Agriculture', '+9988776655', NOW(), NOW()),
    ('Forest Health Assessment', 48.3230, 21.5850, 'Assessment of forest health to identify disease outbreaks and pest infestations.', 'Forestry Department', '+123456789', NOW(), NOW()),
    ('Urban Vegetation Mapping', 48.3240, 21.5860, 'Mapping of urban vegetation to assess green cover and biodiversity.', 'Environmental Conservation Group', '+987654321', NOW(), NOW()),
    ('Crop Yield Prediction', 48.3250, 21.5870, 'Prediction of crop yields using remote sensing and data analytics.', 'Agricultural Technology Company', '+1122334455', NOW(), NOW()),
    ('Urban Green Space Usage Analysis', 48.3260, 21.5880, 'Analysis of urban green space usage patterns for recreational activities.', 'City Recreation Department', '+9988776655', NOW(), NOW())
;

-- Precision Agriculture requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Precision Agriculture - Crop Monitoring', 48.3150, 21.5790, 'Monitoring crop health and growth using precision agriculture techniques.', 'Local Farming Cooperative', '+123456789', NOW(), NOW()),
    ('Precision Agriculture - Soil Sampling', 48.3180, 21.5800, 'Collecting soil samples for precision soil analysis and nutrient management.', 'Agricultural Consultant Firm', '+987654321', NOW(), NOW()),
    ('Precision Agriculture - Irrigation Management', 48.3190, 21.5810, 'Optimizing irrigation schedules based on crop water needs and soil moisture levels.', 'Irrigation Technology Company', '+1122334455', NOW(), NOW()),
    ('Precision Agriculture - Drone Mapping', 48.3200, 21.5820, 'Generating high-resolution drone maps for precision farming applications.', 'Drone Service Provider', '+9988776655', NOW(), NOW()),
    ('Precision Agriculture - Crop Health Monitoring', 48.3210, 21.5830, 'Using drones and sensors to monitor crop health and detect anomalies.', 'AgTech Startup', '+1122334455', NOW(), NOW()),
    ('Precision Agriculture - Yield Prediction', 48.3220, 21.5840, 'Predicting crop yields based on historical data and advanced analytics.', 'Precision Agriculture Research Institute', '+9988776655', NOW(), NOW()),
    ('Precision Agriculture - Weed Detection', 48.3230, 21.5850, 'Identifying and mapping weeds in agricultural fields using drone imagery.', 'Crop Protection Company', '+123456789', NOW(), NOW()),
    ('Precision Agriculture - Disease Diagnosis', 48.3240, 21.5860, 'Diagnosing plant diseases early using remote sensing and machine learning algorithms.', 'Agronomy Research Center', '+987654321', NOW(), NOW()),
    ('Precision Agriculture - Variable Rate Application', 48.3250, 21.5870, 'Applying inputs such as fertilizers and pesticides at variable rates based on field variability.', 'Precision Ag Solutions Provider', '+1122334455', NOW(), NOW()),
    ('Precision Agriculture - Harvest Management', 48.3260, 21.5880, 'Optimizing harvest operations for maximum efficiency and quality.', 'Harvest Technology Company', '+9988776655', NOW(), NOW())
;

-- Precision Agriculture requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Precision Agriculture - Crop Monitoring', 48.3150, 21.5790, 'Monitoring crop health and growth using precision agriculture techniques.', 'Local Farming Cooperative', '+123456789', NOW(), NOW()),
    ('Precision Agriculture - Soil Sampling', 48.3180, 21.5800, 'Collecting soil samples for precision soil analysis and nutrient management.', 'Agricultural Consultant Firm', '+987654321', NOW(), NOW()),
    ('Precision Agriculture - Irrigation Management', 48.3190, 21.5810, 'Optimizing irrigation schedules based on crop water needs and soil moisture levels.', 'Irrigation Technology Company', '+1122334455', NOW(), NOW()),
    ('Precision Agriculture - Drone Mapping', 48.3200, 21.5820, 'Generating high-resolution drone maps for precision farming applications.', 'Drone Service Provider', '+9988776655', NOW(), NOW()),
    ('Precision Agriculture - Crop Health Monitoring', 48.3210, 21.5830, 'Using drones and sensors to monitor crop health and detect anomalies.', 'AgTech Startup', '+1122334455', NOW(), NOW()),
    ('Precision Agriculture - Yield Prediction', 48.3220, 21.5840, 'Predicting crop yields based on historical data and advanced analytics.', 'Precision Agriculture Research Institute', '+9988776655', NOW(), NOW()),
    ('Precision Agriculture - Weed Detection', 48.3230, 21.5850, 'Identifying and mapping weeds in agricultural fields using drone imagery.', 'Crop Protection Company', '+123456789', NOW(), NOW()),
    ('Precision Agriculture - Disease Diagnosis', 48.3240, 21.5860, 'Diagnosing plant diseases early using remote sensing and machine learning algorithms.', 'Agronomy Research Center', '+987654321', NOW(), NOW()),
    ('Precision Agriculture - Variable Rate Application', 48.3250, 21.5870, 'Applying inputs such as fertilizers and pesticides at variable rates based on field variability.', 'Precision Ag Solutions Provider', '+1122334455', NOW(), NOW()),
    ('Precision Agriculture - Harvest Management', 48.3260, 21.5880, 'Optimizing harvest operations for maximum efficiency and quality.', 'Harvest Technology Company', '+9988776655', NOW(), NOW())
;

-- Wildlife Monitoring requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Wildlife Tracking', 48.4000, 21.6000, 'Tracking the movement of tagged animals for research and conservation purposes.', 'Wildlife Conservation Society', '+123456789', NOW(), NOW()),
    ('Wildlife Census', 48.4100, 21.6100, 'Conducting a census of wildlife populations in a designated area.', 'National Park Authority', '+987654321', NOW(), NOW()),
    ('Animal Behavior Study', 48.4200, 21.6200, 'Observing and documenting the behavior of specific animal species in their natural habitat.', 'Research Institute for Wildlife Behavior', '+1122334455', NOW(), NOW()),
    ('Biodiversity Assessment', 48.4300, 21.6300, 'Assessing the biodiversity of an ecosystem by documenting the presence of various species.', 'Environmental Conservation Organization', '+9988776655', NOW(), NOW()),
    ('Illegal Wildlife Trade Monitoring', 48.4400, 21.6400, 'Monitoring and documenting instances of illegal wildlife trade activity.', 'Wildlife Crime Enforcement Agency', '+1122334455', NOW(), NOW()),
    ('Habitat Restoration Assessment', 48.4500, 21.6500, 'Assessing the effectiveness of habitat restoration efforts on wildlife populations.', 'Habitat Restoration NGO', '+9988776655', NOW(), NOW()),
    ('Bird Migration Study', 48.4600, 21.6600, 'Studying the patterns and routes of bird migration using tracking devices.', 'Ornithological Research Center', '+123456789', NOW(), NOW()),
    ('Invasive Species Monitoring', 48.4700, 21.6700, 'Monitoring and controlling invasive species populations to protect native wildlife.', 'Invasive Species Management Agency', '+987654321', NOW(), NOW()),
    ('Endangered Species Conservation', 48.4800, 21.6800, 'Implementing conservation measures to protect endangered species and their habitats.', 'Endangered Species Protection Organization', '+1122334455', NOW(), NOW()),
    ('Wildlife Disease Surveillance', 48.4900, 21.6900, 'Monitoring wildlife populations for the presence of infectious diseases.', 'Wildlife Health Research Institute', '+9988776655', NOW(), NOW())
;

-- Stray Animal Services requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Stray Animal Pickup', 48.4100, 21.6100, 'Reported stray dog in need of pickup and shelter.', 'Local Animal Control', '+123456789', NOW(), NOW()),
    ('Animal Shelter Placement', 48.4200, 21.6200, 'Stray cat found and in need of temporary shelter and care.', 'Animal Rescue Foundation', '+987654321', NOW(), NOW()),
    ('Emergency Veterinary Care', 48.4300, 21.6300, 'Injured stray dog requiring immediate medical attention.', 'Veterinary Emergency Clinic', '+1122334455', NOW(), NOW()),
    ('Stray Animal Adoption', 48.4400, 21.6400, 'Friendly stray puppy found and available for adoption.', 'Local Animal Shelter', '+9988776655', NOW(), NOW()),
    ('Spay/Neuter Program', 48.4500, 21.6500, 'Stray cat population control through spaying and neutering services.', 'Spay/Neuter Initiative', '+1122334455', NOW(), NOW()),
    ('Stray Animal Feeding Program', 48.4600, 21.6600, 'Providing food and water to stray animals in designated areas.', 'Community Animal Welfare Group', '+9988776655', NOW(), NOW()),
    ('Stray Animal Microchipping', 48.4700, 21.6700, 'Microchipping stray animals for identification and owner tracing purposes.', 'Animal Identification Project', '+123456789', NOW(), NOW()),
    ('Lost Pet Reporting', 48.4800, 21.6800, 'Report of a lost pet to aid in locating and reuniting with its owner.', 'Lost and Found Pets Association', '+987654321', NOW(), NOW()),
    ('Community Outreach Program', 48.4900, 21.6900, 'Educational program on responsible pet ownership and stray animal management.', 'Community Animal Education Initiative', '+1122334455', NOW(), NOW())
;

-- Construction Site Monitoring requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Construction Progress Monitoring', 48.4100, 21.6100, 'Monitoring construction progress and compliance with project timeline.', 'Construction Management Services', '+123456789', NOW(), NOW()),
    ('Safety Inspection', 48.4200, 21.6200, 'Inspecting construction site for compliance with safety regulations.', 'Safety Inspection Agency', '+987654321', NOW(), NOW()),
    ('Environmental Impact Assessment', 48.4300, 21.6300, 'Assessing the environmental impact of construction activities on surrounding areas.', 'Environmental Consulting Firm', '+1122334455', NOW(), NOW()),
    ('Noise Pollution Monitoring', 48.4400, 21.6400, 'Monitoring noise levels generated by construction activities.', 'Acoustic Engineering Services', '+9988776655', NOW(), NOW()),
    ('Air Quality Monitoring', 48.4500, 21.6500, 'Monitoring air quality around the construction site.', 'Environmental Monitoring Company', '+1122334455', NOW(), NOW()),
    ('Traffic Management Plan Implementation', 48.4600, 21.6600, 'Implementing traffic management plan to minimize disruption caused by construction.', 'Traffic Management Solutions', '+9988776655', NOW(), NOW()),
    ('Site Security Surveillance', 48.4700, 21.6700, 'Surveillance of construction site to prevent theft and vandalism.', 'Security Services Provider', '+123456789', NOW(), NOW()),
    ('Material Delivery Coordination', 48.4800, 21.6800, 'Coordinating delivery of construction materials to the site.', 'Logistics and Supply Chain Services', '+987654321', NOW(), NOW()),
    ('Utility Infrastructure Monitoring', 48.4900, 21.6900, 'Monitoring utility infrastructure during construction to prevent damage.', 'Utility Management Company', '+1122334455', NOW(), NOW())
;

-- Insurance Inspection requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Property Assessment', 48.4100, 21.6100, 'Assessing the condition of a property for insurance purposes.', 'Insurance Company A', '+123456789', NOW(), NOW()),
    ('Vehicle Inspection', 48.4200, 21.6200, 'Inspecting a vehicle for insurance coverage evaluation.', 'Insurance Company B', '+987654321', NOW(), NOW()),
    ('Asset Valuation', 48.4300, 21.6300, 'Valuating assets for insurance coverage determination.', 'Insurance Company C', '+1122334455', NOW(), NOW()),
    ('Risk Assessment', 48.4400, 21.6400, 'Assessing risk factors associated with a property or asset.', 'Insurance Company D', '+9988776655', NOW(), NOW()),
    ('Claims Investigation', 48.4500, 21.6500, 'Investigating insurance claims for validity and accuracy.', 'Insurance Company E', '+1122334455', NOW(), NOW()),
    ('Fraud Detection', 48.4600, 21.6600, 'Detecting fraudulent insurance claims and activities.', 'Insurance Company F', '+9988776655', NOW(), NOW()),
    ('Loss Adjustment', 48.4700, 21.6700, 'Adjusting insurance claims for losses incurred.', 'Insurance Company G', '+123456789', NOW(), NOW()),
    ('Liability Assessment', 48.4800, 21.6800, 'Assessing liability factors for insurance coverage determination.', 'Insurance Company H', '+987654321', NOW(), NOW()),
    ('Policy Review', 48.4900, 21.6900, 'Reviewing insurance policies for coverage adequacy.', 'Insurance Company I', '+1122334455', NOW(), NOW())
;

-- Risk Assessment requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Natural Disaster Risk Assessment', 48.4100, 21.6100, 'Assessing the risk of natural disasters in a specific area.', 'Disaster Response Team A', '+123456789', NOW(), NOW()),
    ('Financial Risk Analysis', 48.4200, 21.6200, 'Analyzing financial risks associated with investment decisions.', 'Investment Firm B', '+987654321', NOW(), NOW()),
    ('Health Risk Evaluation', 48.4300, 21.6300, 'Evaluating health risks in a community for public health planning.', 'Health Department C', '+1122334455', NOW(), NOW()),
    ('Cybersecurity Risk Assessment', 48.4400, 21.6400, 'Assessing cybersecurity risks in a company\'s IT infrastructure.', 'Technology Company D', '+9988776655', NOW(), NOW()),
    ('Environmental Risk Identification', 48.4500, 21.6500, 'Identifying environmental risks associated with industrial activities.', 'Environmental Agency E', '+1122334455', NOW(), NOW()),
    ('Supply Chain Risk Analysis', 48.4600, 21.6600, 'Analyzing risks in the supply chain for a manufacturing company.', 'Manufacturing Company F', '+9988776655', NOW(), NOW()),
    ('Security Threat Assessment', 48.4700, 21.6700, 'Assessing security threats for a government facility.', 'Government Agency G', '+123456789', NOW(), NOW()),
    ('Market Risk Evaluation', 48.4800, 21.6800, 'Evaluating market risks for investment portfolios.', 'Financial Institution H', '+987654321', NOW(), NOW()),
    ('Operational Risk Assessment', 48.4900, 21.6900, 'Assessing operational risks in business processes.', 'Business Corporation I', '+1122334455', NOW(), NOW())
;

-- Environmental Monitoring requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Air Quality Monitoring', 48.4100, 21.6100, 'Monitoring air quality levels in an urban area.', 'Environmental Agency A', '+123456789', NOW(), NOW()),
    ('Water Quality Assessment', 48.4200, 21.6200, 'Assessing the quality of water in a local river.', 'Water Conservation Group B', '+987654321', NOW(), NOW()),
    ('Soil Contamination Analysis', 48.4300, 21.6300, 'Analyzing soil samples for contamination from industrial activities.', 'Soil Testing Company C', '+1122334455', NOW(), NOW()),
    ('Noise Pollution Monitoring', 48.4400, 21.6400, 'Monitoring noise pollution levels near residential areas.', 'Local Municipality D', '+9988776655', NOW(), NOW()),
    ('Biodiversity Tracking', 48.4500, 21.6500, 'Tracking changes in biodiversity in a protected area.', 'Wildlife Conservation Group E', '+1122334455', NOW(), NOW()),
    ('Waste Management Assessment', 48.4600, 21.6600, 'Assessing waste management practices in a city.', 'Waste Management Company F', '+9988776655', NOW(), NOW()),
    ('Erosion Monitoring', 48.4700, 21.6700, 'Monitoring erosion levels along a coastline.', 'Coastal Protection Agency G', '+123456789', NOW(), NOW()),
    ('Climate Change Analysis', 48.4800, 21.6800, 'Analyzing data to understand the impact of climate change on local ecosystems.', 'Climate Research Institute H', '+987654321', NOW(), NOW()),
    ('Wildfire Risk Assessment', 48.4900, 21.6900, 'Assessing the risk of wildfires in forested areas.', 'Forest Management Group I', '+1122334455', NOW(), NOW())
;

-- Air Quality Measurements above High Traffic Areas
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Air Quality Monitoring', 48.4050, 21.6150, 'Monitoring air quality above a busy intersection.', 'Traffic Management Authority', '+123456789', NOW(), NOW()),
    ('Air Quality Monitoring', 48.4080, 21.6180, 'Assessing air pollution levels near a major highway.', 'Environmental Health Department', '+987654321', NOW(), NOW()),
    ('Air Quality Monitoring', 48.4110, 21.6210, 'Measuring particulate matter concentrations in a commercial district.', 'City Planning Commission', '+1122334455', NOW(), NOW()),
    ('Air Quality Monitoring', 48.4140, 21.6240, 'Monitoring nitrogen dioxide levels near a busy bus station.', 'Public Transportation Authority', '+9988776655', NOW(), NOW()),
    ('Air Quality Monitoring', 48.4170, 21.6270, 'Assessing carbon monoxide concentrations along a major road.', 'Environmental Protection Agency', '+1122334455', NOW(), NOW())
;

-- Disaster Response and Relief Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Disaster Response', 48.4200, 21.6300, 'Emergency assistance needed due to flooding in the area.', 'Local Emergency Management Agency', '+123456789', NOW(), NOW()),
    ('Disaster Relief', 48.4230, 21.6330, 'Supply distribution for residents affected by a recent earthquake.', 'Red Cross Relief Team', '+987654321', NOW(), NOW()),
    ('Disaster Response', 48.4260, 21.6360, 'Search and rescue operation required for individuals trapped in a collapsed building.', 'National Guard Rescue Unit', '+1122334455', NOW(), NOW()),
    ('Disaster Relief', 48.4290, 21.6390, 'Medical assistance needed for injured individuals after a wildfire outbreak.', 'Emergency Medical Services', '+9988776655', NOW(), NOW()),
    ('Disaster Response', 48.4320, 21.6420, 'Evacuation support needed for residents due to a chemical spill.', 'Fire Department', '+1122334455', NOW(), NOW())
;

-- Firefighting Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Firefighting', 48.4200, 21.6300, 'Large fire outbreak reported in a residential area.', 'Local Fire Department', '+123456789', NOW(), NOW()),
    ('Firefighting', 48.4230, 21.6330, 'Forest fire spreading rapidly, urgent assistance needed.', 'National Forest Service', '+987654321', NOW(), NOW()),
    ('Firefighting', 48.4260, 21.6360, 'Industrial facility fire requiring specialized equipment and personnel.', 'Industrial Safety Department', '+1122334455', NOW(), NOW()),
    ('Firefighting', 48.4290, 21.6390, 'House fire with people trapped inside, immediate rescue and suppression needed.', 'Emergency Response Team', '+9988776655', NOW(), NOW()),
    ('Firefighting', 48.4320, 21.6420, 'Vehicle fire on the highway causing traffic congestion.', 'Highway Patrol', '+1122334455', NOW(), NOW())
;

-- Accessing Remote Areas Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Accessing Remote Areas', 48.4500, 21.6000, 'Remote village cut off by heavy snowfall, needs emergency supplies.', 'Regional Relief Organization', '+123456789', NOW(), NOW()),
    ('Accessing Remote Areas', 48.4550, 21.6050, 'Mountain rescue operation required for injured hiker.', 'Mountain Rescue Team', '+987654321', NOW(), NOW()),
    ('Accessing Remote Areas', 48.4600, 21.6100, 'Delivery of medical supplies to a remote clinic inaccessible by road.', 'Medical Aid Foundation', '+1122334455', NOW(), NOW()),
    ('Accessing Remote Areas', 48.4650, 21.6150, 'Repairing power lines in a remote area affected by a storm.', 'Utility Maintenance Crew', '+9988776655', NOW(), NOW()),
    ('Accessing Remote Areas', 48.4700, 21.6200, 'Surveying wildlife in a remote forest reserve.', 'Environmental Conservation Group', '+1122334455', NOW(), NOW())
;

-- EMS Assistance Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('EMS Assistance', 48.4500, 21.6000, 'Emergency medical response needed for a cardiac arrest.', 'Local Ambulance Service', '+123456789', NOW(), NOW()),
    ('EMS Assistance', 48.4550, 21.6050, 'Assistance required for a childbirth emergency.', 'Emergency Response Team', '+987654321', NOW(), NOW()),
    ('EMS Assistance', 48.4600, 21.6100, 'Responding to a traffic accident with multiple injuries.', 'EMS Dispatch Center', '+1122334455', NOW(), NOW()),
    ('EMS Assistance', 48.4650, 21.6150, 'Medical assistance needed for a heat stroke victim.', 'Emergency Medical Unit', '+9988776655', NOW(), NOW()),
    ('EMS Assistance', 48.4700, 21.6200, 'Request for medical evacuation from a remote location.', 'Air Ambulance Service', '+1122334455', NOW(), NOW())
;

-- Ambulance Drone Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Ambulance Drone', 48.4500, 21.6000, 'Urgent medical supplies delivery to a remote area inaccessible by road.', 'Local Health Authority', '+123456789', NOW(), NOW()),
    ('Ambulance Drone', 48.4550, 21.6050, 'Medical equipment delivery for an emergency situation at a construction site.', 'Emergency Response Team', '+987654321', NOW(), NOW()),
    ('Ambulance Drone', 48.4600, 21.6100, 'Delivery of first aid supplies to a hiking trail for a injured hiker.', 'Hiking Safety Patrol', '+1122334455', NOW(), NOW()),
    ('Ambulance Drone', 48.4650, 21.6150, 'Assistance needed to deliver emergency medication to a remote village cut off by flooding.', 'Local Red Cross', '+9988776655', NOW(), NOW()),
    ('Ambulance Drone', 48.4700, 21.6200, 'Request for aerial medical support to provide immediate assistance to a heart attack victim.', 'Emergency Medical Services', '+1122334455', NOW(), NOW())
;

-- Organ Transportation Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Organ Transportation', 48.4500, 21.6000, 'Urgent transport of a heart for a transplant surgery at a hospital.', 'Regional Transplant Center', '+123456789', NOW(), NOW()),
    ('Organ Transportation', 48.4550, 21.6050, 'Transportation of a kidney for a patient awaiting a transplant operation.', 'Organ Donation Foundation', '+987654321', NOW(), NOW()),
    ('Organ Transportation', 48.4600, 21.6100, 'Delivery of corneas for a sight-saving surgery at a medical facility.', 'Ophthalmology Clinic', '+1122334455', NOW(), NOW()),
    ('Organ Transportation', 48.4650, 21.6150, 'Transport of a liver for an urgent transplant procedure.', 'Liver Transplant Center', '+9988776655', NOW(), NOW()),
    ('Organ Transportation', 48.4700, 21.6200, 'Request for rapid transportation of bone marrow for a critical patient.', 'Hematology Department', '+1122334455', NOW(), NOW())
;

-- Infrastructure Inspection Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Infrastructure Inspection', 48.4500, 21.6000, 'Bridge inspection for structural integrity assessment.', 'Department of Transportation', '+123456789', NOW(), NOW()),
    ('Infrastructure Inspection', 48.4550, 21.6050, 'Inspecting power lines for maintenance planning.', 'Power Utility Company', '+987654321', NOW(), NOW()),
    ('Infrastructure Inspection', 48.4600, 21.6100, 'Pipeline inspection for leaks and damages.', 'Gas Company', '+1122334455', NOW(), NOW()),
    ('Infrastructure Inspection', 48.4650, 21.6150, 'Inspecting telecommunications towers for equipment maintenance.', 'Telecom Service Provider', '+9988776655', NOW(), NOW()),
    ('Infrastructure Inspection', 48.4700, 21.6200, 'Railway track inspection for safety compliance.', 'Railway Authority', '+1122334455', NOW(), NOW())
;

-- Infrastructure Maintenance Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Infrastructure Maintenance', 48.4500, 21.6000, 'Repairing potholes on a major road.', 'Department of Transportation', '+123456789', NOW(), NOW()),
    ('Infrastructure Maintenance', 48.4550, 21.6050, 'Replacing streetlights in a residential area.', 'Municipal Public Works', '+987654321', NOW(), NOW()),
    ('Infrastructure Maintenance', 48.4600, 21.6100, 'Clearing debris from stormwater drains.', 'Environmental Services Department', '+1122334455', NOW(), NOW()),
    ('Infrastructure Maintenance', 48.4650, 21.6150, 'Trimming trees along roadways to prevent hazards.', 'Department of Parks and Recreation', '+9988776655', NOW(), NOW()),
    ('Infrastructure Maintenance', 48.4700, 21.6200, 'Repairing damaged sidewalk pavement.', 'City Engineering Department', '+1122334455', NOW(), NOW())
;

-- Traffic Management Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Traffic Management', 48.4500, 21.6000, 'Installation of traffic lights at a busy intersection.', 'Department of Transportation', '+123456789', NOW(), NOW()),
    ('Traffic Management', 48.4550, 21.6050, 'Adjusting signal timing to optimize traffic flow.', 'Traffic Engineering Division', '+987654321', NOW(), NOW()),
    ('Traffic Management', 48.4600, 21.6100, 'Placement of speed limit signs in a residential area.', 'City Planning Department', '+1122334455', NOW(), NOW()),
    ('Traffic Management', 48.4650, 21.6150, 'Installation of pedestrian crosswalks near a school.', 'Public Safety Department', '+9988776655', NOW(), NOW()),
    ('Traffic Management', 48.4700, 21.6200, 'Implementing road closures for a special event.', 'Event Management Office', '+1122334455', NOW(), NOW())
;

-- Power Grid Inspection Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Power Grid Inspection', 48.4200, 21.6300, 'Routine inspection of power lines for maintenance purposes.', 'Power Utility Company', '+123456789', NOW(), NOW()),
    ('Power Grid Inspection', 48.4250, 21.6350, 'Assessment of power grid infrastructure after severe weather.', 'Emergency Response Team', '+987654321', NOW(), NOW()),
    ('Power Grid Inspection', 48.4300, 21.6400, 'Inspection of substations for potential faults or failures.', 'Electrical Engineering Department', '+1122334455', NOW(), NOW()),
    ('Power Grid Inspection', 48.4350, 21.6450, 'Survey of power grid in rural areas for expansion planning.', 'Infrastructure Development Committee', '+9988776655', NOW(), NOW()),
    ('Power Grid Inspection', 48.4400, 21.6500, 'Inspection of power distribution equipment in urban centers.', 'City Public Works Department', '+1122334455', NOW(), NOW())
;

-- Mobile Network and Radio Signal Coverage Check Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Network Coverage Check', 48.4200, 21.6300, 'Verification of mobile network coverage in rural areas.', 'Telecom Operator', '+123456789', NOW(), NOW()),
    ('Radio Signal Coverage Check', 48.4250, 21.6350, 'Assessment of radio signal strength in mountainous terrain.', 'Emergency Response Team', '+987654321', NOW(), NOW()),
    ('Network Coverage Check', 48.4300, 21.6400, 'Testing mobile network reliability in urban environments.', 'Telecom Regulatory Authority', '+1122334455', NOW(), NOW()),
    ('Radio Signal Coverage Check', 48.4350, 21.6450, 'Evaluation of radio signal quality along major highways.', 'Transportation Department', '+9988776655', NOW(), NOW()),
    ('Network Coverage Check', 48.4400, 21.6500, 'Survey of network coverage in remote island regions.', 'Island Development Authority', '+1122334455', NOW(), NOW())
;

-- Drone Mobile Communication Tower Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Drone Communication Tower Deployment', 48.4200, 21.6300, 'Deploy drone as a mobile communication tower in rural area.', 'Telecom Provider', '+123456789', NOW(), NOW()),
    ('Drone Communication Tower Deployment', 48.4250, 21.6350, 'Deploy drone as a mobile communication tower to improve network coverage.', 'Telecom Regulatory Agency', '+987654321', NOW(), NOW()),
    ('Drone Communication Tower Deployment', 48.4300, 21.6400, 'Deploy drone as a mobile communication tower for communication in remote regions.', 'Government Agency', '+1122334455', NOW(), NOW()),
    ('Drone Communication Tower Deployment', 48.4350, 21.6450, 'Deploy drone as a mobile communication tower with microwave links for data transfer.', 'Telecom Infrastructure Company', '+9988776655', NOW(), NOW()),
    ('Drone Communication Tower Deployment', 48.4400, 21.6500, 'Deploy drone as a mobile communication tower for expanding network backbone.', 'Internet Service Provider', '+1122334455', NOW(), NOW())
;

-- Event Management Drone Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Event Management', 48.4200, 21.6300, 'Aerial photography and videography coverage for outdoor concert event.', 'Event Organizer', '+123456789', NOW(), NOW()),
    ('Event Management', 48.4250, 21.6350, 'Live streaming coverage of a cultural festival from multiple angles.', 'Event Production Company', '+987654321', NOW(), NOW()),
    ('Event Management', 48.4300, 21.6400, 'Traffic monitoring and crowd management assistance during a marathon race.', 'Event Coordinator', '+1122334455', NOW(), NOW()),
    ('Event Management', 48.4350, 21.6450, 'Security surveillance and perimeter monitoring for a public gathering.', 'Security Services Provider', '+9988776655', NOW(), NOW()),
    ('Event Management', 48.4400, 21.6500, 'Search and rescue support in case of emergencies at an outdoor event.', 'Emergency Response Team', '+1122334455', NOW(), NOW())
;

-- Film and Media Production Drone Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Film Production', 48.4200, 21.6300, 'Aerial shots for a movie scene set in a rural landscape.', 'Film Director', '+123456789', NOW(), NOW()),
    ('Film Production', 48.4250, 21.6350, 'Tracking shots for a music video in an urban environment.', 'Music Producer', '+987654321', NOW(), NOW()),
    ('Film Production', 48.4300, 21.6400, 'Bird\'s eye view footage for a documentary about natural wonders.', 'Documentary Filmmaker', '+1122334455', NOW(), NOW()),
    ('Film Production', 48.4350, 21.6450, 'Overhead shots of a sports event for a promotional video.', 'Marketing Manager', '+9988776655', NOW(), NOW()),
    ('Film Production', 48.4400, 21.6500, 'Nighttime aerial cinematography for a sci-fi film.', 'Film Producer', '+1122334455', NOW(), NOW())
;

-- Tourism, Recreation, and Entertainment Drone Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Aerial Tour', 48.4150, 21.6200, 'Aerial tour over historical landmarks and natural attractions.', 'Tourism Agency', '+123456789', NOW(), NOW()),
    ('Event Coverage', 48.4200, 21.6250, 'Live aerial coverage of a music festival for online streaming.', 'Event Organizer', '+987654321', NOW(), NOW()),
    ('Sightseeing Photography', 48.4250, 21.6300, 'Capturing aerial photographs of scenic landscapes and architecture.', 'Photography Studio', '+1122334455', NOW(), NOW()),
    ('Outdoor Concert Security', 48.4300, 21.6350, 'Monitoring crowd behavior and ensuring security at an outdoor concert.', 'Security Company', '+9988776655', NOW(), NOW()),
    ('Amusement Park Surveillance', 48.4350, 21.6400, 'Surveillance of amusement park rides and visitor safety.', 'Amusement Park Management', '+1122334455', NOW(), NOW())
;

-- Drone Show Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Drone Light Show', 48.4400, 21.6450, 'Requesting a drone light show for a special event celebration.', 'Event Planner', '+123456789', NOW(), NOW()),
    ('Fireworks Replacement', 48.4450, 21.6500, 'Replacing traditional fireworks with a drone light show for a safer and eco-friendly display.', 'City Council', '+987654321', NOW(), NOW()),
    ('Corporate Event Spectacle', 48.4500, 21.6550, 'Creating a mesmerizing drone show for a corporate event to wow the audience.', 'Corporate Client', '+1122334455', NOW(), NOW()),
    ('Holiday Celebration', 48.4550, 21.6600, 'Organizing a drone light show as part of a holiday celebration for the community.', 'Local Government', '+9988776655', NOW(), NOW()),
    ('Grand Opening Ceremony', 48.4600, 21.6650, 'Enhancing the grand opening ceremony of a new venue with a captivating drone show.', 'Business Owner', '+1122334455', NOW(), NOW())
;

-- Drone Circus Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Aerial Spectacle', 48.4400, 21.6450, 'Requesting a drone circus performance for an outdoor festival.', 'Event Organizer', '+123456789', NOW(), NOW()),
    ('Entertainment Show', 48.4450, 21.6500, 'Organizing a drone circus as the main attraction for a large-scale entertainment event.', 'Entertainment Company', '+987654321', NOW(), NOW()),
    ('Theme Park Attraction', 48.4500, 21.6550, 'Introducing a futuristic drone circus show as a new attraction at a theme park.', 'Theme Park Manager', '+1122334455', NOW(), NOW()),
    ('Cultural Celebration', 48.4550, 21.6600, 'Incorporating a drone circus performance into a cultural festival to showcase modern technology.', 'Cultural Organization', '+9988776655', NOW(), NOW()),
    ('Public Entertainment', 48.4600, 21.6650, 'Hosting a drone circus to entertain the public during a city-wide event.', 'Local Community Council', '+1122334455', NOW(), NOW())
;

-- Marketing Services Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Promotional Campaign', 47.4979, 19.0402, 'Seeking aerial footage for a promotional campaign for a new product launch.', 'Marketing Manager', '+123456789', NOW(), NOW()),
    ('Brand Activation', 51.5074, -0.1278, 'Organizing a drone show as part of a brand activation event in a city center.', 'Brand Manager', '+987654321', NOW(), NOW()),
    ('Product Showcase', 34.0522, -118.2437, 'Capturing stunning drone imagery to showcase the features of a luxury product.', 'Product Manager', '+1122334455', NOW(), NOW()),
    ('Event Marketing', 40.7128, -74.0060, 'Using drones to create captivating content for event marketing across social media platforms.', 'Event Coordinator', '+9988776655', NOW(), NOW()),
    ('Digital Advertising', 48.8566, 2.3522, 'Integrating drone footage into digital advertising campaigns to increase engagement and brand awareness.', 'Digital Marketer', '+1122334455', NOW(), NOW())
;

-- Real Estate Aiding Services Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Property Photography', 47.4979, 19.0402, 'Need aerial photographs for a real estate listing showcasing property features and surroundings.', 'Real Estate Agent', '+123456789', NOW(), NOW()),
    ('Virtual Tours', 51.5074, -0.1278, 'Requesting drone-based virtual tours for multiple properties to enhance online listings and attract buyers.', 'Property Developer', '+987654321', NOW(), NOW()),
    ('Land Surveying', 34.0522, -118.2437, 'Surveying land for potential development projects, requiring accurate aerial mapping and measurements.', 'Land Developer', '+1122334455', NOW(), NOW()),
    ('Construction Progress Monitoring', 40.7128, -74.0060, 'Monitoring construction progress of real estate projects through aerial imagery and video for investors and stakeholders.', 'Project Manager', '+9988776655', NOW(), NOW()),
    ('Environmental Assessment', 48.8566, 2.3522, 'Assessing environmental factors around a property such as proximity to green spaces, pollution levels, etc.', 'Environmental Consultant', '+1122334455', NOW(), NOW())
;

-- Mapping and Surveying Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Topographic Survey', 47.4979, 19.0402, 'Requesting topographic surveying of a construction site for accurate elevation data and contour mapping.', 'Civil Engineer', '+123456789', NOW(), NOW()),
    ('GIS Mapping', 51.5074, -0.1278, 'Mapping geographical information to create GIS layers for urban planning and infrastructure development.', 'City Planner', '+987654321', NOW(), NOW()),
    ('Utility Mapping', 34.0522, -118.2437, 'Mapping underground utility lines using drone-based technology to prevent damages during construction.', 'Utility Engineer', '+1122334455', NOW(), NOW()),
    ('Boundary Survey', 40.7128, -74.0060, 'Conducting boundary survey to determine property lines and resolve property disputes.', 'Land Surveyor', '+9988776655', NOW(), NOW()),
    ('Volume Measurement', 48.8566, 2.3522, 'Measuring stockpile volumes on a construction site using drone imagery and photogrammetry techniques.', 'Construction Manager', '+1122334455', NOW(), NOW())
;

-- Natural Resource Management Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Forest Inventory', 48.8566, 2.3522, 'Conducting a forest inventory to assess tree species composition, density, and health.', 'Forestry Department', '+123456789', NOW(), NOW()),
    ('Wildlife Monitoring', 40.7128, -74.0060, 'Monitoring wildlife populations and habitats using drones for conservation purposes.', 'Wildlife Conservation Group', '+987654321', NOW(), NOW()),
    ('Water Quality Assessment', 51.5074, -0.1278, 'Assessing water quality parameters such as turbidity, pH, and dissolved oxygen in rivers and lakes.', 'Environmental Agency', '+1122334455', NOW(), NOW()),
    ('Soil Erosion Mapping', 34.0522, -118.2437, 'Mapping areas prone to soil erosion to implement erosion control measures and soil conservation practices.', 'Agricultural Research Institute', '+9988776655', NOW(), NOW()),
    ('Habitat Restoration', 47.4979, 19.0402, 'Planning and implementing habitat restoration projects to enhance biodiversity and ecosystem services.', 'Conservation NGO', '+1122334455', NOW(), NOW())
;

-- Maritime and Fisheries Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Marine Surveillance', 48.8566, 2.3522, 'Monitoring maritime activities for illegal fishing and other illicit activities.', 'Maritime Enforcement Agency', '+123456789', NOW(), NOW()),
    ('Fish Stock Assessment', 40.7128, -74.0060, 'Assessing fish populations and their distribution in a specific marine area.', 'Fisheries Research Institute', '+987654321', NOW(), NOW()),
    ('Aquaculture Monitoring', 51.5074, -0.1278, 'Monitoring aquaculture facilities to ensure compliance with regulations and environmental sustainability.', 'Aquaculture Association', '+1122334455', NOW(), NOW()),
    ('Coastal Mapping', 34.0522, -118.2437, 'Mapping coastal areas to identify suitable sites for fisheries development and conservation efforts.', 'Coastal Management Authority', '+9988776655', NOW(), NOW()),
    ('Fisheries Enforcement', 47.4979, 19.0402, 'Enforcing fisheries regulations and patrolling marine protected areas to prevent illegal fishing activities.', 'Fisheries Enforcement Unit', '+1122334455', NOW(), NOW())
;

-- River-Related Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('River Monitoring', 48.8566, 2.3522, 'Monitoring water quality and flow rates in the river for environmental assessment.', 'Environmental Protection Agency', '+123456789', NOW(), NOW()),
    ('Hydrological Survey', 40.7128, -74.0060, 'Conducting a survey to assess the river\'s hydrological characteristics for flood risk management.', 'Water Resources Management Authority', '+987654321', NOW(), NOW()),
    ('River Cleanup', 51.5074, -0.1278, 'Organizing a cleanup operation to remove debris and pollutants from the river.', 'Local Environmental NGO', '+1122334455', NOW(), NOW()),
    ('Fish Habitat Restoration', 34.0522, -118.2437, 'Restoring fish habitats and spawning grounds along the river to enhance biodiversity.', 'Fisheries Conservation Society', '+9988776655', NOW(), NOW()),
    ('River Navigation Assistance', 47.4979, 19.0402, 'Providing navigation assistance to vessels navigating through the river.', 'Port Authority', '+1122334455', NOW(), NOW())
;

-- Forestry-Related Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Forest Fire Detection', 48.8566, 2.3522, 'Deploying drones for early detection of forest fires and rapid response.', 'National Forestry Service', '+123456789', NOW(), NOW()),
    ('Forest Inventory', 40.7128, -74.0060, 'Conducting inventory and mapping of forest resources for sustainable management.', 'Forestry Research Institute', '+987654321', NOW(), NOW()),
    ('Forest Health Assessment', 51.5074, -0.1278, 'Assessing the health of forests and identifying areas affected by pests or diseases.', 'State Department of Forestry', '+1122334455', NOW(), NOW()),
    ('Timber Harvesting Planning', 34.0522, -118.2437, 'Planning timber harvesting operations while ensuring sustainable forest management practices.', 'Forest Products Company', '+9988776655', NOW(), NOW()),
    ('Wildlife Habitat Conservation', 47.4979, 19.0402, 'Implementing measures to conserve and enhance wildlife habitats within forests.', 'Conservation Organization', '+1122334455', NOW(), NOW())
;

-- Mining and Exploration Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Mineral Exploration', 48.8566, 2.3522, 'Conducting aerial surveys to explore potential mineral deposits.', 'ABC Mining Company', '+123456789', NOW(), NOW()),
    ('Mine Site Monitoring', 40.7128, -74.0060, 'Monitoring mining operations for safety compliance and environmental impact.', 'XYZ Mining Corporation', '+987654321', NOW(), NOW()),
    ('Environmental Impact Assessment', 51.5074, -0.1278, 'Assessing the environmental impact of mining activities on surrounding ecosystems.', 'Environmental Consulting Firm', '+1122334455', NOW(), NOW()),
    ('Exploration Drilling Support', 34.0522, -118.2437, 'Providing aerial support for exploration drilling activities in remote areas.', 'Exploration Services Ltd.', '+9988776655', NOW(), NOW()),
    ('Reclamation Monitoring', 47.4979, 19.0402, 'Monitoring reclamation efforts to restore mined areas to their natural state.', 'Reclamation Services Inc.', '+1122334455', NOW(), NOW())
;

-- Environmental Conservation Requests
INSERT INTO requests (type, location_latitude, location_longitude, description, requester_name, requester_contact_phone, created_at, updated_at)
VALUES
    ('Protected Area Monitoring', 48.8566, 2.3522, 'Monitoring protected areas for illegal activities such as poaching and deforestation.', 'Conservation Society', '+123456789', NOW(), NOW()),
    ('Habitat Restoration', 40.7128, -74.0060, 'Aerial surveys to assess degraded habitats and plan restoration efforts.', 'Environmental NGO', '+987654321', NOW(), NOW()),
    ('Wildlife Census', 51.5074, -0.1278, 'Conducting aerial surveys to estimate population sizes of endangered species.', 'Wildlife Conservation Group', '+1122334455', NOW(), NOW()),
    ('Ecosystem Health Assessment', 34.0522, -118.2437, 'Assessing the health of ecosystems through aerial monitoring of biodiversity and habitat quality.', 'Ecological Research Institute', '+9988776655', NOW(), NOW()),
    ('Invasive Species Control', 47.4979, 19.0402, 'Monitoring and controlling invasive species through aerial surveys and targeted interventions.', 'Environmental Agency', '+1122334455', NOW(), NOW())
;



