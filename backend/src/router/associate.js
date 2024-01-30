const express = require("express");
const Associate = require("../models/associate");
const router = express.Router();

router.get("/api/associates", async (req, res) => {
  try {
    const associates = await Associate.find({});
    res.send(associates);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/api/associate", async (req, res) => {
  const associate = new Associate(req.body);

  try {
    if (associate) {
      await associate.save();
      res.send({ message: "associate added" });
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/api/associate/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const associate = await Associate.findByIdAndDelete(_id);
    if (!associate) {
      throw new Error("no such associate exist");
    }
    res.send(associate.college_name + " removed from database");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
