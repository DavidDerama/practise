import mediaData from "./data.js";

/* Find All Unique Tags 

As a software dev at ScrimFlix, you're working on a feature 
to let users browse TV shows by tag. The first step is to collect all 
the tags from our data into a new array. Then we'll need 
to filter out the duplicate tags. 

Write a function that takes in the media data and returns
a flat array of unique tags.

Expected output: 
["supernatural", "horror", "drama",
"fantasy", "reality", "home improvement", "comedy", "sci-fi", "adventure"]

*/ 

function getUniqueTags(data){
    // use map to loop through the data and get a new array of tags
    // flatten the tags array with .flat()
    const tags = data.map(podcast => podcast.tags).flat();
    // create a new array uniqueTags to hold the unique values
    const uniqueTags = [];
    // loop through the tags array

    tags.forEach(tag => {
         // is the element already in the uniqueTags arr? 
         if(!uniqueTags.includes(tag)){
             uniqueTags.push(tag)
         }
    })
       
    return uniqueTags;
}

console.log(getUniqueTags(mediaData));

