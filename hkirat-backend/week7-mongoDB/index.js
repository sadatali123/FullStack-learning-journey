import express from "express";
const app=express();
import {usermodel, todomodel} from "./db.js";
app.use(express.json()); // Middleware to parse JSON body
import jwt from "jsonwebtoken";
const JWT_KEY = "2123fdsd21";

import mongoose from "mongoose";
mongoose.connect("mongodb+srv://sa9621952_db_user:aXcqmThtTFe2OcLZ@cluster0.hdosz5f.mongodb.net/sadat--5673?retryWrites=true&w=majority");

app.post("/signup", async function(req,res){
    const name = req.body.name; // accessing name from req body sent by the client
    const email = req.body.email; // accessing email from req body sent by the client
    const password = req.body.password; 

await usermodel.create({
    name: name,
    email: email,
    password: password
})
  res.json({
        message: "You are signed up"
    })

});
 
app.post("/signin", async function(req,res){
 const email = req.body.email;
 const password = req.body.password;

 const user = await usermodel.findOne({
    email: email,
    password: password
 })

 if(user){
    res.json({
        token: jwt.sign({id: user._id}, JWT_KEY)
    })
 } else{
    res.status(403).json({
        message: "incorrect email or password"
    })
 }

});
 

app.post("/todo", function(req,res){

});

app.get("/todos", function(req, res){

});

// you have to implement the authentication middleware here
// authentication middleware
const authenticate = (req, res, next) => {

}


app.listen(3000);