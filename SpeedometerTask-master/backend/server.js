// Importing packages
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

// Parsing body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/speed", (req, res) => {
  res.send({
    speed: Math.random() * 160,
  });
});

app.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
