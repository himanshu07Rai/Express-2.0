const express = require("express");

const app = express();
const path = require("path");

app.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});
app.get("^/new$|/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("^/users/:userId([0-9]{6})", function (req, res) {
  res.send("Route match for User ID: " + req.params.userId);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server runnig on port ${PORT}`));
