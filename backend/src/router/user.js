const express = require("express");
const router = new express.Router();
const auth = require("../middleware/auth");

const Student = require("../models/student");
const Admin = require("../models/admin");

require("dotenv").config();

router.get("/api/students", auth, async (req, res) => {
  try {
    const students = await Student.find({});
    res.send(students);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/api/student", auth, async (req, res) => {
  const student = new Student(req.body);
  try {
    if (student) {
      student.save();

      res.send("student saved");
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/api/login", async (req, res) => {
  const cred = req.body;
  if (cred.user == "Partner") {
    return res.send({
      message: "Ops!, Currently Partner login is not available.",
    });
  }
  try {
    const admin = await Admin.findByCredentials(
      req.body.userId,
      req.body.password
    );
    const token = await admin.generateAuthToken();
    res.cookie("test", token, {
      expires: new Date(Date.now() + 432000000),
      httpOnly: true,
    });

    res.send({ message: "success", token: token });
  } catch (e) {
    res.send(e);
  }
});

router.post("/api/signup", async (req, res) => {
  const student = new Student(req.body);
  try {
    await student.save();
    res.send({ message: "Enquiry Sent SuccessFully!" });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/api/student/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const student = await Student.findByIdAndDelete(_id);

    if (!student) {
      throw new Error("student not found");
    }
    res.send(student.name + " removed");
  } catch (e) {
    res.status(500).send(e);
  }
});

// router.post("/admin", async (req, res) => {
//   const admin = new Admin(req.body);

//   try {
//     await admin.save();
//     const token = await admin.generateAuthToken();
//     res.send({ admin, token });
//   } catch (e) {
//     res.status(400).send(e);
//   }
// });

router.get("/api/admin_auth", auth, async (req, res) => {
  try {
    res.send(true);
  } catch (e) {
    res.status(401).send(false);
  }
});

router.get("/api/logout", auth, async (req, res) => {
  try {
    req.admin.tokens = req.admin.tokens.filter((i) => {
      return i.token !== req.token;
    });
    await req.admin.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.get("/api/logoutall", auth, async (req, res) => {
  try {
    req.admin.tokens = [];
    await req.admin.save();
    res.send();
  } catch (e) {
    res.status(500).send();
  }
});

router.patch("/api/admin", async (req, res) => {
  const reqChanges = Object.keys(req.body); //object.keys returns an array of given object
  const validUpdates = [
    "name",
    "userId",
    "password",
    "email",
    "contact_number",
    "office_address",
    "profile",
    "position",
  ];

  const isValidRequest = reqChanges.every((update) =>
    validUpdates.includes(update)
  );

  if (!isValidRequest) {
    return res.status(400).send({ error: `Invalid Update` });
  }

  const id = process.env.ADMIN_ID;
  try {
    const admin = await Admin.findById(id);

    reqChanges.forEach((change) => {
      admin[change] = req.body[change];
    });
    await admin.save();
    if (!admin) {
      res.status(404).send();
    }
    res.send(admin);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/api/basic", async (req, res) => {
  try {
    const basic = await Admin.findById(process.env.ADMIN_ID);
    // console.log(basic);
    res.send({
      name: basic.name,
      userId: basic.userId,
      contact: basic.contact_number,
      email: basic.email,
      office_address: basic.office_address,
      profile: basic.profile,
      position: basic.position,
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
