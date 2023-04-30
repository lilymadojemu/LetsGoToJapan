document.addEventListener('DOMContentLoaded', function() {
    const itineraryInfo = {
        "Sanrio Puroland": {
            "itineraryTitle":"Sanrio Puroland",
            "headerImgAlt":"Sanrio Characters Floating Over Park Entrance",
            "actImgOneAlt":"3 girls waving hands with Hello Kitty",
            "actImgTwoAlt":"Hello Kitty and Daniel on a multicolored parade float",
            "actImgThreeAlt":"Single rollercoaster cart with My melody's face",
            "actImgFourAlt":"Sanrio Characters under Kawaii Kabuki sign",
            "actOneTitle":"Meet Hello Kitty and other Sanrio characters",
            "actTwoTitle":"Watch the Parade",
            "actThreeTitle":"Visit the Attractions",
            "actFourTitle":"Enjoy the Shows",
            "actOneDesc":"Visitors can meet and greet with popular Sanrio characters such as Hello Kitty, My Melody, and Little Twin Stars. They can take photos with the characters and even receive autographs.",
            "actTwoDesc":"Visitors can watch the colorful parade of Sanrio characters, which is held several times a day. The parade features music, dancing, and elaborate floats that depict the different Sanrio characters.",
            "actThreeDesc":"Sanrio Puroland has a number of attractions that are designed for visitors of all ages, such as the Sanrio Character Boat Ride, the My Melody & Kuromi Mymeroad Drive, and the Sanrio Puroland Theater.",
            "actFourDesc":"Sanrio Puroland offers various shows throughout the day, such as the Miracle Gift Parade, the Hello Kitty in Wonderland show, and the Cinnamoroll & Friends show. These shows feature singing, dancing, and elaborate sets that are sure to delight visitors.",
            "foodDrinkImgOneAlt":"Crepes with the faces of Sanrio Characters",
            "foodDrinkImgTwoAlt":"Curry with the faces of Cinnamoroll and Hello Kitty",
            "foodDrinkImgThreeAlt":"2 Mochi Ice Creams with the faces of Hello Kitty",
            "foodDrinkImgFourAlt":"Multicolored Soda with a Kiki and Lala attached straw",
            "foodDrinkOneTitle":"Character Crepes",
            "foodDrinkTwoTitle":"Character Curry",
            "foodDrinkThreeTitle":"Hello Kitty Mochi Ice Cream",
            "foodDrinkFourTitle":"Kiki and Lala Twinkle Color Miracle Soda",
            "foodDrinkOneDesc":"Sweet treats made of thin pancakes filled with various flavored creams and adorned with cute Sanrio character designs.",
            "foodDrinkTwoDesc":"A delicious Japanese curry dish featuring cute and colorful Sanrio characters on top.",
            "foodDrinkThreeDesc":"A delightful Japanese dessert made with soft and chewy mochi dough wrapped around a creamy ice cream filling and shaped into the iconic Hello Kitty character.",
            "foodDrinkFourDesc":"A sparkling and fruity Japanese soda with a fun color-changing feature that adds a touch of magic to any drink.",
            "pracInfoImgOneAlt":"Hotel room with multicolored Hello Kitty theme",
            "pracInfoImgTwoAlt":"Bus with Japanese Text",
            "pracInfoImgThreeAlt":"List of Ticket Prices for Children and Adults in Yen",
            "pracInfoImgFourAlt":"Four Sanrio Charcters standing behind a sign of Flower Puroland",
            "pracInfoOneTitle":"Nearby Accommodations",
            "pracInfoTwoTitle":"Transportation Available",
            "pracInfoThreeTitle":"Costs",
            "pracInfoFourTitle":"Hours of Operation",
            "pracInfoOneDesc":"Consider staying at the Keio Plaza Hotel Tama during your visit to Sanrio Puroland for its convenient location and spacious, modern rooms, including Sanrio-themed options.",
            "pracInfoTwoDesc":"Sanrio Puroland can be accessed via train or bus, with the nearest train station being Tama Center Station and a free shuttle bus service running between the station and the park, and there are also direct bus services available from Shinjuku and Shibuya stations.",
            "pracInfoThreeDesc":"Sanrio Puroland's admission costs 3,300 yen (approximately $30 USD) for adults and 2,500 yen (approximately $23 USD) for children, with additional fees for certain attractions and activities.",
            "pracInfoFourDesc":"Sanrio Puroland is typically open from 10:00 AM to 5:00 PM on weekdays, and from 10:00 AM to 6:00 PM on weekends and holidays, but the hours may vary depending on the season and special events.",
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
            "pracInfoThreeDesc":"600 yen",
            "pracInfoFourDesc":"",
        },
    };
    // Set that destination Name is equal to selected element from itinerariesOverview

    // Creates an Itinerary 
    // createItinerary(destination);
    for (const key in itineraryInfo) {
        if (destinationName == key) {
            const itineraryElem = createItinerary(itineraryInfo[key]);
            createItinerary(itineraryElem);
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
    destinationActOneImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Activity 1.jpg`;
    destinationActOneImg.alt = itineraryInfo.activityImgOneAlt;
    // Activity Two
    const destinationActTwoImg = clone.querySelector('.activityImgTwo');
    destinationActTwoImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Activity 2.jpg`;
    destinationActTwoImg.alt = itineraryInfo.activityImgTwoAlt;
    // Activity Three
    const destinationActThreeImg = clone.querySelector('.activityImgThree');
    destinationActThreeImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Activity 3.jpg`;
    destinationActThreeImg.alt = itineraryInfo.activityImgThreeAlt;
    // Activity Four
    const destinationActFourImg = clone.querySelector('.activityImgThree');
    destinationActFourImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Activity 4.jpg`;
    destinationActFourImg.alt = itineraryInfo.activityImgFourAlt;

    // Food and Drink
    // foodDrink One 
    const destinationFoodDrinkOneImg = clone.querySelector('.activityImgOne');
    destinationFoodDrinkOneImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Food Drink 1.jpg`;
    destinationFoodDrinkOneImg.alt = itineraryInfo.activityImgOneAlt;
    // foodDrink Two
    const destinationFoodDrinkTwoImg = clone.querySelector('.activityImgTwo');
    destinationFoodDrinkTwoImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Food Drink 2.jpg`;
    destinationFoodDrinkTwoImg.alt = itineraryInfo.activityImgTwoAlt;
    //foodDrink Three
    const destinationFoodDrinkThreeImg = clone.querySelector('.activityImgThree');
    destinationFoodDrinkThreeImg .src = `itinerary-viewer-images/${destinationName}/${destinationName} Food Drink 3.jpg`;
    destinationFoodDrinkThreeImg .alt = itineraryInfo.activityImgThreeAlt;
    // foodDrink Four
    const destinationFoodDrinkFourImg = clone.querySelector('.activityImgThree');
    destinationFoodDrinkFourImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} Food Drink 4.jpg`;
    destinationFoodDrinkFourImg.alt = itineraryInfo.activityImgThreeAlt;

    // Practical Information
    
    // PracInfo One 
    const destinationPracInfoOneImg = clone.querySelector('.activityImgOne');
    destinationPracInfoOneImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} PracInfo 1.jpg`;
    destinationPracInfoOneImg.alt = itineraryInfo.activityImgOneAlt;
    const pracInfoTitleOne = clone.querySelector('.seasonOne');
    pracInfoTitleOne.textContent = destinationInfo.seasonOne;
    const pracInfoDescOne = clone.querySelector('.seasonOne');
    pracInfoDescOne.textContent = destinationInfo.seasonOne;

    // PracInfo Two
    const destinationPracInfoTwoImg = clone.querySelector('.activityImgTwo');
    destinationPracInfoTwoImgsrc = `itinerary-viewer-images/${destinationName}/${destinationName} PracInfo 2.jpg`;
    destinationPracInfoTwoImg.alt = itineraryInfo.activityImgTwoAlt;
    const pracInfoTitleTwo = clone.querySelector('.seasonOne');
    pracInfoTitleOne.textContent = destinationInfo.seasonOne;
    const pracInfoDescTwo = clone.querySelector('.seasonOne');
    pracInfoDescTwo.textContent = destinationInfo.seasonOne;

    // PracInfo Three
    const destinationPracInfoThreeImg = clone.querySelector('.activityImgThree');
    destinationPracInfoThreeImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} PracInfo 3.jpg`;
    destinationPracInfoThreeImg.alt = itineraryInfo.activityImgThreeAlt;
    const pracInfoTitleThree = clone.querySelector('.seasonOne');
    pracInfoTitleThree.textContent = destinationInfo.seasonOne;
    const pracInfoDescThree = clone.querySelector('.seasonOne');
    pracInfoDescThree.textContent = destinationInfo.seasonOne;

    // PracInfo Four
    const destinationPracInfoFourImg = clone.querySelector('.activityImgThree');
    destinationPracInfoFourImg.src = `itinerary-viewer-images/${destinationName}/${destinationName} PracInfo 4.jpg`;
    destinationPracInfoFourImg.alt = itineraryInfo.activityImgThreeAlt;
    const pracInfoTitleFour = clone.querySelector('.seasonOne');
    pracInfoTitleOne.textContent = destinationInfo.seasonOne;
    const pracInfoDescFour= clone.querySelector('.seasonOne');
    pracInfoDescOne.textContent = destinationInfo.seasonOne;

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