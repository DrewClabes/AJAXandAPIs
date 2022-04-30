// FETCH
// The Fetch API/Method allows the web browser to make HTTP requests to web servers
// Fetch is built into Chrome and other browsers
// Fetch requests return a Promise that must be consumed
// NOTE: Fetch is a newer and better process for making requests than using XHR
// NOTE: When working with API requests and using Live Server it is best to save as you go (AKA Turn off Auto Save) so a request is not made every time you make a change to the file
// NOTE: Using the Friends API (https://friends-quotes-api.herokuapp.com/) for the requests in this lesson

// Example 1 (Consuming the Promise with ".then")
// Making the request to the server using Fetch
// NOTE: GET is default request method/type so do NOT need to specify a method/type when making a GET request with the Fetch API
fetch(`https://friends-quotes-api.herokuapp.com/quotes/random`)
// Consuming the returned Promise ("res" holds the value of the response for the request)
.then(res => {
    console.log(`Fetch Example 1 was successful`);
    // The data we are requesting is in the res (AKA Response) object. However, to access there is one more step.
    console.log(res);
    // Using the json() method which returns a Promise that will have the requested data in it that can be accessed when the Promise is consumed. Also, the json() method converts the data from JSON format to JavaScript.
    return res.json();
})
// Consuming the returned Promise from the "res.json()" (The data parameter has the value of the requested data passed into it)
.then(data => {
    console.log(data);
})
// Catching error for a failed request in the "err" parameter
.catch(err => {
    console.log(`Fetch Example 1 was NOT successful`);
    console.log(err);
});

// Example 2 (Consuming the Promise with Async Await)
async function fetchRandomQuote(){
    // Code inside the TRY runs if the request is successful
    try {
        // Making the requests to the server using fetch
        const quoteResponse = await fetch(`https://friends-quotes-api.herokuapp.com/quotes/random`);
        console.log(`Fetch 2 Example was Successful`);
        console.log(quoteResponse);
        // Using the .json() method which returns a Promise that will have the requested data in it and can be accessed
        const quoteData = await quoteResponse.json();
        console.log(quoteData);
        // Accessing the values of the keys in the quoteData object
        console.log(quoteData.quote);
        console.log(quoteData.character);
    } catch(err){
        console.log(`Fetch Example 2 was NOT Successful`);
        console.log(err);
    }
}
fetchRandomQuote();


// Example 3 (Consuming the Promise with Async Await)
// NOTE: Using the All Quotes Endpoint for this example
async function fetchAllQuotes(){
    try{
        const quoteResponse = await fetch(`https://friends-quotes-api.herokuapp.com/quotes`);
        console.log(`Fetch 3 Example was Successful`);
        console.log(quoteResponse);
        const quoteData = await quoteResponse.json();
        // Data returned is an array of objects
        console.log(quoteData);
        // Selecting the body element
        const body = document.querySelector(`body`);
        // Looping through the quoteData array and displaying the data on the webpage by accessing the values paired with both keys (quote & character) in each object in the array
        for (item of quoteData){
            const p = document.createElement(`p`)
            p.innerText = item.quote;
            const b = document.createElement(`b`);
            b.innerText = item.character;
            body.append(p, b);
        }
    } catch (err) {
        console.log(`Fetch Example 3 was NOT Successful`);
        console.log(err);
        alert(`Oops! Something went wrong!`);
    }
}
fetchAllQuotes();