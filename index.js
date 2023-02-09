const express = require("express");
const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");
const Students = require("./src/routes/Students");
const Users = require("./src/routes/Users");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

dir = path.join(__dirname, "uploads");
app.use(express.static(dir));

mongoose
  .connect(
    `mongodb+srv://hackour:admin@cluster0.tc5bq.mongodb.net/test?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.use("/student", Students);
app.use("/user", Users);

app.listen(port, () => console.log(`listening on port ${port}`));
