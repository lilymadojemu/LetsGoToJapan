// Array that will house information on individual destination's itinerary page
const savedItinerariesList = JSON.parse(localStorage.storedDestinationItems);

// Gather info from URL
const queryString = window.location.search;

// Creating a new query string with created url
const params = new URLSearchParams(queryString);

// Gets the current destination and stores it in a variable
const destinationName = params.get('destinations');

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
            "headerImgAlt":"Fushimi Inari Shrine",
            "actImgOneAlt":"Torii Gates",
            "actImgTwoAlt":"Fushimi Inari Main Shrine",
            "actImgThreeAlt":"People resting one a bench on a mountain",
            "actImgFourAlt":"People receiving blessings from the Fushimi Inari Shrine",
            "actOneTitle":"Hike through the Torii Gates",
            "actTwoTitle":"Visit the Main Shrine",
            "actThreeTitle":"Explore the Mountain",
            "actFourTitle":"Attend a Festival",
            "actOneDesc":" One of the main attractions at Fushimi Inari Shrine is the hike through the thousands of orange Torii gates. The hike is moderate in difficulty and can take around 2-3 hours to complete. As you hike up the mountain, you'll come across various shrines and other smaller Torii gates. I recommend starting the hike early in the morning to avoid the crowds.",
            "actTwoDesc":": At the end of the Torii gate hike, you'll reach the main shrine where you can offer prayers and take pictures. The shrine is surrounded by trees and offers a peaceful atmosphere away from the crowds. I recommend taking your time to explore the shrine and appreciate the beauty of the architecture.",
            "actThreeDesc":"After visiting the main shrine, you can continue to explore the mountain by hiking further up. There are various trails that lead to other smaller shrines and viewpoints with stunning views of Kyoto. I recommend taking a break at one of the smaller shrines and enjoying the view.",
            "actFourDesc":"The festivals at Fushimi Inari Shrine is a lively event featuring traditional music, dancing, and food stalls. It's a great opportunity to immerse oneself in Japanese culture and witness the vibrant atmosphere of a local festival.",
            "foodDrinkImgOneAlt":"Matcha Ice Cream in a bowl",
            "foodDrinkImgTwoAlt":"Soba Noodles on a white bowl",
            "foodDrinkImgThreeAlt":"Inari-zushi in a blue bowl",
            "foodDrinkImgFourAlt":"Sake on a black shelf",
            "foodDrinkOneTitle":"Matcha Ice Cream",
            "foodDrinkTwoTitle":"Soba Noodles",
            "foodDrinkThreeTitle":"Inari-zushi",
            "foodDrinkFourTitle":"Sake",
            "foodDrinkOneDesc":" Kyoto is famous for its matcha (powdered green tea), and you can find several shops selling matcha ice cream near the shrine. It's a perfect treat on a hot day!",
            "foodDrinkTwoDesc":" Soba is a type of Japanese noodle made from buckwheat flour. There are several soba restaurants located near the shrine, where you can enjoy a hot bowl of soba noodles.",
            "foodDrinkThreeDesc":" This is a popular local dish made of sushi rice and stuffed in a fried tofu pouch. It is said to be the favorite food of the Shinto god Inari, to whom the shrine is dedicated.",
            "foodDrinkFourDesc":" Fushimi Inari Shrine is located in the Fushimi district, which is known for its sake breweries. You can visit one of the breweries to learn about the sake-making process and sample different varieties of sake.",
            "pracInfoImgOneAlt":"View of the Daiwa Roynet Hotel Kyoto Shijo Karasuma",
            "pracInfoImgTwoAlt":"Map of route to go to Fushimi Inari Shrine",
            "pracInfoImgThreeAlt":"Torii Gates",
            "pracInfoImgFourAlt":"A fox holding a scroll",
            "pracInfoOneTitle":"Nearby Accommodations",
            "pracInfoTwoTitle":"Transportation Available",
            "pracInfoThreeTitle":"Costs",
            "pracInfoFourTitle":"Hours of Operation",
            "pracInfoOneDesc":"If you're planning a visit to Fushimi Inari Shrine, consider staying at Daiwa Roynet Hotel Kyoto Shijo Karasuma. This modern hotel offers comfortable and convenient accommodations, with easy access to the shrine and other top attractions in Kyoto. Plus, with its stylish decor and on-site amenities like a fitness center and laundry facilities, you'll have everything you need for a comfortable and enjoyable stay.",
            "pracInfoTwoDesc":"The easiest way to get to Fushimi Inari is by train. From Kyoto Station, you can take the JR Nara Line, and within 5 minutes you will arrive at Inari Station. Fushimi Inari is located right outside that station. If you are using a JR Pass, you can use it to travel freely on this train line. Otherwise, it will cost you ¥140. Always double check if your train stops at Inari Station, as only local trains stop at the station.",
            "pracInfoThreeDesc":"There is no admission fee to visit Fushimi Inari Shrine, as it is a public shrine that is free to enter and explore. However, visitors may choose to make donations or purchase souvenirs on the premises as a way of supporting the shrine's upkeep and maintenance.",
            "pracInfoFourDesc":"Fushimi Inari Shrine is typically open from 6:30am to 6:30pm, with some variations depending on the season. However, it's important to note that the inner shrine (Honden) closes at 4:30pm. Additionally, the shrine is open every day of the year, so you can visit it even during holidays or weekends.",
        },
        "Osaka Castle": {
            "itineraryTitle":"Osaka Castle",
            "headerImgAlt":"Osaka Castle",
            "actImgOneAlt":"Osaka Castle and the bridge leading to it",
            "actImgTwoAlt":"People viewing a painting at the Osaka Castle Museum",
            "actImgThreeAlt":"Osaka Castle",
            "actImgThreeAlt":"Osaka Castle with Blooming Cherry Blossoms",
            "actOneTitle":"Explore the castle ground",
            "actTwoTitle":"Visit the Castle Museum",
            "actThreeTitle":"Climb up to the Main Tower",
            "actFourTitle":"Attend a cultural event or festival",
            "actOneDesc":"Take a walk around the castle's expansive grounds, which include a moat, gardens, and several gates. There are also various historical artifacts and statues scattered throughout the park.",
            "actTwoDesc":"Learn about the history of the castle and the city of Osaka through various exhibits and displays at the Castle Museum located within the castle.",
            "actThreeDesc":"The main tower of the castle offers panoramic views of Osaka city. Climb up the stairs to reach the observation deck and enjoy the stunning view.",
            "actFourDesc":"Throughout the year, various cultural events and festivals are held at Osaka Castle, including the cherry blossom festival and traditional Japanese tea ceremonies",
            "foodDrinkImgOneAlt":"Takoyaki in a black bowl",
            "foodDrinkImgTwoAlt":"Umeshu in a wine glass with a purple background",
            "foodDrinkImgThreeAlt":"Kushi-katsu on blue plate",
            "foodDrinkImgFourAlt":"Sake on a black shelf",
            "foodDrinkOneTitle":"Takoyaki",
            "foodDrinkTwoTitle":"Umeshu",
            "foodDrinkThreeTitle":"Kushi-katsu",
            "foodDrinkFourTitle":"Sake",
            "foodDrinkOneDesc":"Eating takoyaki at Osaka Castle is a must-do experience. These delicious octopus balls are a local specialty, and there's no better place to enjoy them than in the castle's beautiful surroundings. The hot and crispy takoyaki paired with the cool breeze and stunning views will make for a memorable experience.",
            "foodDrinkTwoDesc":"If you're looking for a unique drink to try during your visit to Japan, I highly recommend checking out umeshu. Made from Japanese plums, this sweet and tangy liqueur is a must-try for any foodie or drink connoisseur. And where better to enjoy it than at Osaka Castle, with its stunning views and historical ambiance? Sip on a glass of umeshu while taking in the sights and sounds of this iconic landmark, and you'll feel like you're experiencing the true essence of Japanese culture.",
            "foodDrinkThreeDesc":"Looking for a tasty and unique Japanese snack to try during your visit to Osaka Castle? Look no further than kushi-katsu! These deep-fried skewers come in a variety of flavors and are a local specialty. Pair them with a refreshing glass of sake to enhance the experience even further. As you savor the crispy and savory bites, take in the beautiful surroundings of the castle's gardens and architecture for a truly unforgettable moment.",
            "foodDrinkFourDesc":"Try sake at Osaka Castle! This Japanese rice wine is a perfect addition to any meal with its smooth, sweet taste. Enjoy it while taking in the castle's stunning architecture and gardens for a one-of-a-kind experience.",
            "pracInfoImgOneAlt":"View of the outside of the Hotel New Otani Osaka",
            "pracInfoImgTwoAlt":"Map of the train lines to use for going to Osaka Castle",
            "pracInfoImgThreeAlt":"Costs of adults and students to go to Osaka Castle",
            "pracInfoImgThreeAlt":"Operating Hours of Osaka Castle",
            "pracInfoOneTitle":"Nearby Accommodations",
            "pracInfoTwoTitle":"Transportation Available",
            "pracInfoThreeTitle":"Costs",
            "pracInfoFourTitle":"Hours of Operation",
            "pracInfoOneDesc":"For a stay fit for a shogun, check out Hotel New Otani Osaka. Not only does it offer luxurious accommodations with traditional Japanese design, but its location near Osaka Castle means you can practically wake up to the sound of taiko drums. Plus, with on-site dining options ranging from sushi to teppanyaki, you'll have all the fuel you need for a full day of exploring.",
            "pracInfoTwoDesc":"The recommended approach to Osaka Castle is through Otemon Gate at the park's southwestern corner. The closest station is Tanimachi Yonchome Station along the Tanimachi and Chuo subway lines.",
            "pracInfoThreeDesc":"600 yen for adults and free for students and children!",
            "pracInfoFourDesc":"Osaka Castle is typically open from 9:00 AM to 5:00 PM, with last entry at 4:30 PM. However, it is closed on December 28th and 29th. It may also be closed on certain other days for maintenance or special events.",
        },
    };
    // Creates an Itinerary 
    for (const key in itineraryInfo) {
        if (destinationName == key) {
            createItinerary(itineraryInfo[key]);
        }
    }
});



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

    // Redirect to itinerary Preview/Overview Page
    // Removes destination from itinerary list based on user input (click)
    const deleteItineraryBtn = clone.querySelector('.btn.btn-outline-light');
    deleteItineraryBtn.addEventListener('click', () =>{
        deleteItinerary(destinationName);
    });

    // Clone of calendar
    const myCal = clone.querySelector('#calendar');

    // Calendar
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Possible Activities To Do (activities + FoodDrinks Sections)
    const activities = [itineraryInfo.actOneTitle, itineraryInfo.actTwoTitle, itineraryInfo.actThreeTitle, itineraryInfo.actFourTitle, itineraryInfo.foodDrinkOneTitle, itineraryInfo.foodDrinkTwoTitle, itineraryInfo.foodDrinkThreeTitle, itineraryInfo.foodDrinkFourTitle]
    // Corresponding descriptions for each activity
    const descriptions = [itineraryInfo.actOneDesc,itineraryInfo.actTwoDesc,itineraryInfo.actThreeDesc,itineraryInfo.actFourDesc, itineraryInfo.foodDrinkOneDesc, itineraryInfo.foodDrinkTwoDesc,itineraryInfo.foodDrinkThreeDesc,itineraryInfo.foodDrinkFourDesc];
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
    
    // Creates Instance of a calendar
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
        tooltipsEnabled: false,
        displayNav: false,
    });

    // Adding location elements to the Itinerary DOM to be displayed
    const itineraryDestinationContainer = document.querySelector('.myItinerary');
    itineraryDestinationContainer.appendChild(clone);
};


// Saves Current Itinerary Info 
function saveToLocalStorage(){
    const itineraryString = JSON.stringify(savedItinerariesList);
    localStorage.setItem('storedItinerary', itineraryString);    

    // printing the current contents what destination's itineraries have been saved and their information in local storage after saving
    console.log('Items in itineraryList: ' + savedItinerariesList);
    console.log('Items in local storage: ' + localStorage.storedItinerary);
};

// Deletes Destination from savedItinerariesList and local Storage and Redirects user to "My Itineraries"
function deleteItinerary(destinationName){
    // Remove the actual destinationName from savedItinerariesList array
    savedItinerariesList.splice(savedItinerariesList.indexOf(destinationName), 1);        

    // // Store the updated item in local storage
    const destinationString = JSON.stringify(savedItinerariesList);
    localStorage.setItem('storedDestinationItems', destinationString);

    // Redirects user back to my itineraries
    window.location.href = "itinerariesOverview.html";

    // Update Local Storage
    saveToLocalStorage();
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

if (localStorage.getItem('storedItinerary') != null) {
    retrieveFromLocalStorage();
};

if (localStorage.getItem('storedItinerary') == null) {
    let savedItinerariesList = [];
};