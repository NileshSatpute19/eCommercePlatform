const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
const flash = require("express-flash");
const expSession = require("express-session");
const passport = require("passport");
const { initPassport } = require("./config/passport/passport.auth");

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));

app.use(flash());
app.use(
  expSession({
    secret: "Itsasecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
require("./database/mongoDB").mongoConn();

app.post("/api/submit/", async (req, res, next) => {
  const user = "";
  res.status(200).send({ status: "working", data: user.data });
  return next();
});

app.post(
  "/api/login",
  passport.authenticate("local", {
    successRedirect: "/app/login",
    failureRedirect: "/",
    failureFlash: true,
  })
);

app.listen(3001, function handler() {
  console.log("server started on 3001");
});
