/* Chef Mario's Recipe Book 
Chef Mario was in the middle of writing his cookbook masterpiece
when he spilled coffee on his keyboard! Now all his recipes have repeat
ingredients.

Help save Chef Mario's cookbook by writing a function that takes in an array 
and returns a new array with all the duplicates removed. 

Example input: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops", "🦄 unicorn", "🍭 lollipops"];
Example output: ["🌈 rainbow", "🦄 unicorn", "🍭 lollipops"];
*/ 

const eggScrambleRecipe = [
            "🥓 bacon",
            "🥓 bacon", 
            "🍳 eggs",
            "🫑 green peppers",
            "🧀 cheese",
            "🌶️ hot sauce",
            "🥓 bacon",
            "🥦 broccoli", 
            "🧀 cheese",
            "🥦 broccoli", 
            "🌶️ hot sauce"
        ]

function removeDupesFromArray(arr){
    // create a new object to keep track of duplicates 
    // use filter to loop thorugh each item in the arr
        // for each item in arr
            // look up the item in the lookup table
            // if the item does NOT exist in the lookup, add it and return true
        // return false
    const trackDupes = {}
    const filterItem = arr.filter(item => {
        if(!trackDupes[item]){
            trackDupes[item] = true
        } else {
            trackDupes[item] = false
        }
    })
    console.log(trackDupes)
}

console.log(removeDupesFromArray(eggScrambleRecipe));