const puppies = require("../controllers/puppies")

module.exports = function(app){
    app.get('/',(req,res)=>{
        //serve angular - default static index.html
    })

    app.get('/api/puppies',(req,res)=>{
        puppies.index(req,res)
    })

    app.post('/api/puppies',(req,res)=>{
        puppies.create(req,res)
    })
}