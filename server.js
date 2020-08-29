const express = require("express");
const path = require("path");
const app = express();

const assetDir = path.join(__dirname, "build");

app.use(express.static(assetDir));

app.get("/", function (req, res) {
  res.sendFile(path.join(assetDir, "index.html"));
});

app.listen(process.env.PORT || 8080);
