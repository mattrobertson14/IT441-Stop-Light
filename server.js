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

function onError(error) {
  console.error('HTTP Server Error' + error)
}

function onListening() {
  var addr = server.address()
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port
  console.log('Listening on ' + bind)
}

