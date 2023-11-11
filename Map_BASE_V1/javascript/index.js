document.addEventListener("DOMContentLoaded", function(event) {
    const map = L.map("map").setView([48.32136917139583, 21.56666973293446], 17);

    // Define the base tile layer
    var baseLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: (
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' +
            '<a href="https://cartographyvectors.com/map/934-hungary-detailed-boundary">*</a>'
        )
    }).addTo(map);

    map.on('click', onMapClick);

    function onMapClick(e) {
        document.getElementById('map_log').innerHTML += 'Click at: ' + e.latlng + '<br/>';
    }

    var geoJsonLayer;

    //fetch('https://mlthesis.artidas.hu/Common_BASE_V1/geo/hungary-detailed-boundary_934.geojson')
    //fetch('../../Common_BASE_V1/geo/hungary-detailed-boundary_934.geojson')
    fetch(
        'https://mlthesis.artidas.hu/Common_BASE_V1/geo/hungary-detailed-boundary_934.geojson',
        {mode: 'cors'}
    )
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            geoJsonLayer = L.geoJSON(data);
            // Add a layer control
            L.control.layers({ 'Base Map': baseLayer }, { 'Hungary Boundary': geoJsonLayer }).addTo(map);
            geoJsonLayer.addTo(map);
        })
        .catch(error => console.error('Error fetching GeoJSON:', error));
});