const mongoose = require("mongoose");

const backfutureDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Successfully connected to the DDBB");
  } catch (err) {
    console.error("connection error: " + err.message);
  }
};

module.exports = { backfutureDB };