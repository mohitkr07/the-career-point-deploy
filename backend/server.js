const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
require("./src/db/mongoose");
const port = process.env.PORT || 5000;

const app = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const userRouter = require("./src/router/user");
const associateRouter = require("./src/router/associate");
const partnerRouter = require("./src/router/partner");
const path = require("path");

app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use(userRouter);
app.use(associateRouter);
app.use(partnerRouter);

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
