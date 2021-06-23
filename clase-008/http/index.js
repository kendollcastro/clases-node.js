const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/plain' })
    res.write('Hola mundo!')
    res.end()
})

server.listen(5000)
console.log('Node.js listening on port 5000')