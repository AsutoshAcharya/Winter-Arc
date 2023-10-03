const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");

//it executed for every incoming request
// app.use((req, res, next) => {
//   console.log("in middle ware");
//   next(); //allows the req to continue into next moddleware
// });
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/admin", adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);
