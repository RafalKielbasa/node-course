import { createServer } from 'http'
import { users } from './mockData.js'

const PORT = process.env.PORT || 3000

const server = createServer((req, res) => {
  const requestUrl = req.url
  const requestMethod = req.method

  if (requestMethod === 'GET') {
    if (requestUrl === '/api/users') {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(users))
    } else if (requestUrl.match(/\/api\/users\/([0-9]+)/)) {
      const id = parseInt(requestUrl.split('/')[3])
      const user = users.find((user) => user.id === id)
      if (user) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(user))
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'User not found' }))
      }
    } else {
      res.writeHead(404, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify({ message: 'Route not found' }))
    }
  }
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
