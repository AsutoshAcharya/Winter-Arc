const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(
    '<h1 style="background-color:red;color:cyan;width:50%">Hello from express shop</h1>'
  );
});

module.exports = router;
