const mongoose = require('mongoose')

const Schema = mongoose.Schema

const carSchema = new Schema({
       brand :{
             type:String,
             required:true
       }, 
        model : {
            type:String,
            required:true
        },
        year : {
            type:String,
            required:true
        },
        regNumber :{
            type:Number,
            required:true
        },
        colour:{
            type :String,
            required:true
        },
        transmission:{
            type:String,
            required:true
        },
        bodyStyle :{
            type:String,
            required:false
        }
});
module.exports= mongoose.model('cars', carSchema);