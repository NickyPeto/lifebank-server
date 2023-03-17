const express = require("express");
const { signIn, signUp, signOut } = require("../controllers/user.controller");

const {
  validateSignUpRequest,
  isRequestValidated,
  validateSignInRequest,
} = require("../middleware/validateUsers");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to LifeBank server" });
});

router.route("/login").post(validateSignInRequest, isRequestValidated, signIn);

router
  .route("/register")
  .post(validateSignUpRequest, isRequestValidated, signUp);

module.exports = router;
