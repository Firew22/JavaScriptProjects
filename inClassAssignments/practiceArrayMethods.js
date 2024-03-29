const characters = [
  {
    name: "luke skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];
//mass greater than 100
let greaterMass = [];
for(i=0;i<characters.length; i++){
  if(characters[i].mass>100){
    greaterMass.push(characters[i]);
  }
}
    

//  console.log(greaterMass);





//find people that hav mass greater than 100

// const greaterThan100 =characters.filter((char)=>{
//   return char.mass>100

// })
// console.log("this is the filtered one",greaterMass)

// //get char with height less than 200
// const heightGreatrThan =characters.filter((height) =>
// {
//   return height.height<200
// })

// console.log('short peps',heightGreatrThan)
// //gett all malle chars
// const maleChar = characters.filter((male,) =>
// {
//   if( male.gender === 'male'){
//     return male;
//   }
// })
// console.log("the male charachers are", maleChar)

//---practice map----
// const names = characters.map((char)=>
// {
//   return char.name;
// })
// console.log("the names are ", names)

// const smallInfo = characters.map((char2)=>
// ({ name:char2.name,
//   height: char2.height,
  

// }))
// console.log(smallInfo)
// const firstNames = characters.map((fname)=>fname.name.split(' ')[0])
// console.log(firstNames)
// const numbers = [1,2,3,4,5];
// const cubedvalue =numbers.map((num)=>num*2)
// const lesThan3 = numbers.filter((les)=>les<3)
// console.log(lesThan3)
// const oddNUm = numbers.filter((num)=>{
//   return num%2===0
// })
// console.log(oddNUm)

// const users = [
//   { name: 'Alice', age: 30 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 35 }
// ];

// const names = users.map((uinfo) =>({
//   name:uinfo.name,
//   age: uinfo.age,

// }))

// console.log(names)
// const ages =users.filter((userAge)=>userAge.age<30)
// console.log(ageslet arr
let array = ["great", "nice","wow","lets get it"]
array.push("good job")
console.log(array)

const myArray = [1, 2, 3, 4, 5];
console.log(myArray);