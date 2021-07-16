const express = require('express')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/helloApuppy', {useNewUrlParser: true})

const app = express()

//temporary static
app.use(express.static(__dirname+'/public/dist/public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


require('./server/config/routes')(app)

app.listen(8000, _=>{
    console.log('server listening')
})