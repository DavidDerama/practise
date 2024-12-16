/* Pizza Night? 
It's the weekend and you and your friends can't agree on 
what to order for dinner, so you put it to a vote. 

Write a function to find the food with the highest number of votes. 

Your function should take in a food object and find the food
with the most votes. It should log the winner, along with 
how many votes it received.  

Example input: {"🐈 cats": 19, "🐕 dogs": 17} 
Example output: The winner is 🐈 cats with 19 votes!
*/ 

const gameNightFood = {
    "🍕 pizza": 3, 
    "🌮 tacos": 10, 
    "🥗 salads": 7,
    "🍝 pasta": 5,
    "🐈 cats": 19, 
    "🐕 dogs": 17
}

function findTheWinner(obj){
    const valuesOfObj = Object.values(obj)
    const getWinner = Math.max(...valuesOfObj)
    for (let food in gameNightFood){
        if(gameNightFood[food] === getWinner){
            const onlyEmoji = food.split(" ")[0]
            return `The winner is ${onlyEmoji} cats with ${getWinner} votes!`
        }
    }
}

console.log(findTheWinner(gameNightFood));