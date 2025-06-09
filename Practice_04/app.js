const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Raadhe Raadhe</title></head>");
    res.write("<body><h1>Enter Your Details</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter Your Name" /><br/><br/>'
    );
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" name="gender" id="male" value="male" />');
    res.write('<label for="female">Female</label>');
    res.write(
      '<input type="radio" name="gender" id="female" value="female" /><br/><br/>'
    );
    res.write('<input type="submit" value="Submit">');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on('data',chunk =>{
        console.log(chunk);
        body.push(chunk);
    })
    req.on('end', () =>{
        const fullbody = Buffer.concat(body).toString();
        console.log(fullbody);
    })
    fs.writeFileSync('user.txt', 'Raadhe Raadhe');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  } else {
  }
  // process.exit();
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
