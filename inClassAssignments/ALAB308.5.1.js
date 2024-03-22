
const numbers = [1,2,3,4,5]
const strings = ['what', 'a', 'awsome', 'day', 'have a great day'];
//Take an array of numbers and return the sum.
function sumArray(numbers){
    let sum = 0;
    for(let i =0; i <numbers.length; i++){
        sum +=numbers[i];
    }
    return sum;
}

console.log(sumArray(numbers)); 
//Take an array of numbers and return the average.

function averageArray(numbers){
    if (numbers.length ===0)
    return 0;
else{
    return sumArray(numbers)/numbers.length;
}
}
console.log(averageArray(numbers)); 
//Take an array of strings and return the longest string.

function longestString(strings){
    if(strings.leng === 0)return null;
    let longest = strings[0];
    for(let i = 1; i<strings.length; i++){
        if(strings[i].length>longest.length){
            longest = strings[i];
        }
    }
    return longest
}
console.log(longestString(strings)); 
//Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
function stringsLongerThan(strings, minLength){
    let results = [];
    for (let i =0; i<strings.length; i++){
        if (strings[i].lenth > minLength){
            results.push(strings[i]);
        }
    }
    return results
}
console.log(stringsLongerThan(strings, 2));
//Take an array of strings, and a number and return an array of the strings that are longer than the given number.
function printNumbers(n) {
    if (n > 0) {
        printNumbers(n - 1); // Recursively call printNumbers with n - 1
        console.log(n); // Print the current value of n
    }
}


printNumbers(5);

// part2
const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];
//Sort the array by age.
data.sort(
    function(a, b) {
       return a.age - b.age
    }
);
console.log(data);

// Filter the array to remove entries with an age greater than 50.
const filteredData = [];
for (let i = 0; i < data.length; i++) {
  if (Number(data[i].age) <= 50) {
    filteredData.push(data[i]);
  }
}
console.log
// Map the array to change the “occupation” key to “job” and increment every age by 1.
// Use the reduce method to calculate the sum of the ages.
// Then use the result to calculate the average age.
// 