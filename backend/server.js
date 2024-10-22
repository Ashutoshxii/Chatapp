const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require("cors");
dotenv.config();
const UserModel = require("./models/Users")

const PORT = process.env.PORT;

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/chatapp_users");
console.log("DB connected");

app.post('/login', (req, res) => {
    const {email,password} = req.body ; 
    UserModel.findOne({email:email})
    .then(users => {
        if(users){
            if(users.password===password){
                res.json("Success")
            }
            else{
                res.json("Password  is wrong ")
            }
        }
        else{
            res.json("user don't exist ") 
        }
    })
    .catch(err => res.json(err))
})

app.post('/signup', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



app.listen(PORT,console.log(`Server started on PORT ${PORT}`));