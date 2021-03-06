require("dotenv").config();

const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Mongo connected DB at:", process.env.MONGO_URI);
  }
);

module.exports.Adeez = require("./adeez");
module.exports.Ninedeez = require("./ninedeez");
module.exports.Otz = require("./otz");
module.exports.GameScheme = require("./gameScheema");

