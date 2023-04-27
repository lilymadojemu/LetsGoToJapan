

// Destination Class to save current destination's information
class Destination {
    constructor(destinationTitle, destinationTagline, destinationSummary, activityImgOne, activityImgOneAlt, activityImgTwo, activityImgTwoAlt, activityImgThree, activityImgThreeAlt, activityTitleOne, activityTitleTwo, activityTitleThree, activityDescriptionOne, activityDescriptionTwo, activityDescriptionThree, japnTextOne, romajiTextOne, engTransOne, japnTextTwo, romajiTextTwo, engTransTwo, japnTextThree, romajiTextThree, engTransThree, japnTextFour, romajiTextFour, engTransFour, japnTextFive, romajiTextFive, engTransFive, seasonOne, seasonTwo, avoidTimesOne, avoidTimesTwo, locationMainImg, locationMainImgAlt) {
        this.type = destinationTitle;
        this.tagline = destinationTagline;
        this.summary = destinationSummary;
        this.activityImgOne = activityImgOne;
        this.activityImgOneAlt = activityImgOneAlt;
        this.activityImgTwo = activityImgTwo;
        this.activityImgTwoAlt = activityImgTwoAlt;
        this.activityImgThree = activityImgThree;
        this.activityImgThreeAlt = activityImgThreeAlt;
        this.activityTitleOne = activityTitleOne;
        this.activityTitleTwo = activityTitleTwo;
        this.activityTitleThree = activityTitleThree;
        this.activityDescriptionOne = activityDescriptionOne;
        this.activityDescriptionTwo = activityDescriptionTwo;
        this.activityDescriptionThree = activityDescriptionThree;
        this.japnTextOne = japnTextOne;
        this.romajiTextOne = romajiTextOne;
        this.engTransOne = engTransOne;
        this.japnTextTwo = japnTextTwo;
        this.romajiTextTwo = romajiTextTwo;
        this.engTransTwo = engTransTwo;
        this.japnTextThree = japnTextThree;
        this.romajiTextThree = romajiTextThree;
        this.engTransThree = engTransThree;
        this.japnTextFour = japnTextFour;
        this.romajiTextFour = romajiTextFour;
        this.engTransFour = engTransFour;
        this.japnTextFive = japnTextFive;
        this.romajiTextFive = romajiTextFive;
        this.engTransFive = engTransFive;
        this.seasonOne = seasonOne;
        this.seasonTwo = seasonTwo;
        this.avoidTimesOne = avoidTimesOne;
        this.avoidTimesTwo = avoidTimesTwo;
        this.locationMainImg = locationMainImg;
        this.locationMainImgAlt = locationMainImgAlt;
    }
};

