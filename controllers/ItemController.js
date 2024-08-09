const Item = require("../models/Items");

const getItems = async (req, res) => {
  const results = await Item.find({});
  return res.status(200).send(results);
};

const registerItems = async (req, res) => {
  const { name } = req.body;
  const user = await Item.findOne({ name: name });

  if (!user) {
    const data = new Item({ name: name });

    data.save().then(() => console.log("item added"));

    return res.status(200).send("item added successfully!");
  } else {
    return res.status(500).send("item already exists!");
  }
};

module.exports = {
  getItems,
  registerItems,
};
