const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  type: String, // lost or found
  location: String,
  date: String
});

module.exports = mongoose.model("Item", ItemSchema);