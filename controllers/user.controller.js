const db = require("../models");
const { StatusCodes } = require("http-status-codes");
const { UserSchema } = require("../models/user/userschema");
const bcrypt = require("bcrypt");

async function signIn(req, res, next) {
  try {
    const user = await UserSchema.findOne({
      email: req.body.email,
    });
    console.log(user, req.body.email);
    if (!user) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Invalid username or password" });
    }

    const isPasswordMatched = bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (!isPasswordMatched) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Invalid username or password" });
    }
    res.status(StatusCodes.OK).json({ message: "Logged in successfully!" });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: `Error ${err}` });
  }
}

async function signUp(req, res, next) {
  const { name, surname, email, password, phoneNumber } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const user = new UserSchema({
    name: name,
    surname: surname,
    email: email,
    password: hashedPassword,
    phoneNumber: phoneNumber,
  });
  try {
    console.log(user, "user");
    await user.save();
    console.log("user saved", user);
    res.status(201).json({
      message: "User created",
      register: {
        name: name,
        surname: surname,
        email: email,
        phoneNumber: phoneNumber,
      },
    });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({
        message: "User already exists",
      });
    } else {
      res.status(500).json({
        message: `Error ${err}`,
      });
    }
  }
}

async function signOut(req, res) {
  try {
    req.session = null;
    return res.status(200).send({ message: "you have been signed out" });
  } catch (err) {
    this.next(err);
  }
}

module.exports = { signIn, signUp, signOut };
