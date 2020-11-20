
//  JSON Data Parsing Nested in JavaScript
let json = `{
  "book": {
      "name": "Harry Potter and the Goblet of Fire",
      "author": "J. K. Rowling",
      "year": 2000,
      "characters": ["Harry Potter", "Hermione Granger", "Ron Weasley"],
      "genre": "Fantasy Fiction",
      "price": 

      {"paperback": "$10.40", "hardcover": "$20.32", "kindle": "$4.11"}
  }
}`;

let compList = JSON.parse(json)
console.log('------------JSON Data Parsing Nested in JavaScript--------------------')
console.log(compList)






console.log('------------JavaScript Parsing Nested i Json--------------------')

// JavaScript Parsing Nested i Json
let staff = [
 {"name": "Harry Potter","ocupation": "tester","age": 19,
  "gender": "male"},
  {"name": "Ane Jane","ocupation": "design","age": 25,
  "gender": "female"},
  {"name": "Harry Potter","ocupation": "tester","age": 38,
  "gender": "male"},
  {"name": "Harry Potter","ocupation": "tester","age": 30,
  "gender": "male"},
  {"name": "Harry Potter","ocupation": "tester","age": 48,
  "gender": "male"},
  {"name": "Harry Potter","ocupation": "tester","age": 33,
  "gender": "male"},
  {"name": "Jennifer Smith","ocupation": "account","age": 50,
  "gender": "female"}

];







let staffList = JSON.stringify(staff)
console.log(staffList)