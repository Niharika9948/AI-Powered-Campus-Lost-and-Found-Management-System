const Item = require("../models/Item");
const matchItems = require("../ai/match");

// ➕ Add Item
exports.addItem = async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 📄 Get All Items
exports.getItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ date: -1 });
    res.json(items);
  } catch (err) {
    res.status(500).json(err);
  }
};

// 🤖 AI Match
exports.matchItemsAI = async (req, res) => {
  try {
    const lostItem = req.body;

    const foundItems = await Item.find({ type: "found" });

    const matches = matchItems(lostItem, foundItems);

    res.json(matches);
  } catch (err) {
    res.status(500).json(err);
  }
};