const mongoose = require('mongoose')
const express = require('express')
const config = require('config')

const app = express()

app.use(express.json({extended: true}))
//REGISTRATION ROUTE
app.use('/api/auth', require('./Routes/auth.routes'))
app.use('/api/link', require('./Routes/link.routes'))
app.use('/asd.link', require('./Routes/redirect.routes'))
//CONSTANT IN CONFIG JSON
const PORT = config.get('port' || 3001)

//FUNCTION ASYNC AWAIT BECAUSE CONNECT RETURN PROMISE
async function start(){
    try{
        //CONNECT TO MONGO DB WITH MONGOURI
       await mongoose.connect(config.get('mongoUri'), {
           useNewUrlParser:true,
       })
        app.listen(PORT, () => console.log(`${PORT} has been started`))
    }catch (e) {
        console.log('Server Error', e.message)
        //END PROCESS IF SOMETHING WRONG
        process.exit(1)
    }
}
start()

