const jwt = require("jsonwebtoken");
require("dotenv").config();
const Admin = require("../models/admin");

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.test;
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const admin = await Admin.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!admin) {
      throw new Error();
    }

    req.admin = admin;
    req.token = token;

    next();
  } catch (e) {
    res.status(404).send(false);
  }
};

module.exports = auth;
