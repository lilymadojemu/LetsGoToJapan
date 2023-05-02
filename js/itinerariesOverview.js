// Array of Destinations that have an itinerary based on what users have save to localStorage
const itineraryList = JSON.parse(localStorage.storedDestinationItems);

// Upon Page load, creates itineraries of locations in itineraryList
document.addEventListener('DOMContentLoaded', function() {
    // Itinerary Overview Data for each Destination
    const itineraryInfoPrev = {
        "Sanrio Puroland": {
            "engLocation": "Sanrio Puroland",
            "jpnLocation":"サンリオピューロランド",
            "romajiLocation":"Sanrio Puroland",
            "prevImgAlt":"Sanrio Characters",
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
    
    // Create an Itineraries based on contents of itinerary List
    for (const key of itineraryList) {
        if (key in itineraryInfoPrev) {
            createItineraryPreview(itineraryInfoPrev[key]);
        }
        else 
            console.log('No Itineraries/ No destinations in itinerary List');
    };
});

// Creates Itineraries on Overview Page
function createItineraryPreview(itineraryInfoPrev) {
    // Grabs a reference to the itineraryPreview template:
    const template = document.querySelector('#itineraryPreviewTemplate');
    const clone = template.content.cloneNode(true);
    itineraryInfoPrev.element = clone.querySelector('.itineraryInfoPrev');

    // Chooses a random image to be shown for each destination 
    // An array with the possible itinerary Preview Images
    const itineraryPrevImgs = [`itinerary-overview-images/${itineraryInfoPrev.engLocation}/${itineraryInfoPrev.engLocation} Preview Image 1.jpg`, `itinerary-overview-images/${itineraryInfoPrev.engLocation}/${itineraryInfoPrev.engLocation} Preview Image 2.jpg`, `itinerary-overview-images/${itineraryInfoPrev.engLocation}/${itineraryInfoPrev.engLocation} Preview Image 3.jpg`];
    const randomPrevIndex = Math.floor(Math.random() * itineraryPrevImgs.length);
    const randomPrevPic = itineraryPrevImgs[randomPrevIndex];

    // update Dom Elements
    // Itinerary Image & Alt
    const itineraryPreviewImg = clone.querySelector('#previewImg');
    itineraryPreviewImg.src = randomPrevPic;
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

//  Redirects user to itinerary detail page based on selection
function editItinerary(destinationName){
    window.location.href = "itineraryViewer.html?destinations=" + encodeURIComponent(destinationName);
};

// Deletes Destination from itineraryList and localStorage
function deleteItinerary(itineraryInfoPrev){
    // Remove destination from the DOM
    itineraryInfoPrev.element.remove();

    // Remove the actual destination from itineraryList array
    itineraryList.splice(itineraryList.indexOf(itineraryInfoPrev.engLocation), 1);

    // Removing element from previous storedDestinationItems
    const destinationString = JSON.stringify(itineraryList);
    localStorage.setItem('storedDestinationItems', destinationString);

    // Update Local Storage
    saveToLocalStorage();
};

// Retrieves destinations in itinerary list from local storage
function retrieveFromLocalStorage(){
    const destinationString = localStorage.getItem('storedItineraryPrev');
    const storedLocation = JSON.parse(destinationString);
    if (storedLocation) {
        itineraryList = storedLocation;
        console.log(itineraryList);
    }
    for (const key in storedLocation) {
        if (key in localStorage.getItem(storedItinerary) ) {
            if (storedLocation.hasOwnProperty(key)) {
                createItineraryPreview(storedLocation[key]);
            }
        }
        else {
            console.log('deleted' + key)
        }
    }
}

// Saving destinations shown on the itinerary overview page if updated
function saveToLocalStorage(){
    const destinationString = JSON.stringify(itineraryList);
    localStorage.setItem('storedItineraryPrev',destinationString);    
    // printing the current contents of the itinerary page in local storage after saving
    console.log('Items in itinerary list: ' + itineraryList);
    console.log('Items in local storage: ' + localStorage.storedItineraryPrev);
};

if (localStorage.getItem('storedDestinationItems') != null) {
    retrieveFromLocalStorage();
};

if (localStorage.getItem('storedDestinationItems') == null) {
    let itineraryList = [];
};