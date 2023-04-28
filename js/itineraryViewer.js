document.addEventListener('DOMContentLoaded', function() {
    const itineraryInfo = {
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
            "foodDrinkImgOneAlt":"",
            "foodDrinkImgTwoAlt":"",
            "foodDrinkImgThreeAlt":"",
            "foodDrinkOneTitle":"",
            "foodDrinkTwoTitle":"",
            "foodDrinkThreeTitle":"",
            "foodDrinkFourTitle":"",
            "foodDrinkOneDesc":"",
            "foodDrinkTwoDesc":"",
            "foodDrinkThreeDesc":"",
            "foodDrinkFourDesc":"",
            "pracInfoImgOneAlt":"",
            "pracInfoImgTwoAlt":"",
            "pracInfoImgThreeAlt":"",
            "pracInfoOneTitle":"",
            "pracInfoTwoTitle":"",
            "pracInfoThreeTitle":"",
            "pracInfoFourTitle":"",
            "pracInfoOneDesc":"",
            "pracInfoTwoDesc":"",
            "pracInfoThreeDesc":"",
            "pracInfoFourDesc":"",
        },
        "Fushimi Inari Shrine": {
            "itineraryTitle": "Fushimi Inari Shrine",
            "headerImgAlt":"",
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
            "foodDrinkImgOneAlt":"",
            "foodDrinkImgTwoAlt":"",
            "foodDrinkImgThreeAlt":"",
            "foodDrinkOneTitle":"",
            "foodDrinkTwoTitle":"",
            "foodDrinkThreeTitle":"",
            "foodDrinkFourTitle":"",
            "foodDrinkOneDesc":"",
            "foodDrinkTwoDesc":"",
            "foodDrinkThreeDesc":"",
            "foodDrinkFourDesc":"",
            "pracInfoImgOneAlt":"",
            "pracInfoImgTwoAlt":"",
            "pracInfoImgThreeAlt":"",
            "pracInfoOneTitle":"",
            "pracInfoTwoTitle":"",
            "pracInfoThreeTitle":"",
            "pracInfoFourTitle":"",
            "pracInfoOneDesc":"",
            "pracInfoTwoDesc":"",
            "pracInfoThreeDesc":"",
            "pracInfoFourDesc":"",
        },
        "Osaka Castle": {
            "itineraryTitle": "Osaka Castle",
            "headerImgAlt":"",
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
            "foodDrinkImgOneAlt":"",
            "foodDrinkImgTwoAlt":"",
            "foodDrinkImgThreeAlt":"",
            "foodDrinkOneTitle":"",
            "foodDrinkTwoTitle":"",
            "foodDrinkThreeTitle":"",
            "foodDrinkFourTitle":"",
            "foodDrinkOneDesc":"",
            "foodDrinkTwoDesc":"",
            "foodDrinkThreeDesc":"",
            "foodDrinkFourDesc":"",
            "pracInfoImgOneAlt":"",
            "pracInfoImgTwoAlt":"",
            "pracInfoImgThreeAlt":"",
            "pracInfoOneTitle":"",
            "pracInfoTwoTitle":"",
            "pracInfoThreeTitle":"",
            "pracInfoFourTitle":"",
            "pracInfoOneDesc":"",
            "pracInfoTwoDesc":"",
            "pracInfoThreeDesc":"",
            "pracInfoFourDesc":"",
        },
    };
    // Set that destination Name is equal to selected element from itinerariesOverview

    // Creates an Itinerary 
    // createItinerary(destination);
    for (const key in itineraryInfo) {
        if (destinationName == key) {
            const itineraryElem = createItinerary(itineraryInfo[key]);
            addNewItinerary(itineraryElem);
        }
    }
});

// Array that will house products intended to be on itinerary page
let itineraryList = [];

const activities = []

// Creating an instance of a calendar
var calendarInstance1 = calendarJs( "calendar", {
    // Calendar Options/Properties
    manualEditingEnabled: false,
    startWeekOn: 1,
    weekNumbers: true,
    dayHeaderFormat: 'ddd',
    showAllDayEvents: false
} );

