const cars = require('../models/cars')
const carsModel = require('../models/cars')

const getcars = (req,res) => {
     
    carsModel.find()
    .then(cars => {
        res.json(cars)
    })
    //if an error occurs ,log the error message and send the error back to the client.
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}
const getcarById = (req , res) => {
    const id =req.params.id
    // Use the bookModel to find a book by its id

carsModel.findById(id)
.then(car => {
    res.status(200).json(car)
}).catch(err => {
    console.log(err)
    res.status(404). send(err)
})  
}
const postcar = (req,res) => {
    const car = req.body
    car.lastUpdateAt =new Date ()
    carsModel.create(car)
    .then(car => {
        res.status(201).json(car)
    })  
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
}

const updatecar = (req,res) => {
    const id = req.params.id
    const car = req.body

    car.lastUpdateAt = new Date()

    carsModel.findByIdAndUpdate( id, car, {new: true})
    .then(car => {
        res.status(200).json(car)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}
const deletecarById =(req,res)=> {
    const id = req.params.id
    carsModel.findByIdAndRemove(id)
    .then(car => {
        res.status(200).json("car deleted successfully!")
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

module.exports={
    getcars,
    getcarById,
    postcar,
    updatecar,
    deletecarById
}