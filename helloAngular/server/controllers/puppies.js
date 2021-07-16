const { Puppy } = require("../model/puppy")


module.exports = {
    index: (req,res)=>{
        Puppy.find()
        .then(puppies=>{
            console.log('puppy retrieval in process')
            res.json(puppies)
        })
        .catch(err => res.json(err))
    },

    create:(req,res)=>{
        pup = new Puppy()
        pup.name = req.body.name
        pup.color = req.body.color
        pup.save()
            .then(newpup =>{ res.json(newpup)})
            .catch(err => res.json(err))
    }
}