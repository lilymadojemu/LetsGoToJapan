document.addEventListener('DOMContentLoaded', function() {
    const itineraryInfo = {
        "Sanrio Puroland": {
            "destinationTitle": "Sanrio Puroland",
            "destinationTagline":"Where Hello Kitty and Friends Come to Life: Experience the Magic of Sanrio Puroland!",
            "destinationSummary": "Sanrio Puroland is a must-visit destination for fans of Sanrio characters, offering a magical world of kawaii-themed shows, rides, and shopping. Located in Tokyo, Japan, it's a paradise for Hello Kitty, My Melody, Cinnamoroll, and other beloved characters, with unique experiences and merchandise that delight visitors of all ages.",
            "activityImgOne": "location-images/Sanrio/Sanrio_food_1.jpeg",
            "activityImgOneAlt":"Milkshakes, Cakes, and Curry with faces of Cinnamoroll",
            "activityImgTwo": "location-images/Sanrio/kawaiikabuki_Image.jpeg",
            "activityImgTwoAlt":"Kawaii Kabuki Poster",
            "activityImgThree": "location-images/Sanrio/enjoygoods_image.jpeg",
            "activityImgThreeAlt":"Headbands depicting various Sanrio characters",
            "activityTitleOne":"Food",
            "activityTitleTwo":"Have Fun!",
            "activityTitleThree":"Souvenirs",
            "activityDescriptionOne":"You'll love the diverse menu options we have, ranging from cute dishes with character motifs to filling meals that will satisfy your hunger. There's something for everyone! Don't miss the chance to capture the picture-perfect presentation of our dishes and share them on social media. Additionally, our seasonal menu items change throughout the year, so be sure to check them out before you come for a unique and delicious dining experience",
            "activityDescriptionTwo":"This mesmerizing musical show combines the irresistible charm of Sanrio characters with the time-honored art form of Kabuki. Kabuki is a traditional form of Japanese theater known for its elaborate costumes, stylized movements, and dramatic performances. It has a rich history dating back to the Edo period, and is renowned for its unique blend of music, dance, and drama. In this collaborative show, you'll experience the captivating fusion of Sanrio's KAWAII (cuteness) with the elegance and artistry of Kabuki, creating a truly unforgettable performance. Don't miss the chance to see beloved Sanrio characters take the stage in their finest Kabuki-inspired costumes!",
            "activityDescriptionThree":"At Puroland, you'll be spoiled for choice with the wide array of goodies available! From candy to stationery, clothing, and more, there's something for everyone. You'll find an overwhelming number and variety of products, including items featuring popular Sanrio characters like Hello Kitty, My Melody, and Cinnamoroll. What's more, there are loads of original products that are exclusive to Puroland, so you won't find them anywhere else. Whether you're looking for a cute souvenir or a unique item to commemorate your visit, you're sure to find your favorite items at Puroland!",


        },
        "Fushimi Inari Shrine": {
            "destinationTitle": "Fushimi Inari Shrine",
        },
        "Osaka Castle": {
            "destinationTitle": "Osaka Castle",
        },
    };

    // createItinerary(destination);
    for (const key in itineraryInfo) {
        if (destinationName == key) {
            const destinationElement = createItinerary(destinationInfo[key]);
            addNewItinerary(destinationElement);
        }
    }
});

// Array that will house products intended to be on itinerary page
let itineraryList = [];

var calendarInstance1 = calendarJs( "calendar", {
    // User can create events but will be auto populated with info.
    manualEditingEnabled: true

    // All your options can be set here
} );

// Updating the DOM to show itinerary components
function createItinerary(destinationInfo) {
    console.log(destinationInfo);
    // Grabs a reference to the destination template:
    const template = document.querySelector('#destinationTemplate');
    const clone = template.content.cloneNode(true);
    destinationInfo.element = clone.querySelector('.destinationInfo');
    // update Dom Elements

    // Images & Alts
    // Main Image
    const destinationMainImage = clone.querySelector('.locationMainImg');
    destinationMainImage.src = `location-images/${destinationName}/${destinationName} Main Image.jpg`;
    destinationMainImage.alt = destinationInfo.locationMainImgAlt;
    
    // Activity One 
    const destinationActOneImg = clone.querySelector('.activityImgOne');
    destinationActOneImg.src = `location-images/${destinationName}/${destinationName} Activity One.jpg`;
    destinationActOneImg.alt = destinationInfo.activityImgOneAlt;
    // Activity Two
    const destinationActTwoImg = clone.querySelector('.activityImgTwo');
    destinationActTwoImg.src = `location-images/${destinationName}/${destinationName} Activity Two.jpg`;
    destinationActTwoImg.alt = destinationInfo.activityImgTwoAlt;
    // Activity Three
    const destinationActThreeImg = clone.querySelector('.activityImgThree');
    destinationActThreeImg.src = `location-images/${destinationName}/${destinationName} Activity Three.jpg`;
    destinationActThreeImg.alt = destinationInfo.activityImgThreeAlt;

    // Removes destination from itineraries based on user input (click)
    const removeSaveToItineraryBtn = clone.querySelector('.saveDestination');
    removeSaveToItineraryBtn.addEventListener('click', () =>{
        deleteDestination(destinationInfo);
    });

    // Saves current itinerary based on user input (click)
    const saveCurrentItineraryBtn = clone.querySelector('.saveDestination');
    saveCurrentItineraryBtn.addEventListener('click', () =>{
        deleteDestination(destinationInfo);
    });

    // Adding location elements to the Itiernary DOM to be displayed
    const itineraryDestinationContainer = document.querySelector('.itineraryInfo');
    itineraryDestinationContainer.appendChild(clone);

};

// Saves Current Itinerary Info 
function saveToLocalStorage(){
    const cartString = JSON.stringify(shoppingCart);
    localStorage.setItem('storedCartItems', cartString);    
    // printing the current contents of the cart in local storage after saving
    console.log('Items in shopping cart array: ' + shoppingCart);
    console.log('Items in local storage: ' + localStorage.storedCartItems);
};

// Retrieves itinerary info from local storage if applicable
function retrieveFromLocalStorage(){
    const destinationString = localStorage.getItem('storedDestinationItems');
    const storedDestination = JSON.parse(destinationString);
    if (storedDestination) {
        destinationList = storedDestination;
        console.log(destinationList);
    }
}

if (localStorage.getItem('storedDestinations') != null) {
    retrieveFromLocalStorage();
};

if (localStorage.getItem('storedDestinations') == null) {
    let itineraryList = [];
};