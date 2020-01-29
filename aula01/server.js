const http = require('http')
const url = require('url')
const { dateNow } = require('./utils')
http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'})
    const q = url.parse(req.url, true).params
    const txt = q.year + " " + q.month

    res.end(txt)
}).listen(8080)