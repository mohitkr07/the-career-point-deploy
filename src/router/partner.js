const express = require("express");
const Partner = require("../models/partner");
const router = express.Router();

router.get("/api/partners", async (req, res) => {
  try {
    const partners = await Partner.find({});
    res.send(partners);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.post("/api/partner", async (req, res) => {
  const partner = new Partner(req.body);

  try {
    if (partner) {
      partner.save();
    }
    res.send({ message: "partner added" });
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/api/partner/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const partner = await Partner.findByIdAndDelete(_id);

    if (!partner) {
      throw new Error("no such user exist");
    }
    res.send(partner.name + " deleted");
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
