document.addEventListener("DOMContentLoaded", function(event) {

    var greenIcon = new L.Icon({
        iconUrl: '../Common_BASE_V1/images/icons/marker-icon-2x-green.png',
        shadowUrl: '../Common_BASE_V1/images/icons/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });
    
    let center = [48.32136917139583, 21.56666973293446]; // 3950 Sarospatak, Hungary
    const map = L.map('map_full').setView(center, 15);

    let OpenStreetMap = L.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            maxZoom: 18,
            attribution: '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    ).addTo(map);

    const voronoiPolygons = L.featureGroup().addTo(map);
    const stationsGroup = new L.FeatureGroup().addTo(map);
    const dronesGroup = new L.FeatureGroup().addTo(map);
    const droneRangesGroup = new L.FeatureGroup().addTo(map);

    L.control.layers(
        {
            'OSM': OpenStreetMap,
            'Google': L.tileLayer(
                'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}',
                {
                    attribution: 'Google'
                }
            )
        },
        {
            'Stations': stationsGroup,
            'Voronoi': voronoiPolygons,
            'Drones': dronesGroup,
            'Drone ranges': droneRangesGroup,
        },
        {
            position: 'topleft',
            collapsed: false
        }
    ).addTo(map);

    let drones = [];
    fetch('https://research.artidas.hu/api/drone_network_simulation/get_drones_with_station.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(function(drone) {
                drones.push(drone);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
    ;

    fetch('https://research.artidas.hu/api/drone_network_simulation/get_stations.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(function(station) {
                let station_marker = L.marker(
                    [
                        parseFloat(station.location_latitude),
                        parseFloat(station.location_longitude)
                    ]
                );
                station_marker.bindPopup(`
                    <strong>#${station.id} - ${station.name}</strong><br/>
                    Drone Capacity: ${station.drone_capacity}
                `);
                stationsGroup.addLayer(station_marker);

                drones.forEach(function(drone) {
                    if (station.id == drone.station_id) {
                        let drone_marker = L.marker(
                            [
                                parseFloat(station.location_latitude) + getRandomCoordinateOffset(),
                                parseFloat(station.location_longitude) + getRandomCoordinateOffset()
                            ],
                            {icon: greenIcon}
                        );
                        drone_marker.bindPopup(`
                            <strong>#${drone.drone_id}</strong><br/>
                            Station id: #${drone.station_id}<br/>
                            Manufaturer: ${drone.drone_manufacturer}<br/>
                            Model: ${drone.drone_model}<br/>
                            Weight (kg): ${drone.drone_weight_kg}<br/>
                            Max speed (km/h): ${drone.drone_max_speed_kmh}<br/>
                            Payload (kg): ${drone.drone_payload_weight_kg}<br/>
                            Range (km): ${drone.drone_range_km}
                        `);
                        dronesGroup.addLayer(drone_marker);

                        drone_range_circle = L.circle(
                            [
                                parseFloat(station.location_latitude) + getRandomCoordinateOffset(),
                                parseFloat(station.location_longitude) + getRandomCoordinateOffset()
                            ],
                            {
                                radius: (drone.drone_range_km * 1000) / 2, // Lets divide by to for safety measurements
                                color: '#0f0',
                                weight: 1,
                                opacity: 0.75,
                                //fillColor: '#00f',
                                fillOpacity: 0,
                            }
                        );
                        droneRangesGroup.addLayer(drone_range_circle);
                    }
                });
            });

            computeVoronoiDiagram();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        })
    ;

    map.addControl(
        new L.Control.Draw(
            {
                edit: {
                    featureGroup: stationsGroup
                },
                draw: {
                    marker: true,
                    rectangle: true,
                    polygon: false,
                    circle: false,
                    circlemarker: false,
                    polyline: false,
                    featureGroup: stationsGroup
                }
            }
        )
    );

    map.on('draw:created', computeVoronoiDiagram);
    map.on('draw:edited', computeVoronoiDiagram);
    map.on('draw:deleted', computeVoronoiDiagram);

    function computeVoronoiDiagram() {
        console.log('Computing Voronoi diagram...');
        let markers = [];

        stationsGroup.eachLayer(function (layer) {
            markers.push(
                [
                    layer.getLatLng().lat,
                    layer.getLatLng().lng,
                ]
            );
        });

        const voronoi = new Voronoi(markers);
        voronoi.calculateVoronoiPolygons();
        voronoiPolygons.clearLayers();
        voronoi.getVoronoiPolygons().forEach(coordinates => {
            voronoiPolygons.addLayer(
                L.polygon(
                    coordinates,
                    {
                        color: '#00f',
                        weight: 1,
                        opacity: 0.75,
                        //fillColor: '#00f',
                        fillOpacity: 0,
                    }
                )
            )
        });
    }

    function getRandomCoordinateOffset() {
        return getRandomArbitrary(-0.0001, 0.0001);
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

});