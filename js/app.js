var json = `{
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


// JavaScript Parsing Nested i Json
let staff = [
 {"name": "Harry Potter","ocupation": "tester","age": 20,
  "gender": "Fantasy Fiction"},

{"paperback": "$10.40", "hardcover": "$20.32", "kindle": "$4.11"}
  
];


let compList = JSON.parse(json)
console.log(compList)

console.log('--------------------------------')



let staffList = JSON.stringify(staff)
console.log(staffList)