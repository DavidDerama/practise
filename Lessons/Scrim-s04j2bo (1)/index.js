/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/ 

function isAnagram(str1, str2){
    const splitStr1 = str1.split("").sort().join("")
    const splitStr2 = str2.split("").sort().join("")
    
    if(splitStr1 == splitStr2 && splitStr1.length === splitStr2.length){
        return true
    } else {
        return false
    }
}

console.log(isAnagram("allergy", "gallery"));
console.log(isAnagram("treasure", "measure"));



