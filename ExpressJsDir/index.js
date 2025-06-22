const express = require("express");
const app = express();

let port = 8080;
app.listen(port, () => {
  console.log(`app is listening ${port}`);
});

app.get("/", (req, res) => {
  res.send("you contacted root path");
});
 
// app.get("/:username/:id", (req, res) =>{
//     console.log(req.params);
//     res.send(`you contacted ${req.params.username} and ${req.params.id}`);
// });

app.get("/:username/:id", (req, res)=>{
    // let {username, id}= req.params;
    let htcode= `<h1>welcome to the page of ${req.params.username}!</h2>`;
    res.send(htcode);
});



// app.post("/", (req, res) => {
//     res.send("you conacted post method to root path");
// });



// app.use((req, res) =>{
//     console.log("request received");
//     let code = "<h1>Fruits</h1><ul><li>Orange</li><li>Apple</li><li>Mango</li></ul>";
//     res.send(code);
// });

