import crypto from 'crypto'

// const hash = crypto.createHash('sha256')
// hash.update('Test1234')
// console.log(hash.digest('hex'))

// crypto.randomBytes(8, (err, buf) => {
//   if (err) {
//     throw err
//   }
//   console.log(buf.toString('hex'))
// })

const algorithm = 'aes-192-cbc'
const key = crypto.randomBytes(24)
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('some clear text data', 'utf8', 'hex')
encrypted += cipher.final('hex')
console.log(encrypted)

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted += decipher.final('utf8')
console.log(decrypted)
