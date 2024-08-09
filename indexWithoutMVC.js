const express = require("express");
const app = express();
const port = 3002;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World! express app");
});

app.get("/data", (req, res) => {
  const data = [
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      userId: 2,
      id: 6,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
  ];

  res.send(data);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send(`user registered`);
});


const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/test11")
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

const Item = mongoose.model("Items", {
  name: { type: String, required: true },
});

const getItems = async (req, res) => {
  const results = await Item.find({});
  return res.status(200).send(results);
};

app.get("/items", getItems);

// add data to items db using below:
// const data = new Item({ name: "Korea" });
// data.save().then(() => console.log("item added"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
