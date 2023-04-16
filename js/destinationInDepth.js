// Destination Data
const destinations = {
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
        "locationMainImg": "location-images/Sanrio/sanrio_characters_image.jpeg",
        "locationMainImgAlt":"Display of various Sanrio Characters",
    },

    "Fushimi Inari Shrine": {
        "destinationTitle": "Fushimi Inari Shrine",
        "destinationTagline":"",
        "destinationSummary": "",
        "activityImgOne": "",
        "activityImgTwo": "",
        "activityImgThree": "",
        "activityDescriptionOne":"",
        "activityDescriptionTwo":"",
        "activityDescriptionThree":"",
        "locationMainImg": "location-images/pexels-pixabay-161401.jpg",

    },

    "Osaka Castle": {
        "destinationTitle": "Osaka Castle",
        "destinationTagline":"",
        "destinationSummary": "",
        "activityImgOne": "",
        "activityImgTwo": "",
        "activityImgThree": "",
        "activityDescriptionOne":"",
        "activityDescriptionTwo":"",
        "activityDescriptionThree":"",
        "locationMainImg": "location-images/pexels-satoshi-hirayama-4058530.jpg",
    }
   
};

// Gather info from URL
const queryString = window.location.search;
console.log(queryString);

// Creating a new query string with created url
const params = new URLSearchParams(queryString);
console.log(params);

// Gets the current destination and stores it in a variable
const destinationName = params.get('destination');
console.log(rollType);

// Update Destination Title based on chosen location
const titleElement = document.querySelector('.destinationTitle');

// Change text of title element based on chosen location
titleElement.innerText = 'Welcome to '+ destinationName + ' !';

// Update Main Image & Alt Text based on selected location
const destinationMainImg = document.querySelector('.locationMainImg');
destinationMainImg.src = 'location_images/' + destinationName + '/' + destinationName + ' Main Image'+'.jpg';
console.log(destinationMainImg.src);
destinationMainImg.alt = destinations[destinationName]["locationMainImgAlt"];

// Update Activity Images & Alt Text based on selected location

// Activity One
const actImgOne = document.querySelector('.activityImgOne');
actImgOne.src = 'location_images/' + destinationName +'/'+ destinationName + ' Activity One'+'.jpg';
console.log(actImgOne.src);
actImgOne.alt = destinations[destinationName]["activityImgOneAlt"];

// Activity Two
const actImgTwo = document.querySelector('.activityImgTwo');
actImgTwo.src = 'location_images/' + destinationName +'/'+ destinationName +' Activity Two'+ '.jpg';
console.log(actImgTwo.src);
actImgTwo.alt = destinations[destinationName]["activityImgTwoAlt"];

// Activity Three
const actImgThree = document.querySelector('.activityImgThree');
actImgThree.src = 'location_images/' + destinationName + '/'+destinationName +' Activity Three'+ '.jpg';
console.log(actImgThree.src);
actImgThree.alt = destinations[destinationName]["activityImgThreeAlt"];

// May need more information
class Destination {
    constructor(destinationName, destinationSummary) {
        this.type = destinationName;
        this.destinationSummary = destinationSummary
    }
};
// Updating the DOM

function createDestination(destinationInfo) {
    // Grabs a reference to the destination template:
    const template = document.querySelector('#destinationTemplate');
    const clone = template.content.cloneNode(true);
    destinationInfo.element = clone.querySelector('.destinationInfo');

    // update Dom Elements

    // Images
    // Main Image
    const destinationMainImage = clone.querySelector('.locationMainImg');
    destinationMainImage.src = `location_images/${destinationName.type}/${destinationName} Main Image.jpg`;
    // Activity One 
    const destinationActOneImg = clone.querySelector('.locationMainImg');
    destinationActOneImg.src = `location_images/${destinationName.type}/${destinationName} Activity One.jpg`;
    // Activity Two
    const destinationActTwoImg = clone.querySelector('.locationMainImg');
    destinationActTwoImg .src = `location_images/${destinationName.type}/${destinationName} Activity Two.jpg`;
    // Activity Three
    const destinationActThreeImg = clone.querySelector('.locationMainImg');
    destinationActThreeImg.src = `location_images/${destinationName.type}/${destinationName} Activity Three.jpg`;

    // Top things
    // Destination Name
    const destinationTopTitle = clone.querySelector('.destinationTitle')
    destinationTopTitle.textContent = destinationInfo.type;
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
    destinationRomajiTextOne.textContent = destinationInfo.romajiTextOne;
    const destinationEngTextOne = clone.querySelector('.engTransOne');
    destinationEngTextOne.textContent = destinationInfo.engTransOne;
    // Row 2
    const destinationJapnTextTwo = clone.querySelector('.japnTextTwo');
    destinationJapnTextTwo.textContent = destinationInfo.japnTextTwo;
    const destinationRomajiTextTwo= clone.querySelector('.romajiTextTwo');
    destinationRomajiTextTwo.textContent = destinationInfo.romajiTextTwo;
    const destinationEngTextTwo = clone.querySelector('.engTransTwo');
    destinationEngTextTwo.textContent = destinationInfo.engTransTwo;
    // Row 3
    const destinationJapnTextThree = clone.querySelector('.japnTextThree');
    destinationJapnTextThree.textContent = destinationInfo.japnTextThree;
    const destinationRomajiTextThree= clone.querySelector('.romajiTextThree');
    destinationRomajiTextThree.textContent = destinationInfo.romajiTextThree;
    const destinationEngTextThree = clone.querySelector('.engTransThree');
    destinationEngTextThree.textContent = destinationInfo.engTransThree;
    // Row 4
    const destinationJapnTextFour = clone.querySelector('.japnTextFour');
    destinationJapnTextFour.textContent = destinationInfo.japnTextFour;
    const destinationRomajiTextFour = clone.querySelector('.romajiTextFour');
    destinationRomajiTextFour.textContent = destinationInfo.romajiTextFour;
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

    // 



    const cinnaRollType = clone.querySelector('.cartRollType');
    cinnaRollType.textContent = cartItem.type + ' Cinnamon Roll';

    const cinnaRollGlazing = clone.querySelector('.cartItemGlazing');
    cinnaRollGlazing.textContent = 'Glazing: ' + cartItem.glazing; 
    
    const cinnaRollPackSize =  clone.querySelector('.cartItemPackSize');
    cinnaRollPackSize.textContent = 'Pack Size: ' + cartItem.size;    

    const cinnaRollFinalPrice = clone.querySelector('.cartItemPrice');
    cinnaRollFinalPrice.textContent = '$' + cartItem.basePrice;  

}

// Saving Destination to Itinerary
const saveToItinerary = document.querySelector('.saveDestination');
saveToItinerary.onclick = this.createItinerary




