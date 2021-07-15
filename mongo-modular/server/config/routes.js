

const Pets = require('../controllers/pets')

module.exports = function(app){

    app.get('/',(req,res)=>{
        Pets.index(req,res)
    })

    app.get('/change',(req,res)=>{
        //findOne is a promise
        Pets.update(req,res)
    })

    app.get('/seed',(req,res)=>{
        Pets.create(req,res)
    })

    app.get('/login',(req,res)=>{
        Pets.login(req,res)
    })


}