const hostname = process.env.HOST;
const port = process.env.PORT;

app.use((req, res, next) => {
console.log(req.headers);
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});