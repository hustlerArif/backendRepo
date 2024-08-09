const mongoose = require("mongoose");
const Item = mongoose.model("Items", {
  name: { type: String, required: true },
});
module.exports = Item;
