const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

//it executed for every incoming request
// app.use((req, res, next) => {
//   console.log("in middle ware");
//   next(); //allows the req to continue into next moddleware
// });
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name ="title" /><button type="submit">Add Product</button></form>'
  );
});
app.post("/product", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  //   console.log("in another ware");
  res.send(
    '<h1 style="background-color:red;color:cyan;width:50%">Hello from express </h1>'
  );
});
app.listen(3000);
