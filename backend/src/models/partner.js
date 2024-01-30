const mongoose = require("mongoose");
const validator = require("validator");
const Student = require("./student");
const bcrypt = require("bcryptjs");
require("../db/mongoose");

const partnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  contact_number: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid Email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error({ message: "password cannot password" });
      }
    },
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
});

partnerSchema.pre("save", async function (next) {
  const partner = this;

  if (partner.isModified("password")) {
    partner.password = await bcrypt.hash(partner.password, 8);
  }

  next();
});

const Partner = mongoose.model("Partner", partnerSchema);

module.exports = Partner;
