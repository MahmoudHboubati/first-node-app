const mongoose = require("mongoose");
const Joi = require("joi");
const genres = require("./routes/genres");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("connected to mongo db"))
  .catch(err => {
    console.log(`cann't connect to mongo`);
  });

app.use(express.json());
app.use("/api/genres", genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listining on port ${port}...`));
