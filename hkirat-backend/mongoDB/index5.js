const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://sa9621952_db_user:ddAUi5hQYjQIZx83@mongodb-learn-cluster.avltw1g.mongodb.net/mongodb-learn?retryWrites=true&w=majority&appName=mongodb-learn-cluster");

const User= mongoose.model('user', { name: String, email: String, password: String });

const user = new User({ name: "sanaj", email: "etry7652384@gmail.com",  password: "123456" });  
user.save();