const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/items", require("./routes/items"));

app.listen(5000, () => console.log("Server running on port 5000"));