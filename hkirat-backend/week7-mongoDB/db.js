//Initialize the schema of your app in a new file (db.js)
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


const user = new Schema({
    name: String,
    email: String,
    password: String
})

const todo = new Schema({
    title : String,
    done: Boolean,
    userId: ObjectId
})

const usermodel = mongoose.model("users", user);
const todomodel = mongoose.model("todos", todo);

export {usermodel, todomodel};





