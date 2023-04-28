
document.addEventListener('DOMContentLoaded', function() {
    
    const itineraryInfoPrev = {
        "Sanrio Puroland": {
            "itineraryTitle": "Sanrio Puroland",
            "headerImgAlt":"Sanrio Characters Floating Over Park Entrance",
            "actImgOneAlt":"",
            "actImgTwoAlt":"",
            "actImgThreeAlt":"",
            "actOneTitle":"",
            "actTwoTitle":"",
            "actThreeTitle":"",
            "actFourTitle":"",
            "actOneDesc":"",
            "actTwoDesc":"",
            "actThreeDesc":"",
            "actFourDesc":"",
        },
        "Fushimi Inari Shrine": {
            "itineraryTitle": "Fushimi Inari Shrine",
            "headerImgAlt":"Sanrio Characters Floating Over Park Entrance",
            "actImgOneAlt":"",
            "actImgTwoAlt":"",
            "actImgThreeAlt":"",
            "actOneTitle":"",
            "actTwoTitle":"",
            "actThreeTitle":"",
            "actFourTitle":"",
            "actOneDesc":"",
            "actTwoDesc":"",
            "actThreeDesc":"",
            "actFourDesc":"",
        },
        "Osaka Castle": {
            "itineraryTitle": "Osaka Castle",
            "headerImgAlt":"Sanrio Characters Floating Over Park Entrance",
            "actImgOneAlt":"",
            "actImgTwoAlt":"",
            "actImgThreeAlt":"",
            "actOneTitle":"",
            "actTwoTitle":"",
            "actThreeTitle":"",
            "actFourTitle":"",
            "actOneDesc":"",
            "actTwoDesc":"",
            "actThreeDesc":"",
            "actFourDesc":"",
        },

    }
    
    for (const key in localStorage.storedDestinationItems) {
        createItineraryPreview(itineraryInfoPrev);
    }

    // If destinationName has been deleted from itinerary from destination In Depth Page, remove it from the DOM of itinerary Page
    // Removes selected element from the DOM
    // destinationName.element.remove();
});

function createItineraryPreview(itineraryInfoPrev) {
    console.log(itineraryInfoPrev);
    // Grabs a reference to the destination template:
    const template = document.querySelector('#itineraryPreviewTemplate');
    const clone = template.content.cloneNode(true);
    itineraryInfoPrev.element = clone.querySelector('.itineraryPreview');
    // update Dom Elements

    // Itinerary Image
    const itineraryPreviewImg = clone.querySelector('.locationMainImg');
    itineraryPreviewImg.src = `itinerary-images/${destinationName}/${destinationName} Itinerary Preview Image.jpg`;
    itineraryPreviewImg.alt = destinationInfo.locationMainImgAlt;

    // Top things
    // Destination Name
    const destinationTopTitle = clone.querySelector('.destinationTitle')
    destinationTopTitle.textContent = 'Welcome to ' + destinationName + '!';

    // Removes destination from itinerary list based on user input (click)
    const removeSaveToItineraryBtn = clone.querySelector('.saveDestination');
    removeSaveToItineraryBtn.addEventListener('click', () =>{
        deleteDestination(destinationInfo);
    });

    // Adding location elements to the Itinerary DOM to be displayed
    const itineraryDestinationContainer = document.querySelector('.itineraryInfo');
    itineraryDestinationContainer.appendChild(clone);

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

// Saves destinations in Destination List to itinerary Page 
function saveToLocalStorage(){
    const cartString = JSON.stringify(shoppingCart);
    localStorage.setItem('storedCartItems', cartString);    
    // printing the current contents of the cart in local storage after saving
    console.log('Items in shopping cart array: ' + shoppingCart);
    console.log('Items in local storage: ' + localStorage.storedCartItems);
};


if (localStorage.getItem('storedDestinationsItems') != null) {
    retrieveFromLocalStorage();
};

// if (localStorage.getItem('storedDestinationsItems') == null) {
//     let destinationList = [];
// };