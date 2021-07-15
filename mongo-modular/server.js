const express = require('express')
const bcrypt = require('bcrypt')
//importing mongooose - mongoose is our ORM
const mongoose = require('mongoose')

//mongo connection string
mongoose.connect('mongodb://localhost/Pet',{useNewUrlParser: true})

const app = express()
app.use(express.json())


require('./server/config/routes')(app)

app.listen(8000, ()=>{
    console.log('listening on port 8000')
})