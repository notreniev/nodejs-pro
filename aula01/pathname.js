const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'})
    const file = url.parse(req.url, true)
    
    fs.readFile(`./pages/${file.pathname}`, (err, data) => {
        res.write(data)
    })

}).listen(8080)