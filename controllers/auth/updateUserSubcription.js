const { User } = require("../../models/user");

const { RequestError } = require("../../helpers");

const updateUserSubcription = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findOneAndUpdate(_id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!result) {
    throw RequestError(404, "Not found");
  }
  res.json(result);
};

module.exports = updateUserSubcription;
