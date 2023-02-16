const owners = require('../models/owners')
const ownersModel = require('../models/owners')

const getowners = (req,res) => {
     
    ownersModel.find()
    .then(owners => {
        res.json(owners)
    })
    //if an error occurs ,log the error message and send the error back to the client.
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}
const getownerById = (req , res) => {
    const id =req.params.id
    // Use the employeeModel to find a book by its id

ownersModel.findById(id)
.then(owner => {
    res.status(200).json(owner)
}).catch(err => {
    console.log(err)
    res.status(404). send(err)
})  
}
const postowner = (req,res) => {
    const owner = req.body
    owner.lastUpdateAt =new Date ()
    ownersModel.create(owner)
    .then(owner => {
        res.status(201).json(owner)
    })  
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
}

const updateowner = (req,res) => {
    const id = req.params.id
    const owner = req.body

    owner.lastUpdateAt = new Date()

    ownersModel.findByIdAndUpdate( id, owner, {new: true})
    .then(owner => {
        res.status(200).json(owner)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}
const deleteownerById =(req,res)=> {
    const id = req.params.id
    ownersModel.findByIdAndRemove(id)
    .then(owner => {
        res.status(200).json("owner deleted successfully!")
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

module.exports={
    getowners,
    getownerById,
    postowner,
    updateowner,
    deleteownerById
}