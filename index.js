const express = require("express");
const app = express();
var cors = require("cors");
const port = 3002;
app.use(express.json());
app.use(cors());

const item = require("./routes/ItemRoutes");
// const userRoutes = require("./routes/userRoutes");

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/test11")
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

// middleware
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app.use("/api", item);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// add data to items db using below:
// const data = new Item({ name: "Korea" });
// data.save().then(() => console.log("item added"));
