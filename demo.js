// CRUD REACT RULES can't mutate data
// functional programming, a pure function

const sally = {id: 1, name:'Sally', age:21, city:'SLC'}
const john = {id: 2, name:'John', age:51, city:'SLC'}
const bob = {id: 3, name:'Bob', age:31, city:'PDX'}
const bill = {id: 4, name:'Bill', age:18, city:'PDX'}
const sarah = {id: 5, name:'Sarah', age:38, city:'LAX'}

const users = [sally, john, bob, bill, sarah]

// CRUD actions on user array

// create - write a function that takes a user object and 
// returns a new user array with add us
const addUser = (user) => {
  return [...users, user]
}

// testing create/add
let newUser = addUser({id: 6, name:'Jane', age:34, city:'SLC'})

console.log(users)
console.log(newUser)

// READ - let's take our users and return an array of html as ul
const renderUsers = (users) => {
  return users.map(user => {
    return `<li>${user.name}<li>`
  })
}

let userHtml = renderUsers(users)

// this works the same way as the above. we are just using users as a golbal variable
// const renderUsers = () => {
//   return users.map(user => {
//     return `<li>${user.name}<li>`
//   })
// }

// let userHtml = renderUsers()

console.log('userHtml', userHtml)

// UPDATE - 
// write a function that takes an id of the user to update with new name
const updateName = (id, newName) => {
  return users.map(user => {
    // if id's don't matcht don't change the user
    if (user.id !== id) {
      return user
    } else {
      // here we will spread over the user and update the name
      return {...user, name: newName}
    }
  })
}

let updatesUsers = updateName(1, "Andre")
console.log(users)
console.log(updatesUsers)


// DELETE
// write a function that takes and return a new array with the user deleted
const deleteUser = (id)=>{
  return users.filter((user)=> {
    return user.id !== id
  })
}

const removedUser = deleteUser(1)

console.log(users)
console.log(removedUser)

// JSON
// JSON.stringify({id: 5, name:'Sarah', age:38, city:'LAX'}) - make a string format out of an object
// JSON.parse('{id: 5, name:'Sarah', age:38, city:'LAX'}') - make an object our of a string

//find returns the first match
const user = users.find((user)=> {
  return user.city === "SLC"
})

console.log(user)


const slcUser = users.filter((user)=> {
  return user.city === "SLC"
})

console.log(slcUser)


// find the sum of all ages within user

// forEach
let sum = 0 
users.forEach(user => {
  sum += user.age
});

console.log(sum)

// reduce - goes through each thing and what you return is the value 
// of acum in the next call
// return the final acum
const ageTotal = users.reduce((acum, user)=>{
  return acum += user.age
},0)

console.log(ageTotal)

// remove user with id 1 using reduce
// return a new array
const sum1 = users.reduce((acum, user)=>{
  if (user.id === 1) {
    return acum
  } else {
    return [...acum, user]
  }
},[])

console.log(sum1)

let chatString = "hwlloehowareyouwastasdsfghl"

charArray = chatString.split('')

wordCount = charArray.reduce((acum, char)=>{
  if (char in acum){
    acum[char]++
  } else {
    acum[char] = 1
  }
  return acum
},{})

console.log(wordCount)
