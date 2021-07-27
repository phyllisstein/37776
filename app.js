#!/usr/bin/env node

const { createServer } = require('http')
const next = require('next')

const {
  HOSTNAME = 'localhost',
  NODE_ENV = 'development',
  PORT = '37796',
} = process.env

const dev = NODE_ENV === 'development'
const portNumber = Number.parseInt(PORT, 10)

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res)
  }).listen(portNumber, HOSTNAME, err => {
    if (err) throw err
  })
})
