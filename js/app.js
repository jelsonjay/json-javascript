
//  JSON Data Parsing Nested in JavaScript
let employes = `{
  "list": {
      "name": "Harry Potter", "age": 25, "occupatio": "design", "gender": "male",
      "name": "Ana Maria", "age": 45, "occupatio": "developer", "gender": "female",
      "name": "Phil Pioter", "age": 19, "occupatio": "tester", "gender": "male",
      "name": "Harry Potter", "age": 18, "occupatio": "tester", "gender": "male",
      "name": "April Jackson", "age": 37, "occupatio": "tester", "gender": "female",
      "name": "Harry Potter", "age": 29, "occupatio": "tester", "gender": "male",
      "name": "Brad Poter", "age": 17, "occupatio": "fullstack developer", "gender": "male",
      "name": "Betty Paula", "age": 19, "occupation": "account", "gender": "female"
    
  }

  
}`
;

let empList = JSON.parse(employes)
console.log('------------JSON Data Parsing Nested in JavaScript--------------------')
console.log(empList)






console.log('------------JavaScript Parsing Nested i Json--------------------')

// JavaScript Parsing Nested i Json
let staff = [
 {"name": "Harry Potter","occupation": "tester","age": 19,
  "gender": "male"},
  {"name": "Ane Jane","occupation": "design","age": 25,
  "gender": "female"},
  {"name": "Ben Harry","occupation": "web developer","age": 38,
  "gender": "male"},
  {"name": "Emma Ash","occupation": "tester","age": 30,
  "gender": "female"},
  {"name": "Peter Thomas","occupation": "back-end","age": 48,
  "gender": "male"},
  {"name": "Andy Harry","occupation": "front-end","age": 33,
  "gender": "male"},
  {"name": "Jennifer Smith","occupation": "fullstack develope","age": 50,
  "gender": "female"},
  {"name": "John Jackson","occupation": "back-end","age": 40,
  "gender": "male"},
  {"name": "Ryan T","occupation": "fullstack develope","age": 17,
  "gender": "male"},
  {"name": "Jenn Beck","occupation": "tester","age": 52,
  "gender": "female"},

];







let staffList = JSON.stringify(staff)
console.log(staffList)