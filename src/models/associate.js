const mongoose = require("mongoose");
const validator = require("validator");
require("../db/mongoose");

const associateSchema = new mongoose.Schema({
  college_name: {
    type: String,
    required: true,
    trim: true,
  },
  courses: {
    type: Array,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  website: {
    type: String,
    required: true,
    trim: true,
  },
  logo_link: {
    type: String,
    // required: true,
    trim: true,
  },
});

const Associate = mongoose.model("Associate", associateSchema);

module.exports = Associate;
