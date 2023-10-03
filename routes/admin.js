const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path");
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});
router.post("/product", (req, res) => {
  console.log(req.body, "dad");
  res.redirect("/");
});
module.exports = router;
