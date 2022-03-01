// foreach doesn't return anything
numArray = [1,2,3,4]

numArray.forEach((num) => {
  console.log(num)
})


numArr = [1,2,3,]

// Map goes through each item in an anrray and performs a function and 
// pushes the return of the function into the new array which it returns
// after it has gone through every item 
// return a new array and doesn't changes the org array. (filter, reduce, map and many other dont as well )

doubledNumArr = numArr.map((num) => {
  return num *2;
})

console.log(doubledNumArr)
console.log(numArr)

// Filter goes through each item in an anrray and performs a function 
// This needs to return true or false, if true we keep the item, if false
// we don't keep the item

numArray1 = [1,2,3,4,5,6,7,8,9];

// return even numbers
evensArr = numArray1.filter((num) => {
  return num % 2 === 0
})

console.log(evensArr)

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10