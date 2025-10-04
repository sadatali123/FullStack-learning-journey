const express = require("express");

const app = express();

const user = [
  {
    name: "hkirat",
    kidneys: [
      {
        healthy: true,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const MyKidneys = user[0].kidneys;
  const numberOfKidneys = MyKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < numberOfKidneys; i++) {
    if (MyKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.send(
    "Total Kidneys:" + numberOfKidneys + "Healthy Kidneys: " +  numberOfHealthyKidneys +
    " Unhealthy Kidneys: " + numberOfUnhealthyKidneys );
});

app.post("/", function (req, res) {
  const isHealthy = req.body.ishealthy;
  user[0].kidneys.push({ healthy: isHealthy });
  res.send("New Kidney Added");
});

app.put("/", function (req, res) {
    for (let i = 0; i < user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy = true;
    }
    res.json({});
})

app.listen(3000);
