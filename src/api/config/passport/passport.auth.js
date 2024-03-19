const LocalStratergy = require("passport-local").Strategy;
const { getUser } = require("../../database/dbOperations");
const bcrypt = require("bcrypt");

const authenticateUser = async (userName, password, done) => {
  const user = getUser(userName);
  if (!user.data) {
    return done(null, false, { message: "User Not Found !!!" });
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
      console.log("Working Fine !!");
      return done(null, user, { message: "Working Fine !!" });
    } else {
      console.log("Incorrect Password !!");
      return done(null, false, { message: "Incorrect Password !!" });
    }
  } catch (error) {}
};

const initPassport = (passport) => {
  try {
    passport.use(
      new LocalStratergy({ usernameField: "user" }),
      authenticateUser
    );
    passport.serializeUser((user, done) => {});
    passport.deserializeUser((user, done) => {});
  } catch (error) {}
};
module.exports = { initPassport };
