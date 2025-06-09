const http = require ('http')

const server = http.createServer((req, res)=>{
    // console.log("reqUrl--->",req.url);
    // console.log("reqMethod--->",req.method);
    // console.log("reqHeader--->",req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Raadhe Raadhe</title></head>')
    res.write('<body><h1>Raadhe Raadhe</h1></body>')
    res.write('</html>')
    res.end()
    // process.exit();
});

const PORT = 3000;
server.listen(PORT,()=>{
    console.log(`Server running on address http://localhost:${PORT}`)
});