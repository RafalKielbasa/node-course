import { EventEmitter } from 'events'

const myEmitter = new EventEmitter()

function goodJobHandler(name) {
  console.log(`Good job! ${name}`)
}

function badJobHandler(name) {
  console.log(`Bad job! ${name}`)
}

myEmitter.on('goodJob', goodJobHandler)
myEmitter.on('badJob', badJobHandler)

myEmitter.emit('goodJob', 'Alice')
myEmitter.emit('badJob', 'Bob')

myEmitter.on('error', (err) => {
  console.error('An error occurred: ', err)
})

myEmitter.emit('error', new Error('Whoops!'))
