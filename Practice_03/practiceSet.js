const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Raadhe Raadhe</title></head>");
    res.write("<body><h1>Welcome To The Myntra Site</h1>");
    res.write('<a href="/">Home</a><br>');
    res.write('<a href="/men">Men</a><br>');
    res.write('<a href="/women">Women</a><br>');
    res.write('<a href="/kids">Kids</a><br>');
    res.write('<a href="/cart">Cart</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  else if(req.url === '/men'){
    res.setHeader("Content-Type", "text/html");
    res.write('<h1>Welcome to the men category...</h1>');
    return res.end();
  }
  else if(req.url === '/women'){
    res.setHeader("Content-Type", "text/html");
    res.write('<h1>Welcome to the women category...</h1>');
    return res.end();
  }
  else if(req.url === '/kids'){
    res.setHeader("Content-Type", "text/html");
    res.write('<h1>Welcome to the kids category...</h1>');
    return res.end();
  }
  else if(req.url === '/cart'){
    res.setHeader("Content-Type", "text/html");
    res.write('<h1>Welcome to the cart category...</h1>');
    return res.end();
  }
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
