
//  JSON Data Parsing Nested in JavaScript
let employes = `{
  "list": {
      "name": "Harry Potter", "age": 25, "ocupatio": "design", "gender": "male",
      "name": "Ana Maria", "age": 45, "ocupatio": "developer", "gender": "female",
      "name": "Phil Pioter", "age": 19, "ocupatio": "tester", "gender": "male",
      "name": "Harry Potter", "age": 18, "ocupatio": "tester", "gender": "male",
      "name": "April Jackson", "age": 37, "ocupatio": "tester", "gender": "female",
      "name": "Harry Potter", "age": 29, "ocupatio": "tester", "gender": "male",
      "name": "Brad Poter", "age": 17, "ocupatio": "tester", "gender": "male",
      "name": "Betty Paula", "age": 19, "ocupatio": "account", "gender": "female"
    
  }

  
}`

;

let empList = JSON.parse(employes)
console.log('------------JSON Data Parsing Nested in JavaScript--------------------')
console.log(staffList)






console.log('------------JavaScript Parsing Nested i Json--------------------')

// JavaScript Parsing Nested i Json
let staff = [
 {"name": "Harry Potter","ocupation": "tester","age": 19,
  "gender": "male"},
  {"name": "Ane Jane","ocupation": "design","age": 25,
  "gender": "female"},
  {"name": "Ben Harry","ocupation": "web developer","age": 38,
  "gender": "male"},
  {"name": "Emma Ash","ocupation": "tester","age": 30,
  "gender": "female"},
  {"name": "Peter Thomas","ocupation": "manage","age": 48,
  "gender": "male"},
  {"name": "Andy Harry","ocupation": "developer","age": 33,
  "gender": "male"},
  {"name": "Jennifer Smith","ocupation": "account","age": 50,
  "gender": "female"},
  {"name": "John Jackson","ocupation": "manage","age": 40,
  "gender": "male"},
  {"name": "Ryan T","ocupation": "developer","age": 17,
  "gender": "male"},
  {"name": "Jenn Beck","ocupation": "tester","age": 52,
  "gender": "female"},

];







let staffList = JSON.stringify(staff)
console.log(staffList)