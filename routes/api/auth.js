const { handleLogin } = require("../../controllers/authController");
const router = require("express").Router();

router.post("/", handleLogin);

module.exports = router;
