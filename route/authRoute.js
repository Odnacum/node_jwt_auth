const auth = require("../controller/authController");
const express = require("express");
const router = express.Router();

router.post("/login", auth.login);
router.post("/posts", auth.userPost);
router.get("/user", auth.test);

module.exports = router;
