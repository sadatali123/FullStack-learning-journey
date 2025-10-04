// Import the Express module
const express = require("express");

// Create an instance of Express
const app = express();

// Define a route for the root URL ('/')
app.get('/', function(req, res){
  res.send('Hello, World!');
});

app.get("/router-test", function (req, res) {
  res.json({
    name: "sadat",
    id: 23,
  });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, function () {
  console.log(`Server is running on http://localhost:${PORT}`);
});
