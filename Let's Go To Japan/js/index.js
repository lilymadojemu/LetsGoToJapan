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
sanrioMarker.bindPopup("Welcome to Sanrio PuroLand!").openPopup();
// Fushimi Inari Marker Popup 
inariMarker.bindPopup("Welcome to Fushimi Inari Temple").openPopup();
// Osaka Castle Marker Popup
castleMarker.bindPopup("Welcome to Osaka Castle").openPopup();

