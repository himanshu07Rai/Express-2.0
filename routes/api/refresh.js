const {
  handleRefreshToken,
} = require("../../controllers/refreshTokenController");
const router = require("express").Router();

router.get("/", handleRefreshToken);

module.exports = router;
