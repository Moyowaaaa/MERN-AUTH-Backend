require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const cors = require('cors')


const app = express()

const PORT  = 5000

app.use(express.json())
app.use(cors())




//testing 
app.get('/',(req,res) => {
    res.send("running")
})


app.use('/api/user', userRoutes)



mongoose.connect(process.env.MONGO_URI)

.then(() => {
app.listen(PORT, () => {

    console.log('connected to db & listening on port', PORT)
  })

})
.catch((error) => {
    console.log(error)
})
