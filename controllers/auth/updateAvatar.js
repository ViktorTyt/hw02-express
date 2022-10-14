const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models/user");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

// const resize = async (path) => {
//   console.log(path);
//   // Function name is same as of file name
//   // Reading Image
//   const image = await Jimp.read(path);
//   image
//     .resize(250, 250, function (err) {
//       if (err) throw err;
//     })
//     .write(path);
// };

// resize(); // Calling the function here using async
// console.log("Image is processed successfully");

const updateAvatar = async (req, res) => {
  try {
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    const extention = originalname.split(".").pop();
    const filename = `${_id}.${extention}`;
    const resultUpload = path.join(avatarsDir, filename);
    console.log(resultUpload);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join("avatars", filename);
    await User.findByIdAndUpdate(_id, { avatarURL });
    res.json({ avatarURL });
  } catch (error) {
    await fs.unlink(req.file.path);
    throw error;
  }
};

module.exports = updateAvatar;
