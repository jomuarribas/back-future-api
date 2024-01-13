require("dotenv").config();

const express = require("express");
const { backfuture } = require("./api/config/backfuture");

const app = express();

backfuture();


app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000')
});