// Array containing the destination housed on web page (only one at a time)
let destinationList = []

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
    const destinationInfo = {
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
            "japnTextOne":"可愛い",
            "romajiTextOne":"kawaii",
            "engTransOne":"Cute",
            "japnTextTwo":"キャラ",
            "romajiTextTwo":"kyara",
            "engTransTwo":"Character",
            "japnTextThree":"お土産",
            "romajiTextThree":"omiyage",
            "engTransThree":"Souvenirs",
            "japnTextFour":"ガチャ",
            "romajiTextFour":"gachya",
            "engTransFour":"Capsule-toy vending machines",
            "japnTextFive":"美味しい",
            "romajiTextFive":"oishii",
            "engTransFive":"Delicious",
            "seasonOne":"June",
            "seasonTwo":"Early July",
            "avoidTimesOne":"12:00pm - 4:00pm",
            "avoidTimesTwo":"Weekends",
            "locationMainImg": "location-images/Sanrio Puroland/Sanrio Puroland Main Image.jpg",
            "locationMainImgAlt":"Display of various Sanrio Characters",
        },
        "Fushimi Inari Shrine": {
            "destinationTitle": "Fushimi Inari Shrine",
            "destinationTagline":"Unleash your spirit of adventure at Fushimi Inari Shrine - a journey of a thousand torii gates!",
            "destinationSummary": "Discover the mystical allure of Fushimi Inari Shrine - a breathtaking world of vibrant torii gates, hidden shrines, and winding forest trails that will take your breath away. As one of Japan's most revered Shinto shrines, Fushimi Inari offers an unforgettable adventure, full of ancient traditions, awe-inspiring scenery, and unforgettable moments that will stay with you forever.",
            "activityImgOneAlt":"Milkshakes, Cakes, and Curry with faces of Cinnamoroll",
            "activityImgTwoAlt":"Kawaii Kabuki Poster",
            "activityImgThreeAlt":"Headbands depicting various Sanrio characters",
            "activityTitleOne":"Hike through the torii gates",
            "activityTitleTwo":"Attend a Special Event",
            "activityTitleThree":"Explore the Shrine Grounds",
            "activityDescriptionOne":"Hiking through the torii gates at Fushimi Inari Shrine is a must-do adventure. You'll be surrounded by thousands of vibrant vermillion gates that create a tunnel-like effect, making you feel like you've been transported to another world. It's also a great opportunity to escape the city and immerse yourself in nature while enjoying stunning views along the way.",
            "activityDescriptionTwo":"This mesmerizing musical show combines the irresistible charm of Sanrio characters with the time-honored art form of Kabuki. Kabuki is a traditional form of Japanese theater known for its elaborate costumes, stylized movements, and dramatic performances. It has a rich history dating back to the Edo period, and is renowned for its unique blend of music, dance, and drama. In this collaborative show, you'll experience the captivating fusion of Sanrio's KAWAII (cuteness) with the elegance and artistry of Kabuki, creating a truly unforgettable performance. Don't miss the chance to see beloved Sanrio characters take the stage in their finest Kabuki-inspired costumes!",
            "activityDescriptionThree":"At Puroland, you'll be spoiled for choice with the wide array of goodies available! From candy to stationery, clothing, and more, there's something for everyone. You'll find an overwhelming number and variety of products, including items featuring popular Sanrio characters like Hello Kitty, My Melody, and Cinnamoroll. What's more, there are loads of original products that are exclusive to Puroland, so you won't find them anywhere else. Whether you're looking for a cute souvenir or a unique item to commemorate your visit, you're sure to find your favorite items at Puroland!",
            "japnTextOne":"大社",
            "romajiTextOne":"taisha",
            "engTransOne":"Grand Shrine",
            "japnTextTwo":"山",
            "romajiTextTwo":"yama",
            "engTransTwo":"Mountain",
            "japnTextThree":"おみくじ",
            "romajiTextThree":"omikuji",
            "engTransThree":"Fortune",
            "japnTextFour":"鳥居",
            "romajiTextFour":"torii",
            "engTransFour":"Torii Gate",
            "japnTextFive":"狐",
            "romajiTextFive":"kitsune",
            "engTransFive":"Fox",
            "seasonOne":"Mid-January to Mid-March",
            "seasonTwo":"Mid-June to Mid-September",
            "avoidTimesOne":"12:00pm - 4:00pm",
            "avoidTimesTwo":"Weekends & Public Holidays",
            "locationMainImgAlt":"Fushimi Inari Shrine",

        },
        "Osaka Castle": {
            "destinationTitle": "Osaka Castle",
            "destinationTagline":"Discover the grandeur of Japanese history at Osaka Castle.",
            "destinationSummary": "Explore the grandeur of Japanese history at Osaka Castle! This stunning 16th-century monument in Osaka, Japan, is a must-visit destination. With cultural events happening throughout the year and beautiful gardens and parks surrounding the castle, there's never a dull moment at Osaka Castle.",
            "activityImgOneAlt":"People in a boat with Osaka Castle in the background",
            "activityImgTwoAlt":"Osaka Castle with cherry blossoms blooming at the front",
            "activityImgThreeAlt":"Osaka Castle with trees at the bottom",
            "activityTitleOne":"Take a Boat Ride",
            "activityTitleTwo":"Enjoy Cherry Blossom Season",
            "activityTitleThree":"Climb to the Top of the Castle",
            "activityDescriptionOne":"Looking for a unique way to experience Osaka Castle? Hop aboard a boat tour of the moat surrounding the castle! This 20-minute tour offers a one-of-a-kind view of the castle from the water, giving you a fresh perspective on its stunning architecture and history. As you glide through the moat, you'll feel the gentle breeze and hear the sound of the water, creating a serene and peaceful atmosphere. It's a fun and memorable way to see the castle, and one you won't soon forget. So don't miss out on this incredible opportunity - grab your seat on the boat and get ready to set sail!",
            "activityDescriptionTwo":"If you're looking for a magical experience, plan your visit to Osaka Castle during cherry blossom season! From late March to early April, the castle grounds burst into a pink and white wonderland, with blooming cherry trees as far as the eye can see. It's a stunning sight that attracts locals and tourists alike, so be sure to bring your camera and prepare to be amazed. You'll feel like you've stepped into a fairy tale as you stroll through the cherry blossoms and take in the beauty of this enchanting landscape. Don't miss out on this once-in-a-lifetime experience!",
            "activityDescriptionThree":"If you're up for a challenge and want to experience the best views of Osaka city, then climb to the top of Osaka Castle! It's a steep climb, but trust me, the panoramic view from the top is absolutely breathtaking. You'll feel like you're on top of the world as you take in the stunning sights of the city and beyond. So put on your climbing shoes, grab your camera, and get ready for an adventure you won't forget!",
            "japnTextOne":"大坂城",
            "romajiTextOne":"osakajo",
            "engTransOne":"Osaka Castle",
            "japnTextTwo":"観光",
            "romajiTextTwo":"kankou",
            "engTransTwo":"Sightseeing",
            "japnTextThree":"歴史",
            "romajiTextThree":"rekishi",
            "engTransThree":"History",
            "japnTextFour":"桜",
            "romajiTextFour":"sakura",
            "engTransFour":"Cherry Blossoms",
            "japnTextFive":"チケット",
            "romajiTextFive":"Chiketto",
            "engTransFive":"Ticket",
            "seasonOne":" December to February",
            "seasonTwo":"June to August",
            "avoidTimesOne":"12:00pm - 4:00pm",
            "avoidTimesTwo":"Weekends & Public Holidays",
            "locationMainImgAlt":"Osaka Castle behind blooming cherry blossoms",
        },
    };
    // createDestination(destination);
    for (const key in destinationInfo) {
        if (destinationName == key) {
            const destinationElement = createDestination(destinationInfo[key]);
            addNewDestination(destinationElement);
        }
    }
});

