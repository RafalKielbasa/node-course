import { createServer } from 'http'
import { users } from './mockData.js'

const PORT = process.env.PORT || 3000

const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
}

const jsonMiddleware = (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next()
}

const allUsersHandler = (req, res) => {
  res.statusCode = 200
  res.end(JSON.stringify(users))
}

const userByIdHandler = (req, res) => {
  const id = parseInt(req.url.split('/')[3])
  const user = users.find((user) => user.id === id)
  if (user) {
    res.statusCode = 200
    res.end(JSON.stringify(user))
  } else {
    res.statusCode = 200
    res.end(JSON.stringify({ message: 'User not found' }))
  }
}

const notFoundHandler = (req, res) => {
  res.statusCode = 404
  res.end(JSON.stringify({ message: 'Route not found' }))
}

const server = createServer((req, res) => {
  jsonMiddleware(req, res, () => {
    logger(req, res, () => {
      const requestUrl = req.url
      const requestMethod = req.method

      if (requestMethod === 'GET') {
        if (requestUrl === '/api/users') {
          allUsersHandler(req, res)
        } else if (requestUrl.match(/\/api\/users\/([0-9]+)/)) {
          userByIdHandler(req, res)
        } else {
          notFoundHandler(req, res)
        }
      }
    })
  })
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
