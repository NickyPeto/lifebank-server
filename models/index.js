const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const { UserSchema } = require("./user/userschema");

const db = {};

db.mongoose = mongoose;
db.url = dbConfig.url;
db.user = UserSchema;

module.exports = db;
