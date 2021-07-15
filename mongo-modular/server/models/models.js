const mongoose = require('mongoose')


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

module.exports = {
    Pet:Pet,
    User:User,
    Toy:Toy
}