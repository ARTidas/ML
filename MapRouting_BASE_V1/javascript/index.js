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

    // Define routing control
    var control = L.Routing.control({
        waypoints: [
            L.latLng(center[0] * 0.999, center[1] * 0.999), // Starting point coordinates
            L.latLng(center[0] * 1.001, center[1] * 1.001)   // Destination point coordinates
        ],
        routeWhileDragging: true,
        //geocoder: L.Control.Geocoder.nominatim()
    }).addTo(map);

    const layersControl = L.control.layers().addTo(map);

    map.on('click', onMapClick);

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