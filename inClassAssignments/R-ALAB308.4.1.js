const csvFile ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let newData = [];
newData =csvFile.split("\n");

const firstData = [];
for( i =0;i<newData.length;i++){
    let cell =newData[i].split(',');
    firstData.push(cell);
}
// console.log(firstData);
//2

let newData1 = []


for(let i=1;i<firstData.length;i++){
  let object ={}

  // object.id = firstData[i][0]
  // object.name = firstData[i][1]
  // object.occupation = firstData[i][2]
  // object.age = firstData[i][3]
  
for (let j =0;j<firstData[0].length;j++){
    let key = firstData[0][j].toLowerCase();
    
  let value = firstData[i][j]
  object[key] =  value

}

newData.push(object)
} 

console.log(newData)