// Updating the DOM to show itinerary components
function createItinerary(itineraryInfo) {
    console.log(itineraryInfo);
    // Grabs a reference to the destination template:
    const template = document.querySelector('#itineraryEditTemplate');
    const clone = template.content.cloneNode(true);
    itineraryInfo.element = clone.querySelector('.itineraryInfo');
    // update Dom Elements
    // Change text

    // Images & Alts
    // Main Image
    const destinationMainImage = clone.querySelector('.locationMainImg');
    destinationMainImage.src = `itinerary-viewer-images/${destinationName}/${destinationName} Main Image.jpg`;
    destinationMainImage.alt = itineraryInfo.locationMainImgAlt;
    // Recommended Activities
    // Activity One 
    const destinationActOneImg = clone.querySelector('.activityImgOne');
    destinationActOneImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Activity One.jpg`;
    destinationActOneImg.alt = itineraryInfo.activityImgOneAlt;
    // Activity Two
    const destinationActTwoImg = clone.querySelector('.activityImgTwo');
    destinationActTwoImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Activity Two.jpg`;
    destinationActTwoImg.alt = itineraryInfo.activityImgTwoAlt;
    // Activity Three
    const destinationActThreeImg = clone.querySelector('.activityImgThree');
    destinationActThreeImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Activity Three.jpg`;
    destinationActThreeImg.alt = itineraryInfo.activityImgThreeAlt;
    // Activity Four
    const destinationActFourImg = clone.querySelector('.activityImgThree');
    destinationActFourImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Activity Three.jpg`;
    destinationActFourImg.alt = itineraryInfo.activityImgThreeAlt;

    // Food and Drink
    // foodDrink One 
    const destinationFoodDrinkOneImg = clone.querySelector('.activityImgOne');
    destinationFoodDrinkOneImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Food Drink One.jpg`;
    destinationFoodDrinkOneImg.alt = itineraryInfo.activityImgOneAlt;
    // foodDrink Two
    const destinationFoodDrinkTwoImg = clone.querySelector('.activityImgTwo');
    destinationFoodDrinkTwoImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Food Drink Two.jpg`;
    destinationFoodDrinkTwoImg.alt = itineraryInfo.activityImgTwoAlt;
    //foodDrink Three
    const destinationFoodDrinkThreeImg = clone.querySelector('.activityImgThree');
    destinationFoodDrinkThreeImg .src = `itinerary-viewer-images/${destinationName}/${destinationName} Food Drink Three.jpg`;
    destinationFoodDrinkThreeImg .alt = itineraryInfo.activityImgThreeAlt;
    // foodDrink Four
    const destinationFoodDrinkFourImg = clone.querySelector('.activityImgThree');
    destinationFoodDrinkFourImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Food Drink Four.jpg`;
    destinationFoodDrinkFourImg.alt = itineraryInfo.activityImgThreeAlt;

    // Practical Information
    // PracInfo One 
    const destinationPracInfoOneImg = clone.querySelector('.activityImgOne');
    destinationPracInfoOneImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Prac One.jpg`;
    destinationPracInfoOneImg.alt = itineraryInfo.activityImgOneAlt;
    // PracInfo Two
    const destinationPracInfoTwoImg = clone.querySelector('.activityImgTwo');
    destinationPracInfoTwoImgsrc = `itinerary-viewer-images/${destinationName}/${destinationName} Prac Two.jpg`;
    destinationPracInfoTwoImg.alt = itineraryInfo.activityImgTwoAlt;
    // PracInfo Three
    const destinationPracInfoThreeImg = clone.querySelector('.activityImgThree');
    destinationPracInfoThreeImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Prac Three.jpg`;
    destinationPracInfoThreeImg.alt = itineraryInfo.activityImgThreeAlt;
    // PracInfo Four
    const destinationPracInfoFourImg = clone.querySelector('.activityImgThree');
    destinationPracInfoFourImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Prac Four.jpg`;
    destinationPracInfoFourImg.alt = itineraryInfo.activityImgThreeAlt;

    // Redirect to itinerary Preview/Overview Page
    // Removes destination from itinerary list based on user input (click)
    const deleteItineraryBtn = clone.querySelector('.btn.btn-outline-danger');
    deleteItineraryBtn.addEventListener('click', () =>{
        deleteItinerary(destinationName);
    });

    // Save Current Itinerary Information for later viewing based on user input (click)
    const saveItineraryBtn = clone.querySelector('.btn.btn-outline-success');
    saveItineraryBtn.addEventListener('click', () =>{
        saveItinerary(destinationName);
    });

    // Adding location elements to the Itinerary DOM to be displayed
    const itineraryDestinationContainer = document.querySelector('.myItinerary');
    itineraryDestinationContainer.appendChild(clone);

};


// Saves Current Destination from destinationList
function saveItinerary(destinationName){
    // Add actual destinationName to destinationList array
    destinationList.push(destinationName);

    console.log(destinationList);

    // Update Local Storage
    saveToLocalStorage();
};

// Deletes Destination from destinationList
function deleteItinerary(destinationName){
    // Remove the actual destinationName from destinationList array
    destinationList.splice(destinationList.indexOf(destinationName), 1)

    // Update Local Storage
    saveToLocalStorage();
};

// Saves Current Itinerary Info 
function saveToLocalStorage(){
    const itineraryString = JSON.stringify(itineraryList);
    localStorage.setItem('storedItineraryElem', itineraryString);    
    // printing the current contents of the cart in local storage after saving
    console.log('Items in itineraryList: ' + itineraryList);
    console.log('Items in local storage: ' + localStorage.storedItinerary);
};

// Retrieves itinerary info from local storage 
function retrieveFromLocalStorage(){
    const itineraryString = localStorage.getItem('storedItineraryElem');
    const storedItinerary= JSON.parse(itineraryString);
    if (storedItinerary) {
        itineraryList = storedItinerary;
        console.log(itineraryList);
    }
}

if (localStorage.getItem('storedDestinations') != null) {
    retrieveFromLocalStorage();
};

if (localStorage.getItem('storedDestinations') == null) {
    let itineraryList = [];
};