const router = require("express").Router();
const path = require("path");

router.get("^/$|/index(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

router.get("^/users/:userId([0-9]{6})", function (req, res) {
  res.send("Route match for User ID: " + req.params.userId);
});

module.exports = router;
