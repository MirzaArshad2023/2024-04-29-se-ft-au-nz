const express = require('express')
const app = express()
const myAppRouter = require('./routes/myAppRoutes')
const calRouter = require('./routes/calculatorRoutes')
const userRouter = require('./routes/userRoutes')
//const app2 = express()
const cors = require('cors')

const port = 3000
//const port2 = 3001
app.use(express.json())
app.use(cors())
app.use('/Test', myAppRouter)

app.use('/Calculator', calRouter)
app.use('/users', userRouter)


app.listen(port, ()=> {
    console.log(`Server has started and listening incoming request on port ${port}`)
})

/*app2.listen(port2, ()=> {
    console.log(`Server2 has started on port ${port2}`)
})*/