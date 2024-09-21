const gameScores = [14, 21, 33, 42, 59]
const favoriteThings = ["raindrops on roses", "whiskers on kittens", "bright copper kettles", "warm woolen mittens"];
const voters = [{ name: "Alice", age: 42 }, { name: "Bob", age: 77 }]

/**
 * Challenge: figure out how to explicitly type the return value
 * of the function!
 */

function getLastItem<Type>(array: Type[]): Type | undfined {
    return array[array.length - 1]
}

console.log(getLastItem(gameScores))
console.log(getLastItem(favoriteThings))
console.log(getLastItem(voters))