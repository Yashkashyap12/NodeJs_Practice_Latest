const {sumRequestHandler} = require('./sum');
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Raadhe Raadhe</title></head>");
    res.write("<body><h1>Welcome to the Calculator...</h1>");
    res.write('<a href="/calculator">Go to Calculator</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/calculator") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Raadhe Raadhe</title></head>");
    res.write("<body><h1>Calculator</h1>");
    res.write('<form action="/calculate-result" method="POST">');
    res.write(
      '<input type="text" name="first" placeholder="Enter your num1..." /><br/><br/>'
    );
    res.write(
      '<input type="text" name="second" placeholder="Enter your num2..." /><br/><br/>'
    );
    res.write('<input type="submit" value="Submit" />');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  else if(req.url === '/calculate-result' && req.method === 'POST'){
    return sumRequestHandler(req,res);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Raadhe Raadhe</title></head>");
    res.write("<body><h1>4O4 Not Found...</h1>");
    res.write('<a href="/">Go to Homepage</a>');
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
};

exports.requestHandler = requestHandler;