// Adding a new destination's Info to Destination Page
function addNewDestination(destinationTitle, destinationTagline, destinationSummary, activityImgOne, activityImgOneAlt, activityImgTwo, activityImgTwoAlt, activityImgThree, activityImgThreeAlt, activityTitleOne, activityTitleTwo, activityTitleThree, activityDescriptionOne, activityDescriptionTwo, activityDescriptionThree, japnTextOne, romajiTextOne, engTransOne, japnTextTwo, romajiTextTwo, engTransTwo, japnTextThree, romajiTextThree, engTransThree, japnTextFour, romajiTextFour, engTransFour, japnTextFive, romajiTextFive, engTransFive, seasonOne, seasonTwo, avoidTimesOne, avoidTimesTwo, locationMainImg, locationMainImgAlt) {
    const destinationInfo = new Destination(destinationTitle, destinationTagline, destinationSummary, activityImgOne, activityImgOneAlt, activityImgTwo, activityImgTwoAlt, activityImgThree, activityImgThreeAlt, activityTitleOne, activityTitleTwo, activityTitleThree, activityDescriptionOne, activityDescriptionTwo, activityDescriptionThree, japnTextOne, romajiTextOne, engTransOne, japnTextTwo, romajiTextTwo, engTransTwo, japnTextThree, romajiTextThree, engTransThree, japnTextFour, romajiTextFour, engTransFour, japnTextFive, romajiTextFive, engTransFive, seasonOne, seasonTwo, avoidTimesOne, avoidTimesTwo, locationMainImg, locationMainImgAlt);
    return destinationInfo; 
}; 

