// Gather info from URL
const queryString = window.location.search;
console.log(queryString);

// Creating a new query string with created url
const params = new URLSearchParams(queryString);
console.log(params);

// Gets the current destination and stores it in a variable
const destinationName = params.get('destinations');
console.log(destinationName);

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
            createItinerary(itineraryInfo[key]);
        }
    }
});

// Array that will house information on individual destination's itinerary page
let savedItinerariesList = [];

// Updating the DOM to show itinerary components
function createItinerary(itineraryInfo) {
    console.log(itineraryInfo);
    // Grabs a reference to the destination template:
    const template = document.querySelector('#itineraryEditTemplate');
    const clone = template.content.cloneNode(true);
    itineraryInfo.element = clone.querySelector('.itineraryInfo');

    // update Dom Elements

    // Images & Alts
    // Main Image
    const itineraryMainImage = clone.querySelector('#locationHeaderImg');
    itineraryMainImage.src = `itinerary-viewer-images/${destinationName}/${destinationName} Main Image.jpg`;
    itineraryMainImage.alt = itineraryInfo.headerImgAlt;

    const locationTopTitle = clone.querySelector('.itineraryTitle')
    locationTopTitle.textContent = 'Your Day at ' + destinationName + '!';
 

    // Recommended Activities
    // Activity One 
    const itineraryActOneImg = clone.querySelector('#itineraryActImg1');
    itineraryActOneImg.src = `itinerary-viewer-images/${destinationName}/Activities/${destinationName} Activity 1.jpg`;
    itineraryActOneImg.alt = itineraryInfo.actImgOneAlt;
    const actOneTitle = clone.querySelector('.overlayTextAct1');
    actOneTitle.textContent = itineraryInfo.actOneTitle;
    const actOneDesc = clone.querySelector('.actDesc1');
    actOneDesc.textContent = itineraryInfo.actOneDesc;

    // Activity Two
    const itineraryActTwoImg = clone.querySelector('#itineraryActImg2');
    itineraryActTwoImg.src = `itinerary-viewer-images/${destinationName}/Activities/${destinationName} Activity 2.jpg`;
    itineraryActTwoImg.alt = itineraryInfo.actImgTwoAlt;
    const actTwoTitle = clone.querySelector('.overlayTextAct2');
    actTwoTitle.textContent = itineraryInfo.actTwoTitle;
    const actTwoDesc= clone.querySelector('.actDesc2');
    actTwoDesc.textContent = itineraryInfo.actTwoDesc;

    // Activity Three
    const itineraryActThreeImg = clone.querySelector('#itineraryActImg3');
    itineraryActThreeImg.src = `itinerary-viewer-images/${destinationName}/Activities/${destinationName} Activity 3.jpg`;
    itineraryActThreeImg.alt = itineraryInfo.actImgThreeAlt;
    const actThreeTitle = clone.querySelector('.overlayTextAct3');
    actThreeTitle.textContent = itineraryInfo.actThreeTitle;
    const actThreeDesc= clone.querySelector('.actDesc3');
    actThreeDesc.textContent = itineraryInfo.actThreeDesc;

    // Activity Four
    const itineraryActFourImg = clone.querySelector('#itineraryActImg4');
    itineraryActFourImg.src = `itinerary-viewer-images/${destinationName}/Activities/${destinationName} Activity 4.jpg`;
    itineraryActFourImg.alt = itineraryInfo.actImgFourAlt;
    const actFourTitle = clone.querySelector('.overlayTextAct4');
    actFourTitle.textContent = itineraryInfo.actFourTitle;
    const actFourDesc = clone.querySelector('.actDesc4');
    actFourDesc.textContent = itineraryInfo.actFourDesc;

    // Food and Drink
    // foodDrink One 
    const itineraryFoodDrinkOneImg = clone.querySelector('#foodDrinkPic1');
    itineraryFoodDrinkOneImg.src = `itinerary-viewer-images/${destinationName}/FoodDrink/${destinationName} Food Drink 1.jpg`;
    itineraryFoodDrinkOneImg.alt = itineraryInfo.foodDrinkImgOneAlt;
    const fdOneTitle = clone.querySelector('.overlayTextFD1');
    fdOneTitle.textContent = itineraryInfo.foodDrinkOneTitle;
    const fdOneDesc = clone.querySelector('.foodDrinkDesc1');
    fdOneDesc.textContent = itineraryInfo.foodDrinkOneDesc;

    // foodDrink Two
    const itineraryFoodDrinkTwoImg = clone.querySelector('#foodDrinkPic2');
    itineraryFoodDrinkTwoImg.src = `itinerary-viewer-images/${destinationName}/FoodDrink/${destinationName} Food Drink 2.jpg`;
    itineraryFoodDrinkTwoImg.alt = itineraryInfo.foodDrinkImgTwoAlt;
    const fdTwoTitle = clone.querySelector('.overlayTextFD2');
    fdTwoTitle.textContent = itineraryInfo.foodDrinkTwoTitle;
    const fdTwoDesc = clone.querySelector('.foodDrinkDesc2');
    fdTwoDesc.textContent = itineraryInfo.foodDrinkTwoDesc;

    //foodDrink Three
    const itineraryFoodDrinkThreeImg = clone.querySelector('#foodDrinkPic3');
    itineraryFoodDrinkThreeImg.src = `itinerary-viewer-images/${destinationName}/FoodDrink/${destinationName} Food Drink 3.jpg`;
    itineraryFoodDrinkThreeImg.alt = itineraryInfo.foodDrinkImgThreeAlt;
    const fdThreeTitle = clone.querySelector('.overlayTextFD3');
    fdThreeTitle.textContent = itineraryInfo.foodDrinkThreeTitle;
    const fdThreeDesc = clone.querySelector('.foodDrinkDesc3');
    fdThreeDesc.textContent = itineraryInfo.foodDrinkThreeDesc;

    // foodDrink Four
    const itineraryFoodDrinkFourImg = clone.querySelector('#foodDrinkPic4');
    itineraryFoodDrinkFourImg.src = `itinerary-viewer-images/${destinationName}/FoodDrink/${destinationName} Food Drink 4.jpg`;
    itineraryFoodDrinkFourImg.alt = itineraryInfo.foodDrinkImgFourAlt;
    const fdFourTitle = clone.querySelector('.overlayTextFD4');
    fdFourTitle.textContent = itineraryInfo.foodDrinkFourTitle;
    const fdFourDesc = clone.querySelector('.foodDrinkDesc4');
    fdFourDesc.textContent = itineraryInfo.foodDrinkFourDesc;

    // Practical Information
    
    // PracInfo One 
    const itineraryPracInfoOneImg = clone.querySelector('#itineraryPicsPrac1');
    itineraryPracInfoOneImg .src = `itinerary-viewer-images/${destinationName}/PracInfo/${destinationName} PracInfo 1.jpg`;
    itineraryPracInfoOneImg .alt = itineraryInfo.pracInfoImgOneAlt;
    const pracInfoTitleOne = clone.querySelector('.overlayTextPrac1');
    pracInfoTitleOne.textContent = itineraryInfo.pracInfoOneTitle;
    const pracInfoDescOne = clone.querySelector('.pracInfoDesc1');
    pracInfoDescOne.textContent = itineraryInfo.pracInfoOneDesc;

    // PracInfo Two
    const itineraryPracInfoTwoImg = clone.querySelector('#itineraryPicsPrac2');
    itineraryPracInfoTwoImg.src = `itinerary-viewer-images/${destinationName}/PracInfo/${destinationName} PracInfo 2.jpg`;
    itineraryPracInfoTwoImg .alt = itineraryInfo.pracInfoImgTwoAlt;
    const pracInfoTitleTwo = clone.querySelector('.overlayTextPrac2');
    pracInfoTitleTwo.textContent = itineraryInfo.pracInfoTwoTitle;
    const pracInfoDescTwo = clone.querySelector('.pracInfoDesc2');
    pracInfoDescTwo.textContent = itineraryInfo.pracInfoTwoDesc;

    // PracInfo Three
    const itineraryPracInfoThreeImg = clone.querySelector('#itineraryPicsPrac3');
    itineraryPracInfoThreeImg.src = `itinerary-viewer-images/${destinationName}/PracInfo/${destinationName} PracInfo 3.jpg`;
    itineraryPracInfoThreeImg.alt = itineraryInfo.pracInfoImgThreeAlt;
    const pracInfoTitleThree = clone.querySelector('.overlayTextPrac3');
    pracInfoTitleThree.textContent = itineraryInfo.pracInfoThreeTitle;
    const pracInfoDescThree = clone.querySelector('.pracInfoDesc3');
    pracInfoDescThree.textContent = itineraryInfo.pracInfoThreeDesc;

    // PracInfo Four
    const itineraryPracInfoFourImg = clone.querySelector('#itineraryPicsPrac4');
    itineraryPracInfoFourImg.src = `itinerary-viewer-images/${destinationName}/PracInfo/${destinationName} PracInfo 4.jpg`;
    itineraryPracInfoFourImg.alt = itineraryInfo.pracInfoImgFourAlt;
    const pracInfoTitleFour = clone.querySelector('.overlayTextPrac4');
    pracInfoTitleFour.textContent = itineraryInfo.pracInfoFourTitle;
    const pracInfoDescFour= clone.querySelector('.pracInfoDesc4');
    pracInfoDescFour.textContent = itineraryInfo.pracInfoFourDesc;


    
    // Array of activites +FoodDrink
    // Redirect to itinerary Preview/Overview Page
    // Removes destination from itinerary list based on user input (click)
    const deleteItineraryBtn = clone.querySelector('.btn.btn-outline-danger');
    deleteItineraryBtn.addEventListener('click', () =>{
        deleteItinerary(destinationName);
    });

    // Save Current Itinerary Information for later viewing based on user input (click)
    const saveItineraryBtn = clone.querySelector('.btn.btn-outline-success');
    saveItineraryBtn.addEventListener('click', () =>{
        // Also Saves Current State of Calendar
        saveItinerary(destinationName);
    });

    const myCal = clone.querySelector('#calendar');

    // Calendar
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Possible Activities To Do (activities + FoodDrinks Sections)
    const activities = [itineraryInfo.actOneTitle, itineraryInfo.actTwoTitle, itineraryInfo.actThreeTitle, itineraryInfo.actFourTitle, itineraryInfo.foodDrinkOneTitle, itineraryInfo.foodDrinkTwoTitle, itineraryInfo.foodDrinkThreeTitle, itineraryInfo.foodDrinkFourTitle]
    // Corresponding descriptions for each activity
    const descriptions = ["Description of activity 1", "Description of activity 2", "Description of activity 3", "Description of activity 4", "Description of food/drink 1", "Description of food/drink 2", "Description of food/drink 3", "Description of food/drink 4"];
    // Array of the events that will be generated for the week
    const weekEvents = [];
    
    // Iterate over each day of the week
    daysOfWeek.forEach((day, index) => {
      // Generate three random events for the current day and add to the calendar
      for (let i = 0; i < 3; i++) {
        // Generate a random time between 10am and 5pm
        const startTime = new Date();
        startTime.setDate(startTime.getDate() + index);
        startTime.setHours(10 + Math.floor(Math.random() * 6));
        startTime.setMinutes(Math.floor(Math.random() * 60));
        startTime.setSeconds(0);
        startTime.setMilliseconds(0);
    
        const endTime = new Date(startTime);
        endTime.setHours(startTime.getHours() + 1);
    
        // Select a random activity and description from the activities and descriptions arrays
        const randomIndex = Math.floor(Math.random() * activities.length);
        const activity = activities[randomIndex];
        const description = descriptions[randomIndex];
    
        // Create a new event with the random activity and time
        var event = {
          from: startTime,
          to: endTime,
          title: activity,
          description: description,
        };
    
        // Add the event to the weekEvents array
        weekEvents.push(event);
      }
    });
    
    var calendarInstance = calendarJs(myCal, {
      manualEditingEnabled: false,
      events: weekEvents,
      startWeekOn: 1, // Start the calendar on Monday
      weekNumbers: false, // Display week numbers
      dayHeaderFormat: 'ddd',
      showAllDayEvents: false,
      showEmptyDaysInWeekView: false,
      useEscapeKeyToExitFullScreenMode: true,
      numberOfWeeks: 1, // Show only one week

    });
    console.log(weekEvents);
    

    // Adding location elements to the Itinerary DOM to be displayed
    const itineraryDestinationContainer = document.querySelector('.myItinerary');
    itineraryDestinationContainer.appendChild(clone);



};

