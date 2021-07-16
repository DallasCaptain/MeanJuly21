const mongoose = require('mongoose')

const PuppySchema = new mongoose.Schema({
    name:String,
    color:String
})

const Puppy = mongoose.model('Puppy',PuppySchema)

module.exports = {
    Puppy:Puppy
}