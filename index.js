const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

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
const {
  schema,
  dataArray,
} = require("./models/transactions/transactionsschema");

const {
  investmentsSchema,
  investmentsData,
} = require("./models/investments/investmentsschema");

const { billsSchema, billsData } = require("./models/bills/billsschema");
const { signUp, signIn, signOut } = require("./controllers/user.controller");
const { checkDuplicateUserOrMail } = require("./middleware/verifyUser");

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

app.use(
  cookieSession({
    name: "bezkoder-session",
    // keys: ['key1', 'key2'],
    secret: "COOKIE_SECRET", // should use as secret environment variable
    httpOnly: true,
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to LifeBank server" });
});

app.post("/login", (req, res) => {
  signIn(req, res);
});

app.post("/register", async (req, res) => {
  checkDuplicateUserOrMail(req, res);
  signUp(req, res);
});

app.get("/transactions", async (req, res) => {
  try {
    await schema.insertMany(dataArray);
    res.status(200).json({
      message: "Data retrieved successfully",
      transactions: dataArray,
    });
  } catch (e) {
    console.log(e);
  }
});

app.get("/investments", async (req, res) => {
  try {
    await investmentsSchema.insertMany(investmentsData);
    res.status(200).json({
      message: "Investments data retrieved successfully",
      transactions: investmentsData,
    });
  } catch (e) {
    console.log(e);
  }
});

app.get("/bills", async (req, res) => {
  try {
    await billsSchema.insertMany(billsData);
    res.status(200).json({
      message: "Bills data retrieved successfully",
      transactions: billsData,
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
