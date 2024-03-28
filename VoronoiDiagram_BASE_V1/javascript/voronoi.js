class Voronoi {
    constructor(bounds, markers) {
        this.boundWest = bounds[0];
        this.boundSouth = bounds[1];
        this.boundEast = bounds[2];
        this.boundNorth = bounds[3];
        this.markers = markers; // List of marker coordinates [[lat, lng], [lat, lng], ...]
        this.voronoiPolygons = []; // Array to store calculated Voronoi polygons
    }

    // Function to calculate Voronoi polygons
    calculateVoronoiPolygons() {
        // Convert markers to Turf.js FeatureCollection
        const turfPoints = {
            type: 'FeatureCollection',
            features: this.markers.map(coord => {
                return {
                    type: 'Feature',
                    properties: {},
                    geometry: {
                        type: 'Point',
                        coordinates: coord
                    }
                };
            })
        };

        const bbox = [ // Turf.js expects [west, south, east, north]
            this.boundWest,
            this.boundSouth,
            this.boundEast,
            this.boundNorth
        ];

        // Calculate Voronoi diagram
        //const voronoi = turf.voronoi(turfPoints, {bbox: bbox});
        const voronoi = turf.voronoi(turfPoints);

        // Extract Voronoi polygons
        this.voronoiPolygons = voronoi.features.map(feature => {
            //console.log(feature.geometry);
            return feature.geometry.coordinates[0]; // Extract polygon coordinates
        });
    }

    // Function to get calculated Voronoi polygons
    getVoronoiPolygons() {
        return this.voronoiPolygons;
    }
}
