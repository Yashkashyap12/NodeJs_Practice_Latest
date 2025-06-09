const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Raadhe Raadhe</title></head>");
    res.write("<body><h1>Raadhe Raadhe</h1></body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Raadhe Raadhe</title></head>");
    res.write("<body><h1>About Us</h1></body>");
    res.write("</html>");
    return res.end();
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Raadhe Raadhe</title></head>");
    res.write("<body><h1>Byy Byy</h1></body>");
    res.write("</html>");
    return res.end();
  }
  // process.exit();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
