    for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(`For number ${i}: Fizz`);
  }
  if (i % 5 === 0) {
    console.log(`For number ${i}: Buzz`);
  }
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`For number ${i} Fizz Buzz`);
  }
  if (i % 3 != 0 && i % 5 != 0) {
    console.log(`For number ${i} Not divisible by 3 or 5 `);
  }
}

let n = 55; // Starting number
while (true) {
    let isPrime = true;

    // Check if n is divisible by any number from 2 to n/2
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }

    // If n is prime, log it and exit the loop
    if (isPrime && n > 1) {
        console.log(n);
        break;
    }

    n++; // Increment to the next number
}


/Part 3
// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.

let cell = '';
let row = '';
let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
for (const char of csvData){
    if (char !== ',' && char !== '\n'){
        cell += char;
    } 

    if(char ===','){
        row+=cell;
        cell = ""; //Clears the cell
    }

    if(char === `\n`){
        row += cell;
        console.log(row);
        cell = ""; //Clears the cell
        row = ""; //Clears the row
    }

}
// Prints the last row
if (cell !== '') {
    row += `${cell}`;
    console.log(row);
  }
