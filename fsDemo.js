// import fs from 'fs'
import fs from 'fs/promises'

// fs.readFile('./text.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })

// const data = fs.readFileSync('./text.txt', 'utf8')
// console.log(data)

// fs.readFile('./text.txt', 'utf8')
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

const readTextFile = async () => {
  try {
    const data = await fs.readFile('./text.txt', 'utf8')
    console.log(data)
  } catch (err) {
    console.log(err)
  }
}

const writeTextFile = async () => {
  try {
    await fs.writeFile('./text.txt', 'Hello, world!')
  } catch (err) {
    console.log(err)
  }
}

const appendTextFile = async () => {
  try {
    await fs.appendFile('./text.txt', '\nIm learning Node.js!')
  } catch (err) {
    console.log(err)
  }
}

writeTextFile()
appendTextFile()
readTextFile()
