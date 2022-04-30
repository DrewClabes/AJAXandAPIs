// AJAX & APIs

// AJAX (Asynchronous JavaScript and XML)
// AJAX is used to communicate with servers (Servers are where data is stored (AKA Accessed from))
// NOTE: JSON is more commonly used now instead of XML so technically it would be AJAJ (Asynchronous JavaScript and JSON)

// APIs (Application Programming Interface)
// A Web API is an interface can be accessed using HTTP Protocol (AKA URL/Endpoint) to access specific data

// REST (Representational State Transfer) APIs
// REST APIs are APIs made for the web that adhere to certain rules which determine how a user can interact with them (AKA Interact with the data in the API)

// JSON (JavaScript Object Notation)
// JSON is lightweight format for storing and transporting data. JSON is often used when data is sent from a server to a webpage.

// Changing JSON into JavaScript
// NOTE: When receiving data from a web server, the data is always a string
// Example of a String of JSON
const stringJSON = `{"username":"johnDoe123", "active":"true"}`;
console.log(stringJSON);
console.log(`=`.repeat(25));
// JSON.parse() changes format from JSON to JavaScript
const newJS = JSON.parse(stringJSON);
console.log(newJS); //{username: 'johnDoe123', active:true }
console.log(newJS.username);
console.log(newJS.active);