const express = require ('express');
const {
    getemployees,
    getemployeeById,
    postemployee,
    updateemployee,
    deleteemployeeById
}= require ("../controllers/employees");

const employeerouter = express.Router()

employeerouter.get("/", getemployees);
employeerouter.get("/:id", getemployeeById);
employeerouter.post("/", postemployee);
employeerouter.patch("/:id", updateemployee);
employeerouter.delete("/:id",deleteemployeeById)
module.exports = employeerouter
