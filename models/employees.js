const mongoose = require('mongoose')

const Schema = mongoose.Schema

const employeesSchema = new Schema({
       firstname :{
             type:String,
             required:true
       }, 
        lastname : {
            type:String,
            required:true
        },
        email : {
            type:String,
            required:true
        },
        gender :{
            type:String,
            required:true
        },
        race:{
            type :String,
            required:true
        },
        height:{
            type:String,
            required:true
        },
        dob :{
            type:String,
            required:true
        },
        marital_status:{
            type:Boolean,
            required:true
        }
});
module.exports= mongoose.model('employees', employeesSchema);