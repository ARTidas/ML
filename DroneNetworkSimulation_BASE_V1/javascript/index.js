document.addEventListener("DOMContentLoaded", function(event) {
    
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
    const markersGroup = new L.FeatureGroup().addTo(map);

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
            'Markers': markersGroup,
            'Voronoi': voronoiPolygons,
        },
        {
            position: 'topleft',
            collapsed: false
        }
    ).addTo(map);

    fetch('https://research.artidas.hu/api/drone_network_simulation/get_stations.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(function(station) {
                let marker = L.marker([parseFloat(station.location_latitude), parseFloat(station.location_longitude)]);
                marker.bindPopup("<strong>" + station.name + "</strong><br>Drone Capacity: " + station.drone_capacity);
                markersGroup.addLayer(marker)
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
                    featureGroup: markersGroup
                },
                draw: {
                    marker: true,
                    rectangle: true,
                    polygon: false,
                    circle: false,
                    circlemarker: false,
                    polyline: false,
                    featureGroup: markersGroup
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

        markersGroup.eachLayer(function (layer) {
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

});