document.addEventListener("DOMContentLoaded", function(event) {
    let center = [48.32136917139583, 21.56666973293446];
    const map = L.map("map").setView(center, 17);

    // Define the base tile layer
    var baseLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: (
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
            '<a href="https://cartographyvectors.com/map/934-hungary-detailed-boundary">*</a>' +
            '<a href="https://cartographyvectors.com/map/338-hungary">*</a>'
        )
    }).addTo(map);

    const layersControl = L.control.layers().addTo(map);

    map.on('click', onMapClick);
    handleGeoJSON(geojson_data_hungary_boundary, 'Hungary border');
    handleGeoJSON(geojson_data_hungary_states, 'Hungary states');

    var imageUrl = 'https://mlthesis.artidas.hu/Map_BASE_V1/javascript/magyarorszag_borvidekei_2010.jpg',
    imageBounds = [
        [48.74048, 15.944797],
        [45.446738, 23.059333]
    ];
    const image_layer = L.imageOverlay(imageUrl, imageBounds).addTo(map);
    image_layer.setOpacity(0.5);
    image_layer.addTo(map);
    layersControl.addOverlay(image_layer, 'Hungarian wine regions');

    function onMapClick(e) {
        document.getElementById('map_log').innerHTML += 'Click at: ' + e.latlng + '<br/>';
    }
    
    function handleGeoJSON(data_variable, data_name) {
        const existing_Layer = findLayerByName(data_name);

        if (existing_Layer) {
            map.removeLayer(existing_Layer);
        }

        const geoJsonLayer = L.geoJSON(data_variable, {
            onEachFeature: function (feature, layer) {
                // You can customize the interaction with each feature if needed
            }
        });

        geoJsonLayer.addTo(map);

        layersControl.addOverlay(geoJsonLayer, data_name);
    }

    function findLayerByName(name) {    
        map.eachLayer(function (layer) {
            if (layer instanceof L.GeoJSON && layer.options.name === name) {
                return layer;
            }
        });
    
        return null;
    }
});