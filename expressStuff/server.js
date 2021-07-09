const { request } = require('express')
const express = require('express')
const session = require('express-session')

const app = express()


app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/static"))
//body parser
app.use(express.urlencoded({extended: true}))
//create session encryption
app.use(session({secret:'i solemnly swear i am upto no good!'}))



app.get('/',(req,res)=>{
    //res.sendFile(__dirname +'/static/ball.html')
})
app.get('/dojos',(req,res)=>{
    var dojos_array = [
        {name:'Dallas', state:'Texas'},
        {name:'Seattle', state:'Washington'},
        {name:'Chicago', state:'Illinois'}
    ]
    res.render('dojos',{dojos:dojos_array})
})
app.get('/result',(req,res)=>{
    res.render('result',{result:req.session.submission})
})
app.post('/dojos',(req,res)=>{
    req.session.submission = {
        newdojo:req.body.newdojo,
        state:req.body.state
    }
    //console.log(req)
    res.redirect('/result')
})



app.listen(8000, ()=>{
    console.log('Listening on port 8000')
})