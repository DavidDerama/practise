/*
   Oh no, our emoji flower bed is infested with mammals, trees and leaves!
   Without changing the API url, write a function to transform your 
   data before it's displayed. The function should eliminate
   everything but bugs and flowers. Use your function in the API call.  
   
   Hint: Be sure to console the data to see what properties can help you do this!
*/ 

const api = 'https://apis.scrimba.com/emojihub/api/all/category/animals-and-nature';
const flowerBed = document.querySelector('.emoji-flower-bed');

function clearTheGarden(arr){
    const clearedArr = arr.filter(emoji => {
        if(emoji.group.includes("bug") || emoji.group.includes("plant")){
            return emoji
        } 
    })
    return clearedArr
}


fetch(api) 
    .then(response => response.json())
    .then((data) => {
        const noAnimalsArr = clearTheGarden(data)
        noAnimalsArr.forEach(emoji => {
            flowerBed.innerHTML += `<li>${emoji.htmlCode}</li>`;
        });    
    })
    .catch(err => console.log(err));



