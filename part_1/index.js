const http = require('http')
const fs = require('fs')
const path = require('path')



const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'text/html;charset=utf-8'
        })

        if (req.url === '/') {
            fs.readFile(
                path.join(__dirname, 'views', 'index.html'),
                'utf-8',
                (err, data) => {
                    if (err) throw err
                    res.end(data)
                }
            )
        } else if (req.url === '/another') {
            fs.readFile(
                path.join(__dirname, 'views', 'another_page.html'),
                'utf-8',
                (err, data) => {
                    if (err) throw err
                    res.end(data)
                }
            )
        } else if (req.url === '/api/users'){
            res.writeHead(200,{
                'Content-Type':'text/json'
            })

            const users = [
                {user:"vasya"},
                {user:"gena"}
            ]
            res.end(JSON.stringify(users))
        }
    } else if (req.method === 'POST') {
        const body = []

        req.on('data', data => {
            body.push(Buffer.from(data))
        })

        req.on('end', () => {

            res.writeHead(200, {
                'Content-Type': 'text/html; charset=utf-8'
            })
            const msg = body.toString()
            res.end(`
                <h1>text: ${msg}</h1>
            `)
        })

    }
})

server.listen(8888, () => {
    console.log('server started')
})