console.log("Raadhe Raadhe Node Js...")
const fs = require('fs');
fs.writeFile("output.txt", "Writing File...",(err)=>{
    if(err) console.log("Found Error...");
    else console.log("File Written Succesfully");
})