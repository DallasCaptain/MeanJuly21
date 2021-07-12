const express = require('express')
//importing mongooose - mongoose is our ORM
const mongoose = require('mongoose')

//mongo connection string
mongoose.connect('mongodb://localhost/Pet',{useNewUrlParser: true})


//define models and schemas for our db
//schema - defines db structure
const PetSchema = new mongoose.Schema({
    name:{ type:String, require:true, minlength: 2},
    color:String,
    age:Number
})
//model - class/objects in js
const Pet = mongoose.model('Pet', PetSchema)

const app = express()

app.get('/',(req,res)=>{
    //find is a promise
    Pet.find({})
        .then(pets22 =>{res.send(pets22)})
        .catch(err =>{res.send(err)})
})

app.get('/change',(req,res)=>{
    //findOne is a promise
    Pet.findOne({name:'fido'})
        .then(pet=>{
            pet.age = 2
            pet.save()
                .then(updatedpet =>{
                    res.send(pet)
                })
                .catch()
        })
        .catch()
})
//commands to create a pet
app.get('/seed',(req,res)=>{
    const pet = new Pet()
    pet.name = 'fido'
    pet.color = 'black'
    pet.age = 5
    //.save tells the db to actually save the pet
    pet.save()
        .then(data =>{
            console.log('creation successful:',data)
            res.redirect('/')
        })
        .catch(err=>{
            console.log('error',err)
            res.redirect('/')
        })
})


app.listen(8000, ()=>{
    console.log('listening on port 8000')
})