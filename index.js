const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Welcome to husky tutorial");
});

const port = 5000;
server.listen(port);
server.on("listening", () => {
  console.info("server up listening");
});
