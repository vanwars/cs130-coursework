


//initialize map:
const map = L.map('map').setView([42.0454159, -87.6989784], 14);

//initialize tiles (there are many options):
L.tileLayer.provider('Stamen.TonerLite').addTo(map);
// L.tileLayer.provider('Stamen.Watercolor').addTo(map);
// L.tileLayer.provider('Stamen.Terrain').addTo(mymap);
// L.tileLayer.provider('Stamen.TerrainBackground').addTo(mymap);
// L.tileLayer.provider('Stamen.Toner').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerBackground').addTo(map);
// L.tileLayer.provider('Stamen.TonerHybrid').addTo(map);
// L.tileLayer.provider('Stamen.TonerLines').addTo(mymap);
// L.tileLayer.provider('Stamen.TonerLabels').addTo(mymap);

// how are we going to get data from yelp?
let allRestaurants;

url = 'https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Evanston,%20IL&term=pizza';
fetch(url)
    .then(response => response.json())
    .then(restaurants => {
        allRestaurants = restaurants;
        console.log(restaurants);
        for (const restaurant of restaurants) {
            console.log(restaurant.coordinates);
            var marker = L.marker([restaurant.coordinates.latitude, restaurant.coordinates.longitude]).addTo(map);
            marker.on('click', (ev) => {
                console.log(ev);
            });
            marker.bindPopup(`<h3>${restaurant.name}</h3><p>${restaurant.display_address}`).openPopup();
        }
        // draw some additional markers here!
    })





// // CODE TO GENERATE LOTS OF FAKE MARKERS
// const generateRandomMarkers = (numCoords=100) => {
//     return new Array(numCoords).fill(null).map(
//         () => [ (Math.random() * 0.6 + 51), -1 * Math.random() + 0.4 ]
//     );
// };
// const coordinates = generateRandomMarkers(numCoords=50);
// console.log(coordinates);

// // create markers 
// for (coord of coordinates) {
//     const marker = L.marker(coord).addTo(mymap);
//     marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
// }

// const marker = L.marker([51.5, -0.09]).addTo(mymap);

// // create circle:
// const circle = L.circle([51.5, -0.09], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);

// // create polygon:
// const polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(mymap);

// connect each object to a "popup" effect:
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");