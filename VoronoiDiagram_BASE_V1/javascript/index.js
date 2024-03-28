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
    const drawnItems = new L.FeatureGroup().addTo(map);

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
            'Input': drawnItems,
            'Voronoi': voronoiPolygons,
        },
        {
            position: 'topleft',
            collapsed: false
        }
    ).addTo(map);

    // Draw rectangle around the center
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
    const rectangle = L.rectangle(bounds, {color: "#00f", weight: 1});
    drawnItems.addLayer(rectangle)

    // Add markers on the 3x3 center line crosses
    for (let i = 1; i < 4; i += 1) {
        for (let j = 1; j < 4; j += 1) {
            drawnItems.addLayer(
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
                    featureGroup: drawnItems
                },
                draw: {
                    rectangle: true,
                    marker: true,
                    polygon: false,
                    circle: false,
                    circlemarker: false,
                    polyline: false
                }
            }
        )
    );

    map.on('draw:created', computeVoronoiDiagram);
    map.on('draw:edited', computeVoronoiDiagram);
    map.on('draw:deleted', computeVoronoiDiagram);
    //map.on('draw:deletestop', computeVoronoiDiagram);
    //map.on('draw:editmove', computeVoronoiDiagram);
    //map.on('draw:editresize', computeVoronoiDiagram);
    computeVoronoiDiagram(); // TODO: Somehow solve to run this function on load...

    function computeVoronoiDiagram() {
        console.log('Computing Voronoi diagram...');
        let bounds;
        let markers = [];

        drawnItems.eachLayer(function (layer) {
            //console.log(layer);
            if (layer instanceof L.Rectangle) {
                //console.log('Found rectangle...');
                //console.log(layer.getBounds());
                bounds = layer.getBounds();
            }
            else if (layer instanceof L.Marker) {
                //console.log('Found marker...');
                //console.log(layer.getLatLng());
                markers.push(
                    [
                        layer.getLatLng().lat,
                        layer.getLatLng().lng,
                    ]
                );
            }
        });

        const voronoi = new Voronoi(
            [
                bounds.getWest(),
                bounds.getSouth(),
                bounds.getEast(),
                bounds.getNorth(),
            ],
            markers
        );
        voronoi.calculateVoronoiPolygons();
        voronoiPolygons.clearLayers();
        voronoi.getVoronoiPolygons().forEach(coordinates => {
            voronoiPolygons.addLayer(
                L.polygon(coordinates, { color: '#f00' })
            )
        });
    }

});