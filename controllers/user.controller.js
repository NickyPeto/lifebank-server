const { response } = require("express");
const { UserSchema } = require("../models/user/userschema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const getUser = async (req, res, next) => {};

const signIn = async (req, res, next) => {
  try {
    let user = UserSchema.findOne({
      email: req.body.email,
    }).exec();
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }

    let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ message: "Invalid password" });
    }

    let token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400, //24 hours
    });

    req.session.token = token;

    res.status(200).send({
      message: "Logged in",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).send({ message: `Error ${err}` });
  }
};

const signUp = (req, res) => {
  try {
    const user = new UserSchema({
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
    });
    user.save();
    res.status(201).send({
      message: "User created",
      register: {
        name: res.data.name,
        surname: res.data.surname,
        email: res.data.email,
        password: res.data.password,
        phoneNumber: res.data.phoneNumber,
      },
    });
  } catch (err) {
    res.status(500).send({
      message: `Error ${err}`,
    });
    return;
  }
};

const signOut = async (req, res) => {
  try {
    req.session = null;
    return res.status(200).send({ message: "you have been signed out" });
  } catch (err) {
    this.next(err);
  }
};

module.exports = { getUser, signIn, signUp, signOut };
