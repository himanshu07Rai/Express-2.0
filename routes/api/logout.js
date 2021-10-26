const { handleLogout } = require("../../controllers/logoutController");

const router = require("express").Router();

router.get("/", handleLogout);

module.exports = router;
