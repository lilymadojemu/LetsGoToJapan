const itineraryList = JSON.parse(localStorage.storedDestinationItems);

document.addEventListener('DOMContentLoaded', function() {
    const itineraryInfoPrev = {
        "Sanrio Puroland": {
            "engLocation": "Sanrio Puroland",
            "jpnLocation":"サンリオピューロランド",
            "prevImgAlt":"Sanrio Characters Floating Over Park Entrance",
        },
        "Fushimi Inari Shrine": {
            "engLocation": "Fushimi Inari Shrine",
            "jpnLocation":"伏見稲荷大社",
            "romajiLocation":"Fushimi Inari Taisha",
            "prevImgAlt":"Entrance of Torii Gates",
        },
        "Osaka Castle": {
            "engLocation": "Osaka Castle",
            "jpnLocation":"大坂城",
            "romajiLocation":"Osaka-jo",
            "prevImgAlt":"Osaka Castle Behind Leaves",
        },
    };
    
    for (const key of itineraryList) {
        console.log(key);
        if (key in itineraryInfoPrev) {
            createItineraryPreview(itineraryInfoPrev[key]);
        }
        else 
            console.log('No Itineraries/ No destinations in itinerary List');
    };
});

function createItineraryPreview(itineraryInfoPrev) {
    console.log(itineraryInfoPrev);
    // Grabs a reference to the itineraryPreview template:
    const template = document.querySelector('#itineraryPreviewTemplate');
    const clone = template.content.cloneNode(true);
    itineraryInfoPrev.element = clone.querySelector('.itineraryInfoPrev');

    // different image paths <-- Put into an array, then shuffle array (have if come with an output), set that output equal to .src
    // An array with the possible itinerary Preview Images
    const itineraryPrevImgs = [`itinerary-overview-images/${itineraryInfoPrev.engLocation}/${itineraryInfoPrev.engLocation} Preview Image 1.jpg`, `itinerary-overview-images/${itineraryInfoPrev.engLocation}/${itineraryInfoPrev.engLocation} Preview Image 2.jpg`, `itinerary-overview-images/${itineraryInfoPrev.engLocation}/${itineraryInfoPrev.engLocation} Preview Image 3.jpg`];
    const randomPrevIndex = Math.floor(Math.random() * itineraryPrevImgs.length);
    const randomPrevPic = itineraryPrevImgs[randomPrevIndex];
    console.log(randomPrevPic);
    // update Dom Elements

    // Itinerary Image
    const itineraryPreviewImg = clone.querySelector('#previewImg');
    itineraryPreviewImg.src = randomPrevPic;
    console.log(itineraryPreviewImg.src);
    itineraryPreviewImg.alt = itineraryInfoPrev.prevImgAlt;

    // Destination Name (English,JPN, & Romaji)
    const locationName = clone.querySelector('.itineraryPrevTitle')
    locationName.textContent = itineraryInfoPrev.engLocation;
    const locationJpnName = clone.querySelector('.itineraryPrevJpnTitle')
    locationJpnName.textContent = itineraryInfoPrev.jpnLocation;
    const locationRomaName = clone.querySelector('.itineraryPrevRomaTitle')
    locationRomaName.textContent = itineraryInfoPrev.romajiLocation;
    
    // Removes local storage and itineraryOverview Dom destination from itinerary list based on user input (click)
    const removeItineraryBtn = clone.querySelector('#deleteTrip');
    removeItineraryBtn.addEventListener('click', () =>{
        deleteItinerary(itineraryInfoPrev);
    });

    // Opens actual itinerary page for the destination that user hs clicked 
    const editTripBtn = clone.querySelector('#editTrip');
    editTripBtn.addEventListener('click', () =>{
        window.location.href = "itineraryViewer.html?destinations=" + encodeURIComponent(itineraryInfoPrev.engLocation);

    });

    // Adding location elements to the Itinerary DOM to be displayed
    const itineraryDestinationContainer = document.querySelector('.itineraries');
    itineraryDestinationContainer.appendChild(clone);
};

// Saves Current Destination from destinationList
function editItinerary(destinationName){
    // redirect user to itinerary page based on selection
    window.location.href = "itineraryViewer.html?destinations=" + encodeURIComponent(destinationName);
};

// Deletes Destination from destinationList
function deleteItinerary(itineraryInfoPrev){
    // Remove destination from the DOM
    itineraryInfoPrev.element.remove();

    // Remove the actual destination from itineraryList array
    itineraryList.splice(itineraryList.indexOf(itineraryInfoPrev.element), 1);
    console.log('new itineraryList' + itineraryList );

    // Update Local Storage
    saveToLocalStorage();
};

// Retrieves destinations in itinerary list from local storage
function retrieveFromLocalStorage(){
    const destinationString = localStorage.getItem('storedItineraryPrev');
    const storedLocation = JSON.parse(destinationString);
    console.log('retrieved from local storage ' + destinationString);
    if (storedLocation) {
        itineraryList = storedLocation;
        console.log(itineraryList);
    }
    for (const key in destinationString) {
        if (storedLocation.hasOwnProperty(key)) {
            createItineraryPreview(storedLocation[key]);
        }
    }
    console.log(destinationString);
}

// Saving destinations shown on the itinerary overview page if updated
function saveToLocalStorage(){
    const destinationString = JSON.stringify(itineraryList);
    localStorage.setItem('storedItineraryPrev',destinationString);    
    // printing the current contents of the cart in local storage after saving
    console.log('Items in itinerary list: ' + itineraryList);
    console.log('Items in local storage: ' + localStorage.storedItineraryPrev);
};

if (localStorage.getItem('storedDestinationItems') != null) {
    retrieveFromLocalStorage();
};

if (localStorage.getItem('storedDestinationItems') == null) {
    let itineraryList = [];
};