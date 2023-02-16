const employees = require('../models/employees')
const employeesModel = require('../models/employees')

const getemployees = (req,res) => {
     
    employeesModel.find()
    .then(employees => {
        res.json(employees)
    })
    //if an error occurs ,log the error message and send the error back to the client.
    .catch(err => {
        console.log(err)
        res.send(err)
    })
}
const getemployeeById = (req , res) => {
    const id =req.params.id
    // Use the employeeModel to find a book by its id

employeesModel.findById(id)
.then(employee => {
    res.status(200).json(employee)
}).catch(err => {
    console.log(err)
    res.status(404). send(err)
})  
}
const postemployee = (req,res) => {
    const employee = req.body
    employee.lastUpdateAt =new Date ()
    employeesModel.create(employee)
    .then(employee => {
        res.status(201).json(employee)
    })  
    .catch(err => {
        console.log(err)
        res.status(500).send(err)
    })
}

const updateemployee = (req,res) => {
    const id = req.params.id
    const employee = req.body

    employee.lastUpdateAt = new Date()

    employeesModel.findByIdAndUpdate( id, employee, {new: true})
    .then(employee => {
        res.status(200).json(employee)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}
const deleteemployeeById =(req,res)=> {
    const id = req.params.id
    employeesModel.findByIdAndRemove(id)
    .then(employee => {
        res.status(200).json("employee deleted successfully!")
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

module.exports={
    getemployees,
    getemployeeById,
    postemployee,
    updateemployee,
    deleteemployeeById
}