// Saves Current Destination Information(object) to savedItinerariesList for future viewing
function saveItinerary(destinationName){
    // saveEvents on calendar

    // Add actual destinationName to savedItinerariesList array
    savedItinerariesList.push(destinationName);
    console.log(savedItinerariesList);

    // Update Local Storage
    saveToLocalStorage();
};

// Deletes Destination from destinationList
function deleteItinerary(destinationName){
    // If User saved itinerary then decided later to remove it
    if (savedItinerariesList.includes(destinationName)) {
        // Remove the actual destinationName from destinationList array
        savedItinerariesList.splice(savedItinerariesList.indexOf(destinationName), 1);        
    }

    // Remove itinerary and Location from local storage
    // Remove from stored destinations and storeditinerary

    
    // Redirects user back to my itineraries
    window.location.href = "itinerariesOverview.html";

    // Update Local Storage
    saveToLocalStorage();
};

// Saves Current Itinerary Info 
function saveToLocalStorage(){
    const itineraryString = JSON.stringify(savedItinerariesList);
    localStorage.setItem('storedItinerary', itineraryString);    
    // printing the current contents what destination's itineraries have been saved and their information in local storage after saving
    console.log('Items in itineraryList: ' + savedItinerariesList);
    console.log('Items in local storage: ' + localStorage.storedItinerary);
};

// Retrieves itinerary info from local storage 
function retrieveFromLocalStorage(){
    const itineraryString = localStorage.getItem('storedItinerary');
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