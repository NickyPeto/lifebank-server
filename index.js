const express = require("express");
const cors = require("cors");

const app = express();

let corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//Implements dotenv to be able to read environment variables
require("dotenv").config();

//Connect db with mongoose
const db = require("./models");
const { login } = require("./models/auth/authschema");
const authSchema = require("./models/auth/authschema");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const loginCall = new authSchema.login({
    data: {
      email: email,
      password: password,
    },
  });
  try {
    await loginCall.save();
    res.status(201).json({
      message: "Login successful",
      login: loginCall.data,
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
