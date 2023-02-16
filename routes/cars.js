const express = require ('express');
const {
    getcars,
    getcarById,
    postcar,
    updatecar,
    deletecarById
}= require ("../controllers/cars");

const carrouter = express.Router()

carrouter.get("/", getcars);
carrouter.get("/:id", getcarById);
carrouter.post("/", postcar);
carrouter.patch("/:id", updatecar);
carrouter.delete("/:id",deletecarById)
module.exports = carrouter
