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
    const noDupes = []
    const allCategories = data.map(item => {
        return item.tags
    }).flat()
    
    allCategories.forEach(item => {
        if(!noDupes.includes(item)){
            noDupes.push(item)
        }
    })
    return noDupes
    
}

console.log(getUniqueTags(mediaData));

