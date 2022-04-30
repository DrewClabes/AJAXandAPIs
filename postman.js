// POSTMAN
// Postman is an API tool that makes it east ro create, share, test, and document APIs

// REQUEST METHODS/TYPES
// GET (Getting/Receiving Data from an API)
// POST (Creating/Adding Data to an API)
// PUT (Updating/Changing Data in an API)
// DELETE (Deleting/Removing Data from an API)
// NOTE: We will focus on GET Request

// STATUS CODES
// 200 codes are good (Request was successful)
// 400 codes are bad (Request was NOT successful because of something wrong with the request)
// 500 codes are also bad (Request was NOT successful because something wrong with the request is being made to)

// HEADERS
// Every request returns Headers. Headers contain the meta-data/info for a request
// Example of Headers returned from a request...
// Contains Type (JSON, HTML, XXL, etc)
// Data/Time
// Etc.

// PARAMETERS & QUERY STRINGS
// Parameters & Query Strings are part of a URL/Endpoint where certain values can be added in
/*
Parameter Example

https://www.espn.com/:sport
OR
https://www.espn.com/{sport}

Adding in a value for a parameter...
NOTE: mlb is used in place of sport parameter in this example

https://www.espn.com/mlb/
*/

/*
Query String Example
NOTE: Query Strings use a question mark ?

https://api.tvmaze.com/search/shows?q=:query

Adding in a value for the query string...
NOTE: %20 can be used to create space in a URL/Endpoint

https://api.tvmaze.com/search/shows?q=the%20flash

*/