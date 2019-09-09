#!/usr/bin/env node
var http = require('http')
var express = require('express')
var apiRoute = require('./api')

var app = express()

var port = process.env.PORT || '8080'
app.set('port', port)

app.use('/api', apiRoute)
app.use('/', express.static('../build'))

var server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

// Run Cleanup command if program exits for any reason
process.stdin.resume() // Listen for command to kill server
process.on('SIGINT', onExit)

function onError(error) {
  console.error('HTTP Server Error' + error)
}

function onListening() {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.log('Listening on ' + bind)

  if (process.env.NODE_ENV !== 'dev'){
    require('./rpi').lightsOut()
  }
}

function onExit() {
  console.log('\nNode Server Shutting Down . . .')
  if (process.env.NODE_ENV !== 'dev'){
    require('./rpi').lightsOut()
  }
  process.exit()
}