// Updating the DOM
function createDestination(destinationInfo) {
    console.log(destinationInfo);
    // Grabs a reference to the destination template:
    const template = document.querySelector('#destinationTemplate');
    const clone = template.content.cloneNode(true);
    destinationInfo.element = clone.querySelector('.destinationInfo');
    // update Dom Elements

    // Images & Alts
    // Main Image
    const destinationMainImage = clone.querySelector('#locationMainImg');
    destinationMainImage.src = `location-images/${destinationName}/${destinationName} Main Image.jpg`;
    destinationMainImage.alt = destinationInfo.locationMainImgAlt;
    
    // Activity One 
    const destinationActOneImg = clone.querySelector('#activityImgOne');
    destinationActOneImg.src = `location-images/${destinationName}/${destinationName} Activity One.jpg`;
    destinationActOneImg.alt = destinationInfo.activityImgOneAlt;
    // Activity Two
    const destinationActTwoImg = clone.querySelector('#activityImgTwo');
    destinationActTwoImg.src = `location-images/${destinationName}/${destinationName} Activity Two.jpg`;
    destinationActTwoImg.alt = destinationInfo.activityImgTwoAlt;
    // Activity Three
    const destinationActThreeImg = clone.querySelector('#activityImgThree');
    destinationActThreeImg.src = `location-images/${destinationName}/${destinationName} Activity Three.jpg`;
    destinationActThreeImg.alt = destinationInfo.activityImgThreeAlt;

    // Top things
    // Destination Name
    const destinationTopTitle = clone.querySelector('.destinationTitle')
    destinationTopTitle.textContent = 'Welcome to ' + destinationName + '!';

    // Destination Tagline
    const destinationTopTag = clone.querySelector('.destinationTagline');
    destinationTopTag.textContent = destinationInfo.destinationTagline;

    // Destination Summary
    const destinationTopSum  = clone.querySelector('.destinationSummary');
    destinationTopSum.textContent = destinationInfo.destinationSummary;

    // Activity Descriptions
    // Activity 1

    const actOneTitle = clone.querySelector('.activityTitleOne');
    actOneTitle.textContent = destinationInfo.activityTitleOne;
    const actOneDescription = clone.querySelector('.activityDescriptionOne');
    actOneDescription.textContent = destinationInfo.activityDescriptionOne;

    // Activity 2
    const actTwoTitle = clone.querySelector('.activityTitleTwo');
    actTwoTitle.textContent = destinationInfo.activityTitleTwo;
    const actTwoDescription = clone.querySelector('.activityDescriptionTwo');
    actTwoDescription.textContent = destinationInfo.activityDescriptionTwo;

    // Activity 3
    const actThreeTitle = clone.querySelector('.activityTitleThree');
    actThreeTitle.textContent = destinationInfo.activityTitleThree;
    const actThreeDescription = clone.querySelector('.activityDescriptionThree');
    actThreeDescription.textContent = destinationInfo.activityDescriptionThree;

    // Destination Tips

    // Vocab
    // Row 1
    const destinationJapnTextOne = clone.querySelector('.japnTextOne');
    destinationJapnTextOne.textContent = destinationInfo.japnTextOne;
    const destinationRomajiTextOne = clone.querySelector('.romajiTextOne');
    destinationRomajiTextOne.textContent = '(' + destinationInfo.romajiTextOne + ')';
    const destinationEngTextOne = clone.querySelector('.engTransOne');
    destinationEngTextOne.textContent = destinationInfo.engTransOne;
    // Row 2
    const destinationJapnTextTwo = clone.querySelector('.japnTextTwo');
    destinationJapnTextTwo.textContent = destinationInfo.japnTextTwo;
    const destinationRomajiTextTwo= clone.querySelector('.romajiTextTwo');
    destinationRomajiTextTwo.textContent = '(' + destinationInfo.romajiTextTwo + ')';
    const destinationEngTextTwo = clone.querySelector('.engTransTwo');
    destinationEngTextTwo.textContent = destinationInfo.engTransTwo;
    // Row 3
    const destinationJapnTextThree = clone.querySelector('.japnTextThree');
    destinationJapnTextThree.textContent = destinationInfo.japnTextThree;
    const destinationRomajiTextThree= clone.querySelector('.romajiTextThree');
    destinationRomajiTextThree.textContent = '(' + destinationInfo.romajiTextThree + ')';
    const destinationEngTextThree = clone.querySelector('.engTransThree');
    destinationEngTextThree.textContent = destinationInfo.engTransThree;
    // Row 4
    const destinationJapnTextFour = clone.querySelector('.japnTextFour');
    destinationJapnTextFour.textContent = destinationInfo.japnTextFour;
    const destinationRomajiTextFour = clone.querySelector('.romajiTextFour');
    destinationRomajiTextFour.textContent = '(' + destinationInfo.romajiTextFour +')';
    const destinationEngTextFour = clone.querySelector('.engTransFour');
    destinationEngTextFour.textContent = destinationInfo.engTransFour;
    // Row 5
    const destinationJapnTextFive = clone.querySelector('.japnTextFive');
    destinationJapnTextFive.textContent = destinationInfo.japnTextFive;
    const destinationRomajiTextFive = clone.querySelector('.romajiTextFive');
    destinationRomajiTextFive.textContent = '(' + destinationInfo.romajiTextFive + ')';
    const destinationEngTextFive = clone.querySelector('.engTransFive');
    destinationEngTextFive.textContent = destinationInfo.engTransFive;

    // Best Visit Times

    // Off-Seasons
    const offSeasonOne = clone.querySelector('.seasonOne');
    offSeasonOne.textContent = destinationInfo.seasonOne;
    const offSeasonTwo = clone.querySelector('.seasonTwo');
    offSeasonTwo.textContent = destinationInfo.seasonTwo;
    // Avoid Times
    const avoidedTimeOne = clone.querySelector('.avoidTimesOne');
    avoidedTimeOne.textContent = destinationInfo.avoidTimeOne;
    const avoidedTimeTwo = clone.querySelector('.avoidTimesTwo');
    avoidedTimeTwo.textContent = destinationInfo.avoidTimeTwo;

    // Removes destination from itinerary list based on user input (click)
    const removeDestinationBtn = clone.querySelector('.btn.btn-outline-danger');
    removeDestinationBtn.addEventListener('click', () =>{
        deleteDestination(destinationName);
    });

    // Removes destination from itinerary list based on user input (click)
    const saveDestinationBtn = clone.querySelector('.btn.btn-outline-success');
    saveDestinationBtn.addEventListener('click', () =>{
        saveDestination(destinationName);
    });

    // Adding destination elements to the DOM to be displayed
    const destinationContainer = document.querySelector('.destinationItems');
    destinationContainer.appendChild(clone);

};

