const router = require("express").Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("^/new$|/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "new-page.html"));
});

router.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page");
});

router.get("^/users/:userId([0-9]{6})", function (req, res) {
  res.send("Route match for User ID: " + req.params.userId);
});

module.exports = router;
