const mongoose = require("mongoose");
require("../db/mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

require("dotenv").config();

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  userId: {
    type: String,
    trim: true,
    unique: true,
    lowercase: true,
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
  position: {
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
  contact_number: {
    type: String,
  },
  office_address: {
    type: String,
    required: true,
    trim: true,
  },
  profile: {
    type: String,
    required: true,
    trim: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

adminSchema.methods.generateAuthToken = async function () {
  const admin = this;

  const token = jwt.sign({ _id: admin._id.toString() }, process.env.SECRET_KEY);

  admin.tokens = admin.tokens.concat({ token });
  await admin.save();

  return token;
};

adminSchema.statics.findByCredentials = async (userId, password) => {
  const admin = await Admin.findOne({ userId });

  if (!admin) {
    throw new Error("Unable to Login");
  }
  const isMatch = await bcrypt.compare(password, admin.password);

  if (!isMatch) {
    throw new Error("Unable to login");
  }

  return admin;
};

adminSchema.pre("save", async function (next) {
  const admin = this;

  if (admin.isModified("password")) {
    admin.password = await bcrypt.hash(admin.password, 8);
  }

  next();
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