// Saves Current Destination from destinationList
function saveDestination(destinationName){
    // Add actual destinationName to destinationList array
    destinationList.push(destinationName);

    console.log(destinationList);

    // Update Local Storage
    saveToLocalStorage();
};

// Deletes Destination from destinationList
function deleteDestination(destinationName){
    // Remove the actual destinationName from destinationList array
    destinationList.splice(destinationList.indexOf(destinationName), 1)

    // Update Local Storage
    saveToLocalStorage();
};

// const saveToItinerary = document.querySelector('.btn.btn-outline-success');
// // saveToItinerary.onclick = this.createItinerary;

// // Save current destination information and add current destination to itinerary list
// function createItinerary() {
//     const itineraryDestination = new Destination(destinationTitle, destinationTagline, destinationSummary, activityImgOne, activityImgOneAlt, activityImgTwo, activityImgTwoAlt, activityImgThree, activityImgThreeAlt, activityTitleOne, activityTitleTwo, activityTitleThree, activityDescriptionOne, activityDescriptionTwo, activityDescriptionThree, japnTextOne, romajiTextOne, engTransOne, japnTextTwo, romajiTextTwo, engTransTwo, japnTextThree, romajiTextThree, engTransThree, japnTextFour, romajiTextFour, engTransFour, japnTextFive, romajiTextFive, engTransFive, seasonOne, seasonTwo, avoidTimesOne, avoidTimesTwo, locationMainImg, locationMainImgAlt);
//     destinationList.push(itineraryDestination);

//     saveToLocalStorage();

//     return itineraryDestination;
// };

// Save current destination info to local storage
function saveToLocalStorage(){
    const destinationString = JSON.stringify(destinationList);
    console.log('saved' + destinationList)
    localStorage.setItem('storedDestinationItems', destinationString);    
    // printing the current contents of the destinations in local storage after saving
    console.log('saved string'+destinationString);
};

// Retrieves destinations from local storage
function retrieveFromLocalStorage(){
    const destinationString = localStorage.getItem('storedDestinationItems');
    const storedDestination = JSON.parse(destinationString);
    if (storedDestination) {
        destinationList = storedDestination;
        console.log('local storage'+destinationList);
    }
}

if (localStorage.getItem('storedDestinationItems') != null) {
    retrieveFromLocalStorage();
}
  
if (localStorage.getItem('storedDestinationItems') != null) {
    const destinationList = [];
}
