const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

const { RequestError } = require("../../helpers");

const { SECRET_KEY } = process.env;
console.log(SECRET_KEY);

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(401, "Email not found");
  }
  const comparePassword = await bcrypt.compare(password, user.password);
  console.log(comparePassword);
  if (!comparePassword) {
    throw RequestError(401, "Password wrong");
  }
  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
  res.json({
    token,
  });
};

module.exports = login;
