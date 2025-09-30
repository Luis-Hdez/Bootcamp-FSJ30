// given a string change x for y in string and return the new string with y
string = "abxbxcx"

for (let i = 0; i < string.length; i++) {
    if (string[i] == "x") {
        string = string.replace(string[i], "y")
    }
}

console.log(string);

// ejercicio 2 
// Given an array of integers, returns a new array with unique elements eliminating duplicates.
arr = [23,4,5,7,4,23,8]

function findUniqueElements(arr){
    const uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
           uniqueArr.push(arr[i]);
        }
        
    }

    return uniqueArr;
}

console.log(findUniqueElements(arr));

// Ejercicio 3
// Reverses the following string.

let input = "Hello World";

function reverseString(string){
    let reverse_string = [];

    for (let i = string.length -1; i >= 0; i--) {
        reverse_string.push(string[i]);
    }

    return reverse_string.join('');
}

console.log(reverseString(input));


