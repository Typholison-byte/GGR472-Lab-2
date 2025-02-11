/*mapboxgl.accessToken = 'pk.eyJ1IjoibGFrZWVyaWUiLCJhIjoiY201cG5nbmptMDM0eDJxb215YXB0OGV0ZSJ9.yGNd3OQ2HqXdTSTuJcD9ug'; // Add default public map token from your Mapbox account 

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID 
    style: 'mapbox://styles/mapbox/streets-v12', // style URL 
    center: [-80, 50], // starting position [lng, lat] 
    zoom: 4, // starting zoom level
});

map.on('load', () => {
    // Add a data source containing GeoJSON data     
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection", 
            "features": [{ 
                "type": "Feature", 
                "properties": { 
                    "name": "Sidney Smith Hall" 
                }, 
                "geometry": { 
                    "coordinates": [-79.39865237301687, 43.662343395037766], 
                    "type": "Point" } }]
        }
    }); map.addLayer({ 
        'id': 'uoft-pnt', 
        'type': 'circle', 
        'source': 'uoft-data', 
        'paint': { 
            'circle-radius': 6, 'circle-color': '#B42222' 
        } 
    });
});
*/

document.addEventListener('DOMContentLoaded', () => {
    // Get references to buttons and vote count spans
    const yesButton = document.getElementById('btn-yes');
    const noButton = document.getElementById('btn-no');
    const yesCount = document.getElementById('count-yes');
    const noCount = document.getElementById('count-no');

    // Initialize counters
    let yesVotes = 0;
    let noVotes = 0;

    // Add click event listener for "Yes" button
    yesButton.addEventListener('click', () => {
        yesVotes += 1; // Increment yes votes
        yesCount.textContent = yesVotes; // Update the displayed count
    });

    // Add click event listener for "No" button
    noButton.addEventListener('click', () => {
        noVotes += 1; // Increment no votes
        noCount.textContent = noVotes; // Update the displayed count
    });
});

