// core modules 
// const http = require('http');

// external modules 
const express = require('express');

// local modules
const userRequestHandler = require('./user')

const app = express();

app.get("/",(req,res,next) => {
    console.log("Came in First Middleware...",req.url,req.method);
    next();
});

app.post("/submit-details",(req,res,next) => {
    console.log("Came in Second Middleware...",req.url,req.method);
    res.send("<p>Welcome to Post Method...</p>")
});

app.use((req,res,next) => {
    console.log("Came in Another Middleware...",req.url,req.method);
    res.send("<p>Raadhe Raadhe...</p>")
})

// const server = http.createServer(app);

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`)
});