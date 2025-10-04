// const express = require("express");
// const app = express();

// app.get("/health-cheking", (req, res) => {
    // http://localhost:3000/health-cheking?kidneyId=1 
    // headers: username , password
    // username = "harkirat"
    // password = "pass"

    //  Here we are doing simple auth and validation without any library
    // in real world we use libraries for auth and validation

    // we are using query params and headers to send data to server
    // query params are uded to send data to server by url 
    // headers are used to send data to server by headers

    // validation
    // username and password should be correct
    // kidneyId should be 1 or 2

    // dummy methood
//     const username = req.headers.username;
//     const password  = req.headers.password;
//     const kidneyId = req.query.kidneyId;
    
//     if(username != "harkirat" || password != "pass"){
//         res.status(400).json("msg: something went wrong");
//         return
//     }

//     if(kidneyId !=1 && kidneyId !=2){
//         res.status(400).json("msg:something went wrong");
//         return
//     }

//     res.json({
//         "msg": "all good"
//     })


// });

// app.listen(3000);



const app = express();

function userMiddleware(req, res, next) {
    if (username != "harkirat" && password != "pass") {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
};

function kidneyMiddleweare(req, res, next) {
    if (kidneyId != 1 && kidneyId != 2) {
        res.status(403).json({
            msg: "Incorrect inputs",
        });
    } else {
        next();
    }
};

app.get("/health-checkup", userMiddleware, kidneyMiddleweare, function (req, res) {
    // do something with kidney here

    res.send("Your heart is healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleweare, function (req, res) {
    // do something with kidney here

    res.send("Your heart is healthy");
});

app.get("/heart-check", userMiddleware, function (req, res) {
    // do something with user here

    res.send("Your heart is healthy");
});

