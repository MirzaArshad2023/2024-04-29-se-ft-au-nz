const express = require('express')
const app = express()
const myAppRouter = require('./routes/myAppRoutes')
//const app2 = express()

const port = 3000
//const port2 = 3001

app.use('/Test', myAppRouter)
app.listen(port, ()=> {
    console.log(`Server has started and listening incoming request on port ${port}`)
})

/*app2.listen(port2, ()=> {
    console.log(`Server2 has started on port ${port2}`)
})*/