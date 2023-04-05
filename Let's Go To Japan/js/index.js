// Japan Map

// Intializing the Map using specific coordinates to set view to Tokyo Japan
var map = L.map('map').setView([35.6246, 139.4294], 13);

// Adding a tile layer to the map using OpenStreetMap tile layer 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 60,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adding marker to map
// Adding multiple markers
var sanrioMarker = L.marker([35.6246, 139.4294], { className:"customizedMarker"}).addTo(map);

var inariMarker = L.marker([34.9671, 135.772], { className:"customizedMarker"}).addTo(map);

var castleMarker = L.marker([34.6873, 135.5259],{className:"customizedMarker"}).addTo(map);

// bindPopup: attaches a popup with the specified HTML content to your marker so the popup appears when you click on the object
// with bindPopUp link to "preview" of destination: img, the destiantion name, and location
// openPopup: immediately opens the attached popup for markers only.

// Sanrio Marker Popup
sanrioMarker.bindPopup('<div><img src="location-images/Sanrio/sanrio_characters_image.jpeg" class="markerImg" alt="Sanrio Characters">  <p class="markerText">Welcome to Sanrio PuroLand!</p></div>').openPopup();
// Fushimi Inari Marker Popup 
inariMarker.bindPopup('<div><img src="location-images/Inari/stefan-k-62IRMCiDaPY-unsplash.jpg" class="markerImg" alt="Fushimi Inari Shrine"> <p class="markerText"> Welcome to Fushimi Inari Shrine! </p></div>').openPopup();
// Osaka Castle Marker Popup
castleMarker.bindPopup('<div><img src="location-images/Castle/cosmin-serban-kUQPX2kp8S8-unsplash.jpg" class="markerImg" alt="Osake Castle"> <p class="markerText"> Welcome to Osaka Castle</p></div>').openPopup();


// bindTooltip: attaches a tooltip with the specified HTML content to your marker so the tooltip appears when you hover over the marker
// with bindTooltip link to "preview" of destination: img, the destination name, and location

// Sanrio Marker Tooltip
sanrioMarker.bindTooltip('Sanrio PuroLand').openTooltip();
// Fushimi Inari Marker Tooltip
inariMarker.bindTooltip('Fushimi Inari Temple').openTooltip();
// Osaka Castle Marker Tooltip
castleMarker.bindTooltip('Osaka Castle').openTooltip();

// Close all popups on page load
map.eachLayer(function (layer) {
    if (layer instanceof L.Popup) {
        layer.closePopup();
    }
});
