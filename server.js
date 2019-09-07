#!/usr/bin/env node
var http = require('http')
var express = require('express')
var apiRoute = require('./api')

var app = express()

var port = process.env.PORT || '8080'
app.set('port', port)

app.use('/api', apiRoute)
app.use('/', express.static('src'))

var server = http.createServer(app)

server.listen(port)
server.on('error', onError)
server.on('listening', onListening)

// Run Cleanup command if program exits for any reason
server.on('exit', onExit)
server.on('SIGINT', onExit)
server.on('SIGUSR1', onExit)
server.on('SIGUSR2', onExit)
server.on('uncaughtException', onExit)

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
  if (process.env.NODE_ENV !== 'dev'){
    require('./rpi').lightsOut()
  }
}
