// Using Node.js `require()`
const mongoose = require("mongoose");

const mongoConn = async () => {
  const MONGODB_URL = "mongodb://0.0.0.0:27017/e-comm";
  mongoose
    .connect(MONGODB_URL)
    .then(
      // if database connected
      console.log("Database is connected successfullly")
    )
    .catch((error) => {
      // if there is some error
      console.log("database connection is failed");
      console.log(error);
      process.exit(1);
    });
};

const userSchema = new mongoose.Schema({
  email: { type: String },
  user: { type: String },
  password: { type: String },
  createdAt: { type: String },
});

const userCredModel = mongoose.model("userCredModel", userSchema, "user_cred");
module.exports = { userCredModel, mongoConn };
