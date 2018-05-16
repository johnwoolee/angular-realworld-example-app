const express = require("express");
const path = require("path");
const app = express();

app.get(
  "*",
  express.static(path.join(__dirname, "dist"), {
    fallthrough: false
  })
);

app.listen(3001, () => {
  console.log("magic!");
});
