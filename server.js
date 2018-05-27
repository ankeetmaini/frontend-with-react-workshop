const express = require("express");
const path = require("path");

const app = express();
const buildPath = path.resolve(__dirname, "build");

app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(buildPath, "index.html"));
});

app.listen(3000, () => console.log("App is listening at port=3000."));
