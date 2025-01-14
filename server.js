import http from 'http'

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method

  try {
    if (method === 'GET') {
      if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>Welcome in Devstock!</h1>')
      } else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end('<h1>About us</h1>')
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>Page not found</h1>')
      }
    } else {
      throw new Error('Method not supported')
    }
  } catch (error) {
    res.writeHead(500, { 'Content-Type': 'text/html' })
    res.end(`<h1>Something went wrong</h1><p>${error.message}</p>`)
  }
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
