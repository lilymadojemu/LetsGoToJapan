
// function updateElement() {
//     console.log('Running the updateElement function!')
//     const bucketTitleElement = document.querySelector('.bucketListEditTitle');
//     const bucketSectionTitleElement = document.querySelector('.sectionTitle');
//     const bucketBodyElement = document.querySelector('.bucketBody');

    

// }


// // Bucket Object

// const bucket = {
//     bucketTitle: '',
//     bucketSectionTitle:'',
//     bucketBody: '',
//     bucketImageURL: '',
// }


// // Grab User Input
// function saveBucket() {
//     const editorTitleElement = document.querySelector('.bucketListEditTitle');
//     const editorSectionTitleElement = document.querySelector('.sectionTitle');
//     const editorBodyElement = document.querySelector('.bucketBody');

//     console.log(editorTitleElement.value)
//     console.log(editorSectionTitleElement.value)
//     console.log(editorBodyElement.value)

//     // Will need to modify values of basic bucket

//     updateElement();

// }

// // Saving a user's bucket entry
// const bucketCreate = document.querySelector('#saveBucket');
// bucketCreate.onclick = saveBucket


// When editing an exisiting bucket, want info from there to come again
// Choice: have more than one bucket per location or only one bucket for a location?
// Answer: Only one bucket per location to help with scoping
// Get back to buckets per location
// Check if
if (localStorage.getItem('storedBucketLists') != null) {
    // Should check 
    retrieveFromLocalStorage();
}
  
if (localStorage.getItem('storedBuckLists') == null) {
    // IDK if this will be an array or not
    const bucketList = [];
}
