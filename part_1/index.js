const http = require('http')



const server = http.createServer((req, res) => {
  console.log(req.url)
  res.write('<h1>He</h1>')
  res.write('<h2>He</h2>')

  //конец респонса, обязателен. может быть пустым
  res.end('<div>finish</div>')
})

server.listen(8888, () => {
    console.log('server started')
}
)