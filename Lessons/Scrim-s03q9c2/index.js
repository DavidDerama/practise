/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

function countChars(str){
    const charObj = {}
    const strArr = str.toLowerCase().replaceAll(" ", "").split("")
    const strWithNoDupesArr = removeDuplicates(strArr)
    
    strWithNoDupesArr.forEach(item => {
        const filterChar = strArr.filter(char => char === item)
        const countItem = parseInt(filterChar.length)
        charObj[`${item}`] = countItem
    })
    return charObj
}

function removeDuplicates(arr){
    let strArrWithNoDuplicates = ""
    
    arr.forEach((item) => {
        if(!strArrWithNoDuplicates.includes(item)){
            strArrWithNoDuplicates += item
        }
    })
    
    return strArrWithNoDuplicates.split("")
}

console.log(countChars("Peggy Porth"));
console.log(countChars("David Derama"));