// Arrow functions (new with es6)

//when using {}, you need a return statement
const add = (n1, n2) => {
  return n1 + n2;
}

// if we don't {}, then its implicitly returned
const add1 = (n1, n2) => n1 + n2


//es5 declaring

function add3(n1,n2) {
  return n1 + n2
}

console.log(add(2,3))
console.log(add1(2,3))
console.log(add3(2,3))

// https://youtu.be/_-ZCXjJX3kc?t=590

// console.log([1,2,3,4].filter((num) => num > 2))

// [1,2,3,4].filter((num) => {
//   return num > 2
// })

// default value
const times = (num1, num2=2) =>{
  return num1 * num2
}

console.log(times(4,5));
console.log(times(4));

let person = {name: 'Tony', age:33}

const intro1 = (person)=> {
  // object destructing
  const {name, age} = person
  console.log(`${name} is ${age} years old`);
}

// an other way to destructing an obj
const intro2 = ({name, age})=> {
  console.log(`${name} is ${age} years old`);
}

intro1(person)
intro2(person)


