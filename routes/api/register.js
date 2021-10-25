const { handleNewUser } = require("../../controllers/registerController");

const router = require("express").Router();

router.route("/").post(handleNewUser);

module.exports = router;
