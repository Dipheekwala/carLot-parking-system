const express = require ('express');
const {
    getowners,
    getownerById,
    postowner,
    updateowner,
    deleteownerById
}= require ("../controllers/owners");

const ownerrouter = express.Router()

ownerrouter.get("/", getowners);
ownerrouter.get("/:id", getownerById);
ownerrouter.post("/", postowner);
ownerrouter.patch("/:id", updateowner);
ownerrouter.delete("/:id",deleteownerById)
module.exports = ownerrouter
