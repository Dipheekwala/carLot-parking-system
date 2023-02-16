const mongoose= require('mongoose')
require('dotenv').config()

const MONGODB_URI=process.env.MONGODB_URI;

function connectToMongoDB() {

    mongoose.connect(
        MONGODB_URI,
        {
            dbName: "carLot",
            useNewUrlparser:true,
            useUnifiedTopology: true,

        },
        (err) =>
            err ? console.log(err) : console.log(
                "connected to carLot database"
            )
     
    )
}
module.exports= {connectToMongoDB};