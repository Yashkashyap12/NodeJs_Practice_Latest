const sumRequestHandler = (req, res) => {
  console.log("In sum request handler", req.url);
  const body = [];
  req.on("data", (chunk) => body.push(chunk));
  let result;
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    const result = parseInt(bodyObj.first) + parseInt(bodyObj.second);
    console.log(result);
  });

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Raadhe Raadhe</title></head>");
  res.write(`<body><h1>Your Result is = ${result}</h1>`);
  res.write('<a href="/">Go to Homepage</a>');
  res.write("</body>");
  res.write("</html>");
  return res.end();
};

exports.sumRequestHandler = sumRequestHandler;
