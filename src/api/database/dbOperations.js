const { userCredModel } = require("./mongoDB");
const getUser = async (data) => {
  try {
    const user = await userCredModel.findOne({
      user: data.user,
    });
    if (user) {
      return { data: user };
    } else {
      return { data: null };
    }
  } catch (error) {
    console.log(error, "dataOperations");
    return { data: null };
  }
};

module.exports = { getUser };
