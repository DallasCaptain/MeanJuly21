const mongoose = require('mongoose')
const {Pet,User,Toy} = require('../models/models')
// const Pet = require('../models/models').Pet
// const User = require('../models/models').User
// const Toy = require('../models/models').Toy


module.exports = {
    index: function(req,res){
        Pet.find({})
            .then(pets22 =>{
                res.json(pets22)
                })
            .catch(function(err){
                res.json(err)
            })
    },
    new: '',
    create: function(req,res){
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
    },
    edit: '',
    update: function(req,res){
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
    },
    destroy: '',
    login: function(req,res){
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
    }
}