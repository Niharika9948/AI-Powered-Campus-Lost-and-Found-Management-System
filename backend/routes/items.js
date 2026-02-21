const express = require("express");
const router = express.Router();

const {
  addItem,
  getItems,
  matchItemsAI
} = require("../controllers/itemController");

// Routes
router.post("/", addItem);
router.get("/", getItems);
router.post("/match", matchItemsAI);

module.exports = router;