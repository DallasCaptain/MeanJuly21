const express = require('express')
const bcrypt = require('bcrypt')
//importing mongooose - mongoose is our ORM
const mongoose = require('mongoose')

//mongo connection string
mongoose.connect('mongodb://localhost/Pet',{useNewUrlParser: true})

const UserSchema = new mongoose.Schema({
    name:String,
    password:String
})
const User = mongoose.model('User',UserSchema)

const ToySchema = new mongoose.Schema({
    name:String,
    color:String,
})

const Toy = mongoose.model('Toy',ToySchema)


//define models and schemas for our db
//schema - defines db structure
const PetSchema = new mongoose.Schema({
    name:{ type:String, require:true, minlength: 2},
    color:String,
    age:Number,
    toys: [ToySchema]
})
//model - class/objects in js
const Pet = mongoose.model('Pet', PetSchema)

const app = express()

app.get('/',(req,res)=>{
    //find is a promise
    Pet.find({})


        .then(pets22 =>{
            res.send(pets22)
            })



        .catch(function(err){
            res.send(err)
        })
})

app.get('/change',(req,res)=>{
    //findOne is a promise
    Pet.findOne({name:'squeaks'})
        .then(pet=>{
            pet.toys[0].color='tangerine'
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

    //create a user with a secure password
    const user = new User()
    user.name = 'bob'
    //user.password
    bcrypt.hash('mypassword',10)
        .then(hashed_pass =>{
            user.password = hashed_pass
            user.save()
                .then(newuser =>{
                    res.send(newuser)
                })
                .catch(err=>{console.log(err)})
        })
        .catch(err=>{console.log(err)})
        // .then(function(hashed_pass){
        //     user.password = hashed_pass
        //     user.save()
        //         .then(newuser =>{
        //             res.send(newuser)
        //         })
        //         .catch(err=>{console.log(err)})
        // })
    // const newtoy = new Toy()
    // newtoy.name = 'rubber dukcy'
    // newtoy.color = 'yellow'
    // newtoy.save()
    //     .then(toy=>{
    //         const pet = new Pet()
    //         pet.name = 'squeaks'
    //         pet.color = 'white'
    //         pet.age = 2
    //         pet.toys.push(toy)
    //         //.save tells the db to actually save the pet
    //         pet.save()
    //             .then(data =>{
    //                 console.log('creation successful:',data)
    //                 res.redirect('/')
    //             })
    //             .catch(err=>{
    //                 console.log('error',err)
    //                 res.redirect('/')
    //             })
    //     })
    //     .catch(err=>{console.log(err)})





    
})

app.get('/login',(req,res)=>{
    User.findOne({name:'bob'})
        .then(user=>{
            bcrypt.compare('mypassword',user.password)
            .then(result=>{
                if(result){
                    res.send('Successful login')
                }else{
                    res.send('failed login')
                }
                    
                
            })
            .catch(err=>{console.log(err)})
        })
        .catch(err=>{console.log(err)})
})


app.listen(8000, ()=>{
    console.log('listening on port 8000')
})