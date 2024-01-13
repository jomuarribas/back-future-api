require("dotenv").config();

const express = require("express");
const { backfutureDB } = require("./api/config/backfutureDB");
const characterRoutes = require("./api/routes/Character");

const app = express();

backfutureDB();

app.use(express.json());

app.use("/api/characters", characterRoutes);
app.use("*", (req, res, next) => {
  return res.status(404).json("Route not found")
});


app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000')
});