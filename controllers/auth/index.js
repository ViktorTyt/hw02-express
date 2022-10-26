const register = require("./register");
const verify = require("./verify");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateUserSubcription = require("./updateUserSubcription");
const updateAvatar = require("./updateAvatar");

module.exports = {
  register,
  verify,
  login,
  getCurrent,
  logout,
  updateUserSubcription,
  updateAvatar,
};
