// //STEP 1 : Importing the required modules
// //How to import the required modules in Node.js by using the require('module-name') function
// const express  =  require('express')

// //STEP 2 : Creating an instance of the Express application
// //How to create an instance of the Express application by calling the express() function
// const app = express()

// //STEP 3 : Defining a route handler for the root URL ('/')
// //Get Method - It Means To Get / Retrieve Data From The Server
// //When User Make a Request To The Root URL ('Url - API') Then The Server Will Response with Data

// app.get('/', (req,res)=>{

//     res.send('Hello Backend Server in Running')

// })

// //2. Defining a route / Path - API
// app.get('/login', (req,res)=>{

//     res.send('This is Login API - Fill The Login Form')
// })

// //STEP 4 : Starting the server and listening on a specific port
// //How to start the server and listen on a specific port by using the app.listen(port, callback) function
// // The Server Will Listen On Port 3000 And When The Server Is Started Then It Will Log A Message To The Console
// // What is Port - It Is A Communication Endpoint That Allows The Server To Receive Requests From Clients

// app.listen(3000, ()=>{
//     console.log('Server Is Running On Port 3000 - http://localhost:3000')
// })



//Example 2 : Using Internal Module in Node js - url module
//STEP 1 : Importing the required modules
const url =   require('url')

var add1 = 'https://www.youtube.com/watch?v=lcvUGs3xaDM'

var add2 = 'https://www.amazon.com/'

//STEP 2 : Parsing the URL using the url.parse() method
var parsedUrl1 = url.parse(add1)
var parsedUrl2 = url.parse(add2)

//STEP 3 : Logging the parsed URL components to the console
console.log('Parsed URL 1:', parsedUrl1)
console.log('Parsed URL 2:', parsedUrl2)