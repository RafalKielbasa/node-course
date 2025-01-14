import http from 'http'
import fs from 'fs/promises'
import url from 'url'
import path from 'path'

const PORT = process.env.PORT || 3000

const server = http.createServer(async (req, res) => {
  const requestUrl = req.url
  const requestMethod = req.method

  const __filename = url.fileURLToPath(import.meta.url)
  const __dirname = path.dirname(__filename)

  try {
    if (requestMethod === 'GET') {
      let filePath
      if (requestUrl === '/') {
        filePath = path.join(__dirname, 'public', 'index.html')
      } else if (requestUrl === '/about') {
        filePath = path.join(__dirname, 'public', 'about.html')
      } else {
        throw new Error('Page not found')
      }
      const data = await fs.readFile(filePath)
      res.setHeader('Content-Type', 'text/html')
      res.write(data)
      res.end()
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
