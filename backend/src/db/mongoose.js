const mongoose = require("mongoose");
require("dotenv").config();

// mongodb://127.0.0.1:27017
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});
