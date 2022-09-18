const express = require("express");
const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

//rotes
const tourRoute = require("./routes/tour.route");

app.get("/", (req, res) => {
  res.send("Tour Management System server");
});

// posting and get data from database
app.use('/tours', tourRoute);

module.exports = app;