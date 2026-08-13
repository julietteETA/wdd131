//5.Codes for find you commission


//A try for commission agent page: from AI

// ─── 1. Fixed server location (never changes) ────────────────────────────────
const SERVER_COORDS = [-4.3224, 15.3117];

// ─── 2. Default customer starting point ──────────────────────────────────────
const DEFAULT_CUSTOMER = [-4.3500, 15.3000];

// ─── 3. Reference to the info panel text ─────────────────────────────────────
const infoText = document.getElementById('info-text');

// ─── 4. Initialize the map centered on the server ────────────────────────────
const map = L.map('map').setView(SERVER_COORDS, 13);

// ─── 5. Load OpenStreetMap background tiles ───────────────────────────────────
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// ─── 6. Add a fixed marker for the server ────────────────────────────────────
L.marker(SERVER_COORDS)
    .addTo(map)
    .bindPopup('<b>Server / Hub</b><br>Fixed delivery origin')
    .openPopup();

// ─── 7. Set up the routing control between customer and server ────────────────
const routingControl = L.Routing.control({
    waypoints: [
        L.latLng(DEFAULT_CUSTOMER),  // Start: customer (movable)
        L.latLng(SERVER_COORDS)      // End:   server   (fixed)
    ],
    lineOptions: {
        styles: [{ color: '#e94560', opacity: 0.9, weight: 5 }]
    },
    routeWhileDragging: true,   // Recalculates as user drags the marker
    addWaypoints: false         // No extra waypoints allowed
}).addTo(map);

// ─── 8. Show distance and time when a route is found ─────────────────────────
routingControl.on('routesfound', function (e) {
    const route = e.routes[0].summary;
    const km = (route.totalDistance / 1000).toFixed(1);
    const minutes = Math.round(route.totalTime / 60);
    infoText.textContent =
        'Distance: ' + km + ' km  |  Estimated time: ' + minutes + ' min';
});

// ─── 9. Show a message if routing fails ──────────────────────────────────────
routingControl.on('routingerror', function () {
    infoText.textContent = 'Could not find a route. Try a different location.';
});

// ─── 10. Click on map to move the customer starting point ────────────────────
map.on('click', function (e) {
    infoText.textContent = 'Calculating route...';

    routingControl.setWaypoints([
        L.latLng(e.latlng),        // New customer location (where user clicked)
        L.latLng(SERVER_COORDS)    // Server stays fixed
    ]);
});