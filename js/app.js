
//  JSON Data Parsing Nested in JavaScript
let book = `{
  "list": {
      "name": "Harry Potter", "age": 25, "ocupatio": "developer",
      "name": "Harry Potter", "age": 25, "ocupatio": "developer",
      "name": "Harry Potter", "age": 25, "ocupatio": "developer",
      "characters": ["Harry Potter", "Hermione Granger", "Ron Weasley"],
      "genre": "Fantasy Fiction",
      "name": "Fantasy Fiction",
      "price": {"paperback": "£40.40", "hardcover": "£30.32", "kindle": "£5.11"}
  }

  
}`

;

let bookList = JSON.parse(book)
console.log('------------JSON Data Parsing Nested in JavaScript--------------------')
console.log(bookList)






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