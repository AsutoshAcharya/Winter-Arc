const http = require("http");
const express = require("express");

const app = express();

//it executed for every incoming request
app.use((req, res, next) => {
  console.log("in middle ware");
  next(); //allows the req to continue into next moddleware
});

app.use((req, res, next) => {
  console.log("in another ware");
});
const server = http.createServer(app);
server.listen(3000);
