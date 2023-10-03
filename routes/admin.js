const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name ="title" /><button type="submit">Add Product</button></form>'
  );
});
router.post("/product", (req, res) => {
  console.log(req.body, "dad");
  res.redirect("/");
});
module.exports = router;
