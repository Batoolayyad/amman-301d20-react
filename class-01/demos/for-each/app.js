// Array.forEach is a method on an array that processes every element in the array with a callback
// The callback is always given the current element's value and index in the array as args

let people = ['Razan','Sherry','Abdulrahman','Aisha'];
// for (let i=0;i<people.length;i++) {
//   console.log(people[i]);
// }

// people.forEach(function(i,person){
//   console.log(i);
//   console.log(person);
// })

// people.forEach((item,index)=>{
//   console.log(item);
//   console.log(index);
// })


// function displayName(item,index) {
//   console.log(item);
//   // console.log(item[index]);
//   // console.log(people[index]);
// }

// let displayName = (item,index) => {
//   console.log(item);
// }
people.forEach(displayName);


