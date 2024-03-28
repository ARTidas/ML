document.addEventListener("DOMContentLoaded", function(event) {
    
    let center = [48.32136917139583, 21.56666973293446];
    const map = L.map('map_full').setView(center, 17);
    map.on('load', computeVoronoiDiagram);

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

    // Draw (imaginary) rectangle around the center
    const bounds = L.latLngBounds(
        [
            [
                center[0] - 0.002,
                center[1] - 0.004
            ],
            [
                center[0] + 0.002,
                center[1] + 0.004
            ]
        ]
    );

    // Add markers on the 3x3 center line crosses
    for (let i = 1; i < 4; i += 1) {
        for (let j = 1; j < 4; j += 1) {
            markersGroup.addLayer(
                L.marker(
                    [
                        bounds.getSouth() + ((bounds.getNorth() - bounds.getSouth()) / 4) * i,
                        bounds.getWest() + ((bounds.getEast() - bounds.getWest()) / 4) * j
                    ]
                )
            );
        }
    }

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

    map.on('click', addMarker);
    map.on('draw:created', computeVoronoiDiagram);
    map.on('draw:edited', computeVoronoiDiagram);
    map.on('draw:deleted', computeVoronoiDiagram);
    computeVoronoiDiagram(); // TODO: Somehow solve to run this function on load...

    function addMarker(e) {
        markersGroup.addLayer(
            L.marker(e.latlng)
        );
        computeVoronoiDiagram();
    }

    function computeVoronoiDiagram() {
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
                L.polygon(coordinates, { color: '#f00' })
            )
        });
    }

});