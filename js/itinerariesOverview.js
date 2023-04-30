let itineraryList = Array.from(localStorage.storedDestinationsItems);

document.addEventListener('DOMContentLoaded', function() {
    const itineraryInfoPrev = {
        "Sanrio Puroland": {
            "engLocation": "Sanrio Puroland",
            "jpnLocation":"サンリオピューロランド",
            "romajiLocation":"伏見稲荷大社",
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

    }
    
    for (const key in localStorage.storedDestinationItems) {
        // var destinationName = key;
        createItineraryPreview(itineraryInfoPrev[key]);
    }

    // If destinationName has been deleted from itinerary from destination In Depth Page, remove it from the DOM of itinerary Page
    // Removes selected element from the DOM
    // destinationName.element.remove();
});

function createItineraryPreview(itineraryInfoPrev) {
    console.log(itineraryInfoPrev);
    // Grabs a reference to the itineraryPreview template:
    const template = document.querySelector('#itineraryPreviewTemplate');
    const clone = template.content.cloneNode(true);
    itineraryInfoPrev.element = clone.querySelector('.itineraryPreview');

    // different image paths <-- Put into an array, then shuffle array (have if come with an output), set that output equal to .src
    // An array with the possible itinerary Preview Images
    const itineraryPrevImgs = [`itinerary-overview-images/${destinationName}/${destinationName} Itinerary Preview Image 1.jpg`, `itinerary-overview-images/${destinationName}/${destinationName} Itinerary Preview Image 2.jpg`, `itinerary-overview-images/${destinationName}/${destinationName} Itinerary Preview Image 3.jpg`];
    const randomPrevPic = Math.floor(Math.random() * itineraryPrevImgs.length);

    // update Dom Elements

    // Itinerary Image
    const itineraryPreviewImg = clone.querySelector('.previewImg');
    itineraryPreviewImg.src = randomPrevPic;
    itineraryPreviewImg.alt = itineraryInfoPrev.prevImgAlt;

    // Destination Name
    const locationName = clone.querySelector('.destinationTitle')
    locationName.textContent = itineraryInfoPrev.location;

    const locationJpnName = clone.querySelector('.itineraryJpnTitle')
    locationJpnName.textContent = itineraryInfoPrev.jpnLocation;

    // Removes local storage and itineraryOverview Dom destination from itinerary list based on user input (click)
    const removeItineraryBtn = clone.querySelector('.btn.btn-outline-danger');
    removeItineraryBtn.addEventListener('click', () =>{
        deleteItinerary(destinationName);
    });

    // Opens actual itinerary page for the destination that user hs clicked 
    const editTripBtn = clone.querySelector('.btn.btn-outline-primary');
    editTripBtn.addEventListener('click', () =>{
        editItinerary(destinationName);
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
function deleteItinerary(destinationName){
    // Remove the actual destinationName from itineraryList array
    itineraryList.splice(itineraryList.indexOf(destinationName), 1)

    // Remove destination for local Storage
    destinationName.element.remove();

    // Update Local Storage
    saveToLocalStorage();
};

// Retrieves destinations in itinerary list from local storage
function retrieveFromLocalStorage(){
    const destinationString = localStorage.getItem('storedDestinationItems');
    const storedDestination = JSON.parse(destinationString);
    console.log('retrieved from local storage ' + destinationString);
    if (storedDestination) {
        destinationList = storedDestination;
        console.log(destinationList);
    }
    for (const key in destinationString) {
        if (storedDestination == key) {
            createItineraryPreview(storedDestination);
        }
    }
    console.log(destinationString);
}

// Saving destinations shown on the itinerary overview page if updated
function saveToLocalStorage(){
    const destinationString = JSON.stringify(itineraryList);
    localStorage.setItem('storedDestination',destinationString);    
    // printing the current contents of the cart in local storage after saving
    console.log('Items in itinerary list: ' + itineraryList);
    console.log('Items in local storage: ' + localStorage.storedDestination);
};

if (localStorage.getItem('storedDestinationsItems') != null) {
    retrieveFromLocalStorage();
};

if (localStorage.getItem('storedDestinationsItems') == null) {
    let itineraryList = [];
};