const http = require("http");
const server = http.createServer((req, res) => {
    if(req.url==='/'){
        res.write('welcome dear')
        res.end()
    }
    if(req.url==='/about'){
        res.write('about page!')
        res.end()
    }
});


server.listen(3002)
console.log('listening on port 3002')