const db = require("../models");
const User = db.user;

const checkDuplicateUserOrMail = (req, res, next) => {
  try {
    let user = User.findOne({
      email: req.body.email,
    }).exec();
    if (user) {
      res.status(400).send({
        message: "Failed, name is already registered",
      });
      return;
    }
  } catch (err) {
    res.status(500).json({ message: err });
    return;
  }
};

const veryfySignup = { checkDuplicateUserOrMail };

module.exports = veryfySignup;
