const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// DBConnect();
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log("Connected to database".green.inverse);
});

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Tour Management System is running on port ${port}`.yellow.bold);
});