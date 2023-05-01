// Japan Map

// Initializing the Map using specific coordinates to set view to Tokyo Japan
var map = L.map('map').setView([35.6246, 139.4294], 7);

// Adding a tile layer to the map using OpenStreetMap tile layer 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 100,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Adding marker to map
// Adding multiple markers
var sanrioMarker = L.marker([35.6246, 139.4294]).addTo(map);

var inariMarker = L.marker([34.9671, 135.772]).addTo(map);

var castleMarker = L.marker([34.6873, 135.5259]).addTo(map);

// bindPopup: attaches a popup with the specified HTML content to your marker so the popup appears when you click on the object
// with bindPopUp link to "preview" of destination: img, the destiantion name, and location

// Sanrio Marker Popup: Image, Destination Name, and Location
sanrioMarker.bindPopup('<div><img src="location-images/Sanrio Puroland/Sanrio Puroland Preview.jpg" class="markerImg" alt="Entrance of Sanrio Puroland"></div> <div><p class="markerText"> Tokyo, Japan</p></div> <div><a href="./destinationInDepth.html?destinations=Sanrio Puroland"> <p class="markerText"> Sanrio Puroland </p></a></div>').openPopup();
// Fushimi Inari Marker Popup 
inariMarker.bindPopup('<div><img src="location-images/Fushimi Inari Shrine/Fushimi Inari Shrine Main Image.jpg" class="markerImg" alt="Fushimi Inari Shrine"> </div> <div><p class="markerText"> Kyoto, Japan</p></div><div><a href="./destinationInDepth.html?destinations=Fushimi Inari Shrine"> <p class="markerText"> Fushimi Inari Shrine</p></a></div>').openPopup();
// Osaka Castle Marker Popup
castleMarker.bindPopup('<div><img src="location-images/Osaka Castle/Osaka Castle Main Preview.jpg" class="markerImg" alt="Osaka Castle"> </div> <div><p class="markerText"> Osaka, Japan</p></div><div><a href="./destinationInDepth.html?destinations=Osaka Castle"> <p class="markerText"> Osaka Castle </p></a></div>').openPopup();


// bindTooltip: attaches a tooltip with the specified HTML content to your marker so the tooltip appears when you hover over the marker

// Sanrio Marker Tooltip
sanrioMarker.bindTooltip('Sanrio Puroland').openTooltip();
// Fushimi Inari Marker Tooltip
inariMarker.bindTooltip('Fushimi Inari Temple').openTooltip();
// Osaka Castle Marker Tooltip
castleMarker.bindTooltip('Osaka Castle').openTooltip();

// Close all popups on page load
map.eachLayer(function (layer) {
    if (layer instanceof L.Popup) or (layer instanceof L.bindPopup); {
        layer.closePopup();
    }
});

layer.bindPopup(popupContent, {
    maxWidth: "auto",
});

