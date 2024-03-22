// //part 1  

// const = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// console.log(CSVdata.split(','))
// let rows = CSVdata.split('\n')
// console.log(rows)


// for ( let i in rows) {
//     let cell = rows[i].split(',')
   
//     console.log(cell)
// }

// part 2

const CSVdata = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// console.log(CSVdata.split(','))
let rows = CSVdata.split('\n')
console.log(rows)
const firstData = []


for ( let i in rows) {
    let cell = rows[i].split(',')
    firstData.push(cell)
    
//     console.log(cell)
}
console.log("first",firstData)



let newData = []


for(let i=1;i<firstData.length;i++){
  let object ={}

  
  
for (let j =0;j<firstData[0].length;j++){
    let key = firstData[0][j].toLowerCase();
    
  let value = firstData[i][j]
  object[key] =  value

}

newData.push(object)
} 

console.log(newData)

//4
newData.pop()
newData.splice(1,0, {id: "48", name: "Barry", occupation: "Runner", age: "25" }) 
newData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(newData)


console.log((Number(newData[0].age)+Number(newData[1].age)+Number(newData[2].age)+Number(newData[3].age)+Number(newData[4].age))/5)

let total =0
for(let i=0;i<newData.length;i++){
  total += Number(newData[i].age)
}
console.log(total/5)


console.log(JSON.stringify(newData))