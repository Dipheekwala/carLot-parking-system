const express = require('express');
const carrouter = require('./routes/cars');
const employeerouter = require('./routes/employees');
const ownerrouter = require('./routes/owners');
const bodyParser = require("body-parser");
const users = require("./models/owners")


require('dotenv').config();
const db = require('./database/db')

const port = process.env.port;

const app = express()

db.connectToMongoDB();

app.get("/homepage", (req,res)=> {
    res.status(200).json({message:"this is the home page"})

})

app.use(express.static('public'));
app.use(express.json());


app.use('/cars',authentication, carrouter);

app.use('/owners',authentication, ownerrouter);

app.use('/employees',authentication, employeerouter);

const bcrypt =require('bcrypt');
const userrouter = require('../carLot/routes/owners');




app.post('/login', async (req,res)=> {
    //extract the username and password from the request body
    const { username,  password} = req.body;
    //find the user in the list of users by matching the provided username
    const user = await users.findOne({username})

        if (!user){
            return res.status(401).json({
                message:"auth failed"
            });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)
        if(!isPasswordMatch) {
            return res.json({
                message: "auth failed"
            })
        }
            // if the passwords match create an authentication token 
            const token = Buffer.from(`${username}:${password}`).toString('base64');
            //return a 200 ok rersponse with the auth successful message and the token
            return res.status(200).json({
                message: 'auth successful',
                token

            });     
        })


//Middleware to authenticate request 
async function authentication(req, res, next) {
    if (req.headers.authorization) {
        const authHeader = req.headers.authorization.split(' ');

        const authType = authHeader[0];
        const authValue= authHeader[1];
        
        if (authType === 'Basic'){
            const [ username,password ] = Buffer.from(authValue , 'base64').toString().split(":")
            const user = await users.findOne({username})
                if (!user){
                return res.status(401).json({
                    message :"authentication failed"
                });
            }

            // compare passwords   
            const isPasswordMatch = await bcrypt.compare(password,user.password);        
            if (isPasswordMatch){
                req.user = user.username;
                next();
            } else {
                return res.status(401).json({
                    message: 'unauthorized'
                })
            }
        } else {
            return res. status(401).json({
                message:'Auth failed'
            });
        }
    } else {
        return res.status(401).json({
            message: "auth header not [present"
        })
    }
}


app.listen(port,()=> {
console.log(`app is listening at http://localhost:${port}`);
})