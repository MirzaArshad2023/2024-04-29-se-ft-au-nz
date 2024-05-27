const express = require('express')
const appRouter = express.Router()

appRouter.use('/', express.static('public'))

appRouter.get('/Home', (req, res)=> {
    res.send('Hello Client')
} )

appRouter.get('/Contact', (req, res)=> {
    res.send('Contact 222-222-222')
})

appRouter.get('/About', (req, res)=> {
    res.send('2024 IOD Limited')
})

appRouter.get('/newPost', (req, res) => {
    res.send('New post to add')
})

module.exports = appRouter