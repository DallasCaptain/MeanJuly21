const express = require('express')


const app = express()

//temporary static
app.use(express.static(__dirname+'/public/dist/public'))

require('./server/config/routes')(app)

app.listen(8000, _=>{
    console.log('server listening')
})