// backend/server.js
const express = require("express");
const cors = require("cors");
const reviewController = require("./controllers/reviewController.js");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Review route that uses the reviewController
app.get("/api/reviews", reviewController.getReviews);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const path = require("path");
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});
