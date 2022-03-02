numArray = [1,2,3]

// mutates array
numArray.push(4)


console.log(numArray);

// spread operator creates a new array
const newArray = [0, ...numArray, 5,6,7,]

console.log(numArray);
console.log(newArray);

// objects
person1 = {name:'Sally', age:30}

//this mutates person
person1.dob = 'june 1'

newPerson = {...person1, hairColor:"brown"}

console.log(person1);
console.log(newPerson);
https://youtu.be/_-ZCXjJX3kc?t=2368