const express = require('express')
const app = express()
const calRouter = require('./routes/calculatorRoutes')

app.use('/Calculator', calRouter)

module.exports = app