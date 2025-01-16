import url from 'url'

const myUrl = 'http://mywebsite.com/hello.html?id=100&status=active'

const urlObject = new URL(myUrl)

// console.log(urlObject)

// console.log(url.format(urlObject))

// console.log(import.meta.url)

console.log(url.fileURLToPath(import.meta.url))

const params = new URLSearchParams(urlObject.search)

console.log(params)

console.log(params.get('id'))
