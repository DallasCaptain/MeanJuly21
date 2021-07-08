const express = require('express')



const app = express()


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/static"))

app.get('/',(req,res)=>{
    //res.sendFile(__dirname +'/static/ball.html')
})
app.get('/dojo',(req,res)=>{
    var dojos_array = [
        {name:'Dallas', state:'Texas'},
        {name:'Seattle', state:'Washington'},
        {name:'Chicago', state:'Illinois'}
    ]
    res.render('dojos',{dojos:dojos_array})
})
app.listen(8000, ()=>{
    console.log('Listening on port 8000')
})