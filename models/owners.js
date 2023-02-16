const mongoose = require('mongoose')

const bcrypt = require('bcrypt')


const Schema = mongoose.Schema

const ownersSchema = new Schema({
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
        password :{
            type:String,
            required:true
        },
        carNum:{
            type :Number,
            required:true
        },
        username:{
            type:String,
            required:true
        },
        state :{
            type:String,
            required:true
        },
        
});

ownersSchema.pre('save', function(next) {
    if(this.password) {
        const salt = bcrypt.genSaltSync(10)
        this.password = bcrypt.hashSync(this.password, salt)
    }
    next()
})
module.exports= mongoose.model('owners', ownersSchema);