const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  console.log("First Dummmy Middleware...", req.url, req.method);
  next();
});

app.use("/", (req, res, next) => {
  console.log("Second Dummmy Middleware...", req.url, req.method);
  next();
});

// app.use("/",(req,res,next)=>{
//     console.log("Final Dummmy Middleware...", req.url , req.method);
//     res.send("<p>Welcome to the Final Middleware...</p>");
// })

app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<p>Welcome to the Final Middleware...</p>`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(`
        <p>Please give your details here...</p>
        <form action="/contact-us" method="POST">
        <input type="text" placeholder="Enter Your Name..." name="name" />
        <input type="email" placeholder="Enter Your Email..." name="email" />
        <input type="submit" />
        </form>
        `);
});

app.post("/contact-us", (req, res, next) => {
  res.send(`<p>We will Contact you soon...</p>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
