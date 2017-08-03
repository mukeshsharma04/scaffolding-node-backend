const express = require("express");
const router = express.Router();
const baseController = require("./../controller/base");

router.get("/", function (req, res) {
  let get_data = baseController.test();
  console.log("Data", get_data);
  res.status(200).send(get_data);
});

module.exports